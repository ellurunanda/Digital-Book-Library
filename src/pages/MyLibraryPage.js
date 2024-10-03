import React, { useState, useEffect } from 'react';
import './MyLibraryPage.css'; 
function MyLibraryPage() {
  const [myLibrary, setMyLibrary] = useState([]);

  useEffect(() => {
    const savedLibrary = localStorage.getItem('myLibrary');
    if (savedLibrary) {
      setMyLibrary(JSON.parse(savedLibrary));
    }
  }, []); 

  const handleRemove = (bookId) => {
    const updatedLibrary = myLibrary.filter(book => book.id !== bookId);
    setMyLibrary(updatedLibrary);
    localStorage.setItem('myLibrary', JSON.stringify(updatedLibrary));
  };

  return (
    <div className="my-library-container">
      <h1 className="my-library-title">My Library</h1>
      {myLibrary.length > 0 ? (
        <ul className="library-list">
          {myLibrary.map((book, index) => (
            <li key={index} className="library-list-item">
              <span className="library-book-title">{book.title}</span>
              <button
                className="library-remove-button"
                onClick={() => handleRemove(book.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="library-empty-message">Your library is currently empty.</p>
      )}
    </div>
  );
}

export default MyLibraryPage;
