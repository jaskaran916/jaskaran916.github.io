export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  coverImage: string;
  description: string;
  category: string;
  stock: number;
}

export interface CartItem extends Book {
  quantity: number;
}