import React, { useState, useEffect } from 'react';
import './styles/App.css';
import DisplayBooksList from "./components/DisplayBookList";
import SearchBar from "./components/SearchBar";

var data = require("./data/books.json");
const booksListBackUp = (data.books[0]);
// const booksList = [...booksListBackUp];

function App() {
  const [ displayList, setDisplayList ] = useState(true);
  const [ booksList, setBooksList ] = useState([...booksListBackUp]);
  const [ filteredList, setFilteredList ] = useState([...booksList])
  const [ keywords, setKeywords ] = useState('');
  const [ favFilter, setFavFilter ] = useState(true);
  const [ readFilter, setReadFilter ] = useState(true);

  // useEffect( () => console.log('useEffect'), []);

  //Les 2 fonctions d'ajout aux Favoris et à la Read-list

  function updateFavoriteStatus(bookFav){
    setBooksList( booksList.map(book => {
      if (book.isbn === bookFav.isbn) { book.isFav = !book.isFav }
      return book;
    }));
  }

  function updateReadStatus(bookFav){
    setBooksList( booksList.map(book => {
      if (book.isbn === bookFav.isbn) { book.read = !book.read }
      return book;
    }));
  }
  // FIN

  // Les fonctions de filtrage des livres

  function updateKeyWords(e){
    // const keyWords = e.target.value;
    setKeywords(e.target.value);
    console.log('keywords', keywords);
    // filtering(keywords);
  }
 
  function searchKeywords(){
    console.log("Filtrage keywords / fav / red : ", keywords, favFilter, readFilter);

    var filteredArray = [];

    filteredArray = booksList.filter(book => book.title.toLowerCase().includes(keywords))
    console.log('filteredArray', filteredArray);  

    setFilteredList([...filteredArray]);  
  }

  function updateFavFilter()
  {
    // console.log('favFilter est à ', favFilter)
    setFavFilter(!favFilter);
    // console.log('favFilter est passé à ', favFilter)
    filterByFav();
    // filterFavRead();
  }

  function filterByFav(){
    var filteredArray = [];
    if (favFilter) { filteredArray = booksList.filter (book => book.isFav );}
    else filteredArray = [...booksList]
    setFilteredList([...filteredArray]);
  }

  function updateReadFilter()
  {
    // console.log('readFilter est à ', readFilter)
    setReadFilter(!readFilter);
    // console.log('readFilter est passé à ', readFilter)
    filterByRead();
    // filterFavRead();
  }

  function filterByRead(){
    var filteredArray = [];
    if (readFilter) { filteredArray= booksList.filter (book => book.read );}
    else filteredArray = [...booksList]
    setFilteredList([...filteredArray]);
  }

  function filterFavRead(){
    console.log("Filtrage keywords / fav / red : ", keywords, favFilter, readFilter);
    var filteredArray = [...booksList];
 
  }



  // A DISPARAITRE QUAND ON SUPPRIMERA LA TERNAIRE sur DisplayList dans le rendu en bas.
  function updateDisplayList(){
    setDisplayList(true);
  }

  function consoleLog(){
    console.log(booksList);
  }

  return (
      <div className="main-container">
        <h1>Welcome to BOOKS LIST</h1>
        {/* A DISPARAITRE */} <button onClick = { () => consoleLog()}>Console.log de booksList</button> 
        <SearchBar
          updateKeyWords={updateKeyWords}
          favFilter={favFilter}
          updateFavFilter={updateFavFilter}
          readFilter={readFilter}
          updateReadFilter={updateReadFilter}
          searchKeywords={searchKeywords}
        />
        {/* A DISPARAITRE : supprimer juste la ternaire et afficher le composant DisplayBooksList sans condition*/}
        { displayList ? 
          <DisplayBooksList
              booksList = {filteredList}
              updateFavoriteStatus = {updateFavoriteStatus}
              updateReadStatus = {updateReadStatus}
          /> 
          : <button onClick={ () => updateDisplayList() }>Afficher la liste de livre</button>
        }
        
      </div>
  );
}

export default App;
