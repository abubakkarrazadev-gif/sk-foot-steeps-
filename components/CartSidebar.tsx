
import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, size: number, delta: number) => void;
  onRemove: (id: string, size: number) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 150 ? 0 : 15;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-neutral-950 shadow-2xl flex flex-col transform transition-transform animate-in slide-in-from-right duration-500">
          {/* Header */}
          <div className="px-6 py-8 border-b border-white/10 flex justify-between items-center">
            <h2 className="text-xl font-serif font-bold text-white flex items-center space-x-3">
              <ShoppingBag className="text-[#FFD700]" />
              <span>Your Cart ({items.length})</span>
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-grow overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <ShoppingBag size={48} className="text-white/10" />
                <p className="text-gray-500">Your shopping bag is currently empty.</p>
                <button onClick={onClose} className="text-[#FFD700] font-bold underline">Start Shopping</button>
              </div>
            ) : (
              items.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex space-x-4 animate-in fade-in slide-in-from-bottom-2">
                  <div className="w-24 h-24 bg-neutral-900 overflow-hidden flex-shrink-0">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-white font-bold text-sm">{item.name}</h4>
                      <span className="text-[#FFD700] font-serif font-bold">${item.price * item.quantity}</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">Size: {item.selectedSize}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <div className="flex items-center border border-white/10">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.selectedSize, -1)}
                          className="p-1 hover:text-[#FFD700]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-white">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.selectedSize, 1)}
                          className="p-1 hover:text-[#FFD700]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => onRemove(item.id, item.selectedSize)}
                        className="text-gray-600 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 bg-neutral-900 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-white font-bold">${subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Shipping</span>
                  <span className="text-white font-bold">{shipping === 0 ? 'FREE' : `$${shipping}`}</span>
                </div>
                <div className="pt-2 border-t border-white/5 flex justify-between text-lg">
                  <span className="text-white font-serif font-bold">Total</span>
                  <span className="text-[#FFD700] font-serif font-bold">${subtotal + shipping}</span>
                </div>
              </div>
              <button className="w-full bg-[#FFD700] text-black font-black py-4 flex items-center justify-center space-x-3 hover:bg-[#e6c200] transform active:scale-95 transition-all">
                <span>Checkout Now</span>
                <ArrowRight size={20} />
              </button>
              <p className="text-[10px] text-gray-500 text-center uppercase tracking-widest font-bold">
                Secured Payment Powered by Stripe
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
