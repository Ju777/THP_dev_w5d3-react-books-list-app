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
  const [ favFilter, setFavFilter ] = useState(null);
  const [ readFilter, setReadFilter ] = useState(null);

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
    setKeywords(e.target.value);
  }
 
  function searchKeywords(){
    var filteredArray = [];
    filteredArray = booksList.filter(book => book.title.toLowerCase().includes(keywords))
    setFilteredList([...filteredArray]);  
  }

  function updateFavFilter()
  {
    setFavFilter(!favFilter);
    filterByFav();
  }

  function filterByFav(){
    var filteredArray = [];
    // Obligé d'inverser comme c'est expliqué dans SearchBar.js
    favFilter ? filteredArray = [...booksList] : filteredArray = booksList.filter(book => book.isFav )
    setFilteredList([...filteredArray]);
  }

  function updateReadFilter()
  {
    setReadFilter(!readFilter);
    filterByRead();
  }

  function filterByRead(){
    var filteredArray = [];
    // Obligé d'inverser comme c'est expliqué dans SearchBar.js
    readFilter ? filteredArray = [...booksList] : filteredArray = booksList.filter(book => book.read )
    setFilteredList([...filteredArray]);
  }

  // A DISPARAITRE 
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
 
        <DisplayBooksList
            booksList = {filteredList}
            updateFavoriteStatus = {updateFavoriteStatus}
            updateReadStatus = {updateReadStatus}
        /> 
        
      </div>
  );
}

export default App;
