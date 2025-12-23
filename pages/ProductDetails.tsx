
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import { Star, Truck, ShieldCheck, RefreshCw, ShoppingBag, Sparkles } from 'lucide-react';
import { getSmartProductDescription, getFashionAdvice } from '../services/gemini';

interface ProductDetailsProps {
  onAddToCart: (product: any, size: number) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ onAddToCart }) => {
  const { id } = useParams();
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [mainImage, setMainImage] = useState(product?.images[0]);
  const [aiDescription, setAiDescription] = useState<string>('');
  const [aiAdvice, setAiAdvice] = useState<string>('');
  const [loadingAI, setLoadingAI] = useState(false);

  useEffect(() => {
    if (product) {
      setLoadingAI(true);
      Promise.all([
        getSmartProductDescription(product.name, product.category),
        getFashionAdvice(product.name)
      ]).then(([desc, advice]) => {
        setAiDescription(desc);
        setAiAdvice(advice);
        setLoadingAI(false);
      });
    }
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) return <div className="pt-32 text-center text-white">Product not found.</div>;

  return (
    <div className="pt-32 pb-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-xs font-bold uppercase tracking-widest text-gray-500">
          <Link to="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-white">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-[#FFD700]">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-neutral-900 overflow-hidden group">
              <img 
                src={mainImage} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setMainImage(img)}
                  className={`aspect-square border-2 transition-all ${mainImage === img ? 'border-[#FFD700]' : 'border-transparent opacity-50 hover:opacity-100'}`}
                >
                  <img src={img} alt={`${product.name} thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-[#FFD700]">
                <div className="flex"><Star size={16} fill="#FFD700" /><Star size={16} fill="#FFD700" /><Star size={16} fill="#FFD700" /><Star size={16} fill="#FFD700" /><Star size={16} fill="#FFD700" /></div>
                <span className="text-sm font-bold">(24 Reviews)</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">{product.name}</h1>
              <p className="text-3xl font-serif text-[#FFD700] font-bold">${product.price}</p>
            </div>

            <p className="text-gray-400 leading-relaxed">{product.description}</p>

            {/* AI Highlight Section */}
            <div className="bg-neutral-900/80 border border-[#FFD700]/20 p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-10">
                <Sparkles size={40} className="text-[#FFD700]" />
              </div>
              <h4 className="flex items-center space-x-2 text-[#FFD700] font-bold uppercase text-[10px] tracking-widest mb-3">
                <Sparkles size={12} />
                <span>AI Stylist Insights</span>
              </h4>
              {loadingAI ? (
                <div className="space-y-2">
                  <div className="h-4 w-full shimmer rounded"></div>
                  <div className="h-4 w-3/4 shimmer rounded"></div>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm italic text-gray-300">"{aiDescription}"</p>
                  <div className="text-xs text-gray-500 whitespace-pre-line leading-relaxed">
                    {aiAdvice}
                  </div>
                </div>
              )}
            </div>

            {/* Size Selector */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-white font-bold text-sm uppercase tracking-widest">Select Size (EU)</h3>
                <button className="text-[10px] text-[#FFD700] uppercase font-black hover:underline">Size Chart</button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-12 w-12 flex items-center justify-center border transition-all font-bold ${
                      selectedSize === size 
                        ? 'border-[#FFD700] bg-[#FFD700] text-black' 
                        : 'border-white/10 text-white hover:border-white/40'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-y-4 flex-col pt-4">
              <button 
                onClick={() => selectedSize && onAddToCart(product, selectedSize)}
                disabled={!selectedSize}
                className={`w-full py-5 px-8 font-black uppercase tracking-widest flex items-center justify-center space-x-3 transition-all ${
                  selectedSize 
                    ? 'bg-[#FFD700] text-black hover:bg-[#e6c200] transform active:scale-95' 
                    : 'bg-neutral-800 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingBag size={20} />
                <span>Add To Cart</span>
              </button>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 border-t border-white/10">
              <div className="flex items-start space-x-3 group">
                <Truck className="text-[#FFD700] mt-1 group-hover:scale-110 transition-transform" size={20} />
                <div>
                  <h4 className="text-white font-bold text-sm">Express Shipping</h4>
                  <p className="text-xs text-gray-500">Delivered within 3-5 business days.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <ShieldCheck className="text-[#FFD700] mt-1 group-hover:scale-110 transition-transform" size={20} />
                <div>
                  <h4 className="text-white font-bold text-sm">1 Year Warranty</h4>
                  <p className="text-xs text-gray-500">Coverage for any manufacturing defects.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <RefreshCw className="text-[#FFD700] mt-1 group-hover:scale-110 transition-transform" size={20} />
                <div>
                  <h4 className="text-white font-bold text-sm">Hassle-Free Returns</h4>
                  <p className="text-xs text-gray-500">14-day easy return policy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
