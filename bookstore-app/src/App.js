// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookListingPage from './components/BookListingPage';
import BookDetailsPage from './components/BookDetailsPage';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import OrderHistory from './components/OrderHistory';
import FeaturedBooks from './pages/FeaturedBooks';
import GenrePage from './pages/GenrePage';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>Online Bookstore</h1>
        </header>

        <nav className="navbar">
          <SearchBar />
          <Link to="/">Home</Link>
          <Link to="/featured">Featured Books</Link>
          <Link to="/genre">Genres</Link>
          <Link to="/cart">Shopping Cart</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/history">Order History</Link>
        </nav>

        <div className="container">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/featured" component={FeaturedBooks} />
            <Route path="/genre" component={GenrePage} />
            <Route path="/book/:id" component={BookDetailsPage} />
            <Route path="/cart" component={ShoppingCart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/history" component={OrderHistory} />
          </Switch>
        </div>

        <footer className="footer">
          <p>&copy; 2024 Online Bookstore</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
