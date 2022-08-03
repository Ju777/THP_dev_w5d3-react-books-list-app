import React, { useState, useEffect } from 'react'

function SearchBar({updateKeyWords, favFilter, updateFavFilter, readFilter, updateReadFilter, searchKeywords}){
    return(
        <div className='search-bar-container'>
            <input
                type="search"
                placeholder='Looking for a book ?'
                onChange = { (e) => updateKeyWords(e)}    
            />

            <button onClick = { () => searchKeywords()}>Search</button><br/>

            {
                // Obligé d'inverser le texte sur le bouton et la condition testé à cause du fait qu'il
                // manque un dernier 'render' pour que ça colle ... j'espère que je me souviendrais de ça.
                favFilter ? <button onClick = { () => updateFavFilter() } >Remove Fav filter</button> :
                            <button onClick = { () => updateFavFilter() } >Apply Fav filter</button>
            }

            {
                readFilter ? <button onClick = { () => updateReadFilter() } >Remove Read filter</button> :
                             <button onClick = { () => updateReadFilter() } >Apply Read filter</button>
            }
        </div>
    )
}

export default SearchBar;