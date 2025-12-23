
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  sizes: number[];
  colors: string[];
  rating: number;
  reviews: Review[];
  isFeatured?: boolean;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem extends Product {
  selectedSize: number;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  isAdmin: boolean;
}
