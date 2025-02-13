import React from 'react';
import BookCard from '../components/BookCard';
import { Book } from '../types/book';

// Mock data - replace with API call later
const mockBooks: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 9.99,
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400',
    description: 'A story of decadence and excess.',
    category: 'Fiction',
    stock: 10
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 12.99,
    coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400',
    description: 'A classic of modern American literature.',
    category: 'Fiction',
    stock: 8
  },
  {
    id: '3',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    price: 15.99,
    coverImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400',
    description: 'A brief history of humankind.',
    category: 'Non-Fiction',
    stock: 15
  }
];

export default function Home() {
  const handleAddToCart = (book: Book) => {
    // To be implemented with cart context/state management
    console.log('Added to cart:', book);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Featured Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockBooks.map((book) => (
          <BookCard key={book.id} book={book} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}