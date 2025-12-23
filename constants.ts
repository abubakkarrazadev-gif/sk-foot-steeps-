
import { Product } from './types';

export const COLORS = {
  GOLD: '#FFD700',
  DARK: '#0A0A0A',
  NEUTRAL: '#1A1A1A',
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Royal Mahogany Peshawari',
    price: 120,
    description: 'Hand-stitched with premium mahogany leather, featuring the traditional dual-shade finish and ultra-comfortable sole.',
    category: 'Traditional',
    images: [
      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: [7, 8, 9, 10, 11],
    colors: ['Mahogany', 'Black'],
    rating: 4.8,
    isFeatured: true,
    reviews: [
      { id: 'r1', user: 'Ahmed K.', rating: 5, comment: 'Exquisite quality. The leather feels soft yet durable.', date: '2025-01-10' }
    ]
  },
  {
    id: '2',
    name: 'Midnight Onyx Slim Fit',
    price: 95,
    description: 'A modern take on the classic design. Sleek black leather with subtle gold stitching for a luxurious touch.',
    category: 'Modern',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: [8, 9, 10],
    colors: ['Black'],
    rating: 4.5,
    isFeatured: true,
    reviews: []
  },
  {
    id: '3',
    name: 'Desert Sand Suede',
    price: 110,
    description: 'Soft suede texture in a warm sand tone. Perfect for casual gatherings and festive occasions.',
    category: 'Casual',
    images: [
      'https://images.unsplash.com/photo-1605733513597-a8f8d410fe3c?q=80&w=1000&auto=format&fit=crop',
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ['Beige', 'Tan'],
    rating: 4.9,
    isFeatured: false,
    reviews: []
  },
  {
    id: '4',
    name: 'Vintage Tan Heritage',
    price: 135,
    description: 'The pinnacle of craftsmanship. Double-sole design using centuries-old tanning techniques.',
    category: 'Traditional',
    images: [
      'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=1000&auto=format&fit=crop',
    ],
    sizes: [9, 10, 11],
    colors: ['Tan'],
    rating: 5.0,
    isFeatured: true,
    reviews: []
  },
  {
    id: '5',
    name: 'Emerald Forest Edition',
    price: 150,
    description: 'Rare green leather accents with gold-plated buckles. A statement piece for the discerning gentleman.',
    category: 'Modern',
    images: [
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop',
    ],
    sizes: [8, 9, 10],
    colors: ['Green'],
    rating: 4.7,
    isFeatured: false,
    reviews: []
  }
];
