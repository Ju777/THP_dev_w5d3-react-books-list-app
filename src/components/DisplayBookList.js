import React, { useState, useEffect } from 'react'
import '../styles/DisplayBooksList.css'

function DisplayBooksList({booksList, updateFavoriteStatus, updateReadStatus}){

    return(
        <div className="bookList-container">
            {
              booksList.map(book => (
                <div className='book-card'>
                    <h2>{book.title}</h2>
                    <img src={book.thumbnailUrl} alt="book cover" /><br/>
                    {book.shortDescription}<br/>
                    {
                        book.isFav ? <button onClick = { () => updateFavoriteStatus(book)} className="btn btn-danger button">Remove from favorite</button> : <button onClick = { () => updateFavoriteStatus(book)} className="btn btn-warning button">Add to favorite</button>
                    }
                    {
                        book.read ? <button onClick = { () => updateReadStatus(book) } className="btn btn-danger button">Remove rom read list</button> : <button onClick = { () => updateReadStatus(book) } className="btn btn-warning button">Add to read list</button> 
                    }
                    
                </div>
              ))
            }

      </div>
    )
}

export default DisplayBooksList;