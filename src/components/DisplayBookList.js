import React, { useState, useEffect } from 'react'
import '../styles/DisplayBooksList.css'

function DisplayBooksList({booksList, updateFavoriteStatus, updateReadStatus}){

    return(
        <div className="bookList-container">
            {
              booksList.map(book => (
                <div className='book-card'>
                    {book.title}<br/>
                    <img src={book.thumbnailUrl} alt="book cover" /><br/>
                    {book.shortDescription}<br/>
                    {
                        book.isFav ? <button onClick = { () => updateFavoriteStatus(book)}>Remove from favorite</button> : <button onClick = { () => updateFavoriteStatus(book)}>Add to favorite</button>
                    }
                    {
                        book.read ? <button onClick = { () => updateReadStatus(book) }>Remove rom read list</button> : <button onClick = { () => updateReadStatus(book) }>Add to read list</button> 
                    }
                    
                </div>
              ))
            }

      </div>
    )
}

export default DisplayBooksList;