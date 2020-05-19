import React from 'react'
import BookList from './BookList'

function Bookshelf({ title, books }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
      <BookList books={books}></BookList>
      </div>
    </div>
  )
}

export default Bookshelf
