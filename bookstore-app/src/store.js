// store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './reducers/cartReducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  // Add other reducers as needed
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
