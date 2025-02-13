import React from 'react';
import { Book } from '../types/book';
import { ShoppingCart } from 'lucide-react';

interface BookCardProps {
  book: Book;
  onAddToCart: (book: Book) => void;
}

export default function BookCard({ book, onAddToCart }: BookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={book.coverImage}
        alt={book.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{book.title}</h3>
        <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-indigo-600">
            ${book.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(book)}
            className="flex items-center px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}