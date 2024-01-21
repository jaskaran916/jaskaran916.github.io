// cartActions.js

import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

// Redux Thunk action creator for adding an item to the cart
export const addToCart = (book) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: book,
  });
};

// Redux Thunk action creator for removing an item from the cart
export const removeFromCart = (bookId) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: bookId,
  });
};
