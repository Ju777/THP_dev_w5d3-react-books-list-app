import React from 'react'
import '../styles/SearchBar.css'

function SearchBar({updateKeyWords, favFilter, updateFavFilter, readFilter, updateReadFilter, searchKeywords}){
    return(
        <div className='search-bar-container'>
            <input
                type="search"
                placeholder='Looking for a book ?'
                onChange = { (e) => updateKeyWords(e)}    
                className = "control-form"
            />

            <button onClick = { () => searchKeywords()} className="btn btn-primary button">Search</button><br/>

            {
                // Obligé d'inverser le texte sur le bouton et la condition testé à cause du fait qu'il
                // manque un dernier 'render' pour que ça colle ... j'espère que je me souviendrais de ça.
                favFilter ? <button onClick = { () => updateFavFilter() } className="btn btn-danger button">Remove Fav filter</button> :
                            <button onClick = { () => updateFavFilter() } className="btn btn-success button">Apply Fav filter</button>
            }

            {
                readFilter ? <button onClick = { () => updateReadFilter() } className="btn btn-danger button">Remove Read filter</button> :
                             <button onClick = { () => updateReadFilter() } className="btn btn-success button">Apply Read filter</button>
            }
        </div>
    )
}

export default SearchBar;