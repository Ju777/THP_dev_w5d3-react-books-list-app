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
                favFilter ? <button onClick = { () => updateFavFilter() } >Apply Fav filter</button> :
                            <button onClick = { () => updateFavFilter() } >Remove Fav filter</button>
            }

            {
                readFilter ? <button onClick = { () => updateReadFilter() } >Apply Read filter</button> :
                             <button onClick = { () => updateReadFilter() } >Remove Read filter</button>
            }
        </div>
    )
}

export default SearchBar;