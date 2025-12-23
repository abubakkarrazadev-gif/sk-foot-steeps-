
import React, { useState } from 'react';
import { Filter, SlidersHorizontal, Search, Star, ShoppingBag } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const categories = ['All', 'Traditional', 'Modern', 'Casual'];

  const filteredProducts = MOCK_PRODUCTS
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

  return (
    <div className="pt-32 pb-24 bg-neutral-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-serif font-bold text-white">Our Collection</h1>
            <p className="text-gray-400">Showing {filteredProducts.length} unique designs</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
              <input 
                type="text" 
                placeholder="Search designs..." 
                className="w-full bg-neutral-900 border border-white/10 rounded-none py-2 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-[#FFD700] transition-colors"
              />
            </div>
            
            <div className="flex items-center space-x-2 bg-neutral-900 border border-white/10 p-1">
              <Filter size={14} className="ml-2 text-[#FFD700]" />
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-white text-xs font-bold uppercase p-2 focus:outline-none appearance-none cursor-pointer pr-8"
              >
                <option value="newest" className="bg-neutral-900">Newest First</option>
                <option value="price-low" className="bg-neutral-900">Price: Low to High</option>
                <option value="price-high" className="bg-neutral-900">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar Filters */}
          <div className="hidden lg:block w-64 space-y-10">
            <div>
              <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-l-2 border-[#FFD700] pl-3">Categories</h3>
              <div className="space-y-4">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`block w-full text-left text-sm transition-colors ${
                      activeCategory === cat ? 'text-[#FFD700] font-bold' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-l-2 border-[#FFD700] pl-3">Price Range</h3>
              <div className="space-y-4">
                <input type="range" className="w-full accent-[#FFD700]" min="0" max="200" />
                <div className="flex justify-between text-xs text-gray-500 font-mono">
                  <span>$0</span>
                  <span>$200</span>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 p-6 border border-white/5">
              <h4 className="text-[#FFD700] font-bold text-sm mb-2">Free Delivery</h4>
              <p className="text-xs text-gray-500">On all orders above $150. Limited time offer.</p>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group flex flex-col h-full bg-neutral-900/30 hover:bg-neutral-900 transition-all duration-300">
                <Link to={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-black font-bold py-3 px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      View Details
                    </button>
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-[#FFD700] text-[10px] font-bold uppercase tracking-widest">{product.category}</p>
                    <div className="flex items-center text-[#FFD700]">
                      <Star size={10} fill="#FFD700" />
                      <span className="text-[10px] ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-xl font-serif text-[#FFD700] font-bold">${product.price}</span>
                    <button className="p-2 text-white/50 hover:text-[#FFD700] transition-colors">
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
