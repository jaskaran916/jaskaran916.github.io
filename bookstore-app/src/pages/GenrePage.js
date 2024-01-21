import React, { useState, useEffect } from 'react';
import { getBooksByGenre } from '../services/bookService';

const GenrePage = ({ genre }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books by genre from the backend
    const fetchBooksByGenre = async () => {
      const data = await getBooksByGenre(genre);
      setBooks(data);
    };

    fetchBooksByGenre();
  }, [genre]);

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          {/* Display individual books based on the selected genre */}
          <p>{book.title}</p>
        </div>
      ))}
    </div>
  );
};

export default GenrePage;
