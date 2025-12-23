
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-white tracking-tighter">
              SK <span className="text-[#FFD700]">FOOT STEPS</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Step into tradition with modern comfort. We bring the legendary Peshawari heritage to your doorstep with premium craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-[#FFD700]" />
                <span>Peshawar, KP, Pakistan</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-[#FFD700]" />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-[#FFD700]" />
                <span>contact@skfootsteps.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Join Our Inner Circle</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for exclusive offers and heritage stories.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-neutral-900 border border-white/10 px-4 py-2 text-sm text-white focus:outline-none focus:border-[#FFD700] transition-colors"
              />
              <button className="bg-[#FFD700] text-black font-bold py-2 px-4 hover:bg-[#e6c200] transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>© 2025 SK Foot Steps. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Shipping & Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
