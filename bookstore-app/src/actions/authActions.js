// authActions.js

import { LOGIN_SUCCESS, LOGOUT } from './actionTypes';
import { authenticateUser, registerUser } from '../services/authService'; // Assuming you have authentication service functions

// Redux Thunk action creator for user login
export const login = (credentials) => async (dispatch) => {
  try {
    const userData = await authenticateUser(credentials);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: userData,
    });
  } catch (error) {
    console.error('Login failed', error);
    // Handle login failure, e.g., dispatch an error action
  }
};

// Redux Thunk action creator for user registration
export const register = (userData) => async (dispatch) => {
  try {
    const registeredUser = await registerUser(userData);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: registeredUser,
    });
  } catch (error) {
    console.error('Registration failed', error);
    // Handle registration failure, e.g., dispatch an error action
  }
};

// Redux Thunk action creator for user logout
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
