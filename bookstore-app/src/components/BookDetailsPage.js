import React, { useState, useEffect } from 'react';
import { getBookById } from '../services/bookService';

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Fetch book details by ID from the backend
    const fetchBookDetails = async () => {
      const data = await getBookById(id);
      setBook(data);
    };

    fetchBookDetails();
  }, [id]);

  return (
    <div>
      {book && (
        <div>
          {/* Display book details based on the selected ID */}
          <h2>{book.title}</h2>
          <p>{book.description}</p>
          <p>Author: {book.author}</p>
          <p>Price: ${book.price}</p>
        </div>
      )}
    </div>
  );
};

export default BookDetailsPage;
