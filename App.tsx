
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Product, CartItem } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import CartSidebar from './components/CartSidebar';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const addToCart = (product: Product, size: number) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedSize === size);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.selectedSize === size 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, selectedSize: size, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, size: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id && item.selectedSize === size) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string, size: number) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.selectedSize === size)));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar 
          cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} 
          onOpenCart={() => setIsCartOpen(true)}
          onOpenAuth={() => setIsAuthOpen(true)}
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails onAddToCart={addToCart} />} />
          </Routes>
        </main>

        <Footer />

        <CartSidebar 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
        />

        {/* Simple Auth Modal Placeholder */}
        {isAuthOpen && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsAuthOpen(false)}></div>
            <div className="relative bg-neutral-900 w-full max-w-md p-10 border border-white/10 shadow-2xl animate-in zoom-in-95 duration-200">
              <button 
                onClick={() => setIsAuthOpen(false)} 
                className="absolute top-4 right-4 text-gray-500 hover:text-white"
              >
                <span className="sr-only">Close</span>
                &times;
              </button>
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-serif font-bold text-white">Join the Circle</h2>
                <p className="text-gray-400 text-sm">Experience the premium hospitality of SK Foot Steps.</p>
                <form className="space-y-4 text-left">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Email Address</label>
                    <input type="email" placeholder="email@example.com" className="w-full bg-neutral-800 border border-white/5 p-4 text-white focus:outline-none focus:border-[#FFD700]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Password</label>
                    <input type="password" placeholder="••••••••" className="w-full bg-neutral-800 border border-white/5 p-4 text-white focus:outline-none focus:border-[#FFD700]" />
                  </div>
                  <button className="w-full bg-[#FFD700] text-black font-black py-4 uppercase tracking-widest hover:bg-[#e6c200] transition-colors">
                    Login
                  </button>
                </form>
                <p className="text-xs text-gray-500">
                  Don't have an account? <button className="text-[#FFD700] font-bold">Register Now</button>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
