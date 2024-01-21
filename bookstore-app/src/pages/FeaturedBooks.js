import React, { useState, useEffect } from 'react';
import { getFeaturedBooks } from '../services/bookService';

const FeaturedBooks = () => {
  const [featuredBooks, setFeaturedBooks] = useState([]);

  useEffect(() => {
    // Fetch featured books from the backend
    const fetchFeaturedBooks = async () => {
      const data = await getFeaturedBooks();
      setFeaturedBooks(data);
    };

    fetchFeaturedBooks();
  }, []);

  return (
    <div>
      {featuredBooks.map((book) => (
        <div key={book.id}>
          {/* Display individual featured books */}
          <p>{book.title}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedBooks;
