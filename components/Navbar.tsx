
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Menu, X, Search } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenAuth: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOpenAuth }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter text-white font-serif">
              SK <span className="text-[#FFD700]">FOOT STEPS</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-[#FFD700] ${
                  location.pathname === link.path ? 'text-[#FFD700]' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-5">
            <button className="text-gray-300 hover:text-white transition-colors">
              <Search size={20} />
            </button>
            <button 
              onClick={onOpenAuth}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <User size={20} />
            </button>
            <button 
              onClick={onOpenCart}
              className="relative text-gray-300 hover:text-white transition-colors"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FFD700] text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="md:hidden text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-900 border-b border-white/10 animate-in fade-in slide-in-from-top-4">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium text-gray-300 hover:text-[#FFD700]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
