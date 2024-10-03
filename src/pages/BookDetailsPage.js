import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { books } from '../data/books';
import './BookDetailsPage.css'; 

function BookDetailsPage() {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));
  const [myLibrary, setMyLibrary] = useState(() => {
    const savedLibrary = localStorage.getItem('myLibrary');
    return savedLibrary ? JSON.parse(savedLibrary) : [];
  });

  const handleAddToLibrary = () => {
    if (!myLibrary.some(b => b.id === book.id)) {
      const updatedLibrary = [...myLibrary, book];
      setMyLibrary(updatedLibrary);
      localStorage.setItem('myLibrary', JSON.stringify(updatedLibrary));
      alert(`${book.title} added to your library!`);
    } else {
      alert(`${book.title} is already in your library.`);
    }
  };

  return (
    <div className="book-details-container">
      {book ? (
        <>
          <h1 className="book-details-title">{book.title}</h1>
          <p className="book-details-info">
            <strong>Author:</strong> {book.author}
            <br />
            <strong>Genre:</strong> {book.genre}
          </p>
          <p className="book-details-description">{book.description}</p>
          <p className="book-details-meta">
            <strong>Rating:</strong> {book.rating} <br />
            <strong>Publication Year:</strong> {book.publication_year}
          </p>
          <button
            className="book-details-button"
            onClick={handleAddToLibrary}
          >
            Add to My Library
          </button>
        </>
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
}

export default BookDetailsPage;
