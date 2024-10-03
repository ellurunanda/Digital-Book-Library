// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import BookList from '../components/BookList';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <header className="home-header text-center">
        <h1 className="display-4">Virtual Book Library</h1>
        <p className="lead">Explore and manage your favorite books</p>
        {/* Link to My Library Page */}
        <Link to="/my-library" className="btn btn-primary mt-4">
          Go to My Library
        </Link>
      </header>

      <section className="book-list-container container">
        <BookList />
      </section>
    </div>
  );
}

export default HomePage;
