// cartService.js

// Assuming a simple Redux action for adding an item to the cart
export const addToCart = (book) => ({
    type: 'ADD_TO_CART',
    payload: book,
  });
  
  // Assuming a simple Redux action for removing an item from the cart
  export const removeFromCart = (bookId) => ({
    type: 'REMOVE_FROM_CART',
    payload: bookId,
  });
  