// bookService.js

// Assuming a simple Express endpoint for fetching featured books
export const getFeaturedBooks = async () => {
    const response = await fetch('/api/books/featured');
    const data = await response.json();
    return data;
  };
  
  // Assuming an endpoint for fetching books by genre
  export const getBooksByGenre = async (genre) => {
    const response = await fetch(`/api/books/genre/${genre}`);
    const data = await response.json();
    return data;
  };
  
  // Assuming an endpoint for fetching book details by ID
  export const getBookById = async (id) => {
    const response = await fetch(`/api/books/${id}`);
    const data = await response.json();
    return data;
  };
  