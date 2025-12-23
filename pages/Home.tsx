
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';

const Home: React.FC = () => {
  const featured = MOCK_PRODUCTS.filter(p => p.isFeatured);

  return (
    <div className="pt-20 bg-neutral-950">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Content */}
            <div className="space-y-8 z-10 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20">
                <Sparkles size={14} className="text-[#FFD700]" />
                <span className="text-[#FFD700] font-medium tracking-widest uppercase text-[10px]">
                  The Future of Tradition
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif font-bold text-white leading-[1.1]">
                Step Into <br /> 
                <span className="text-[#FFD700] italic">Tradition</span> <br /> 
                Redefined
              </h1>
              
              <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed mx-auto lg:mx-0">
                Experience the pinnacle of luxury. We merge centuries-old Peshawari craftsmanship with avant-garde modern design.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
                <Link 
                  to="/shop" 
                  className="w-full sm:w-auto bg-[#FFD700] text-black px-10 py-5 font-black uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-[#e6c200] transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,215,0,0.2)]"
                >
                  <span>Explore Shop</span>
                  <ArrowRight size={20} />
                </Link>
                <a 
                  href="#about"
                  className="w-full sm:w-auto text-white font-bold uppercase tracking-widest border-b-2 border-transparent hover:border-[#FFD700] transition-all pb-1"
                >
                  Our Philosophy
                </a>
              </div>

              <div className="pt-8 flex items-center justify-center lg:justify-start space-x-8">
                <div>
                  <p className="text-2xl font-serif font-bold text-white">5k+</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Happy Clients</p>
                </div>
                <div className="h-8 w-px bg-white/10"></div>
                <div>
                  <p className="text-2xl font-serif font-bold text-white">100%</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Pure Leather</p>
                </div>
              </div>
            </div>

            {/* Right Side: Striking Shoe Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gold/10 blur-[120px] rounded-full animate-pulse"></div>
              <div className="relative z-10 transform transition-transform duration-700 hover:scale-105 hover:-rotate-3">
                <img 
                  src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop" 
                  alt="Modern Luxury Footwear"
                  className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                />
                
                {/* Floating Tag */}
                <div className="absolute -bottom-4 -left-4 md:-left-12 bg-neutral-900 border border-white/10 p-4 md:p-6 backdrop-blur-md shadow-2xl animate-bounce">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                      <Star size={20} fill="black" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">New Evolution</p>
                      <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Collection 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4 text-center md:text-left">
            <div className="space-y-2">
              <span className="text-[#FFD700] text-xs font-black uppercase tracking-[0.3em]">Masterpieces</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Signature Designs</h2>
            </div>
            <Link to="/shop" className="group text-[#FFD700] font-bold flex items-center space-x-2 border border-gold/20 px-6 py-3 hover:bg-gold/5 transition-all">
              <span>View All Collections</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {featured.map((product) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                className="group relative bg-neutral-950 border border-white/5 p-4 transition-all hover:border-[#FFD700]/30 hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden bg-neutral-900 relative">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-bold tracking-widest uppercase text-xs border-b border-gold pb-1">Shop Now</span>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors">{product.name}</h3>
                    <div className="flex items-center text-[#FFD700]">
                      <Star size={12} fill="#FFD700" />
                      <span className="text-xs font-bold ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-serif text-[#FFD700] font-bold">${product.price}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{product.category}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-neutral-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 border-l-2 border-t-2 border-[#FFD700]/20 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1515347619252-60a4bd6958d5?q=80&w=1000&auto=format&fit=crop" 
                alt="Traditional Artisan at Work"
                className="relative z-10 w-full h-[500px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#FFD700] p-8 hidden lg:block shadow-2xl">
                <span className="block text-4xl font-serif font-black text-black">25+</span>
                <span className="text-xs font-bold text-black uppercase tracking-widest">Years of Craft</span>
              </div>
            </div>
            <div className="space-y-8">
              <span className="text-[#FFD700] font-black uppercase tracking-[0.4em] text-xs">Our Heritage</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">Legacy of the <br /> Golden Stitch</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                Founded in the heart of Peshawar, SK Foot Steps began as a small family atelier dedicated to preserving the ancient art of chapple making. Today, we blend that heritage with high-grade Italian leather and ergonomic designs.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-3">
                  <div className="w-10 h-px bg-gold"></div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs">Premium Leather</h4>
                  <p className="text-xs text-gray-500">Only the finest top-grain skins are selected for our products.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-px bg-gold"></div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs">Hand Crafted</h4>
                  <p className="text-xs text-gray-500">Every single stitch is placed with precision by master cobblers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[#FFD700] text-xs font-black uppercase tracking-[0.3em]">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Voices of Quality</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sikandar Shah", quote: "The most comfortable Peshawari I've ever worn. The leather quality is unmatched in the market.", img: "https://picsum.photos/200/200?random=1" },
              { name: "Zubair Khan", quote: "Wore these to my wedding and got endless compliments. They truly feel like a luxury product.", img: "https://picsum.photos/200/200?random=2" },
              { name: "Fawad Malik", quote: "The attention to detail in the packaging and the product is just incredible. Fast shipping too!", img: "https://picsum.photos/200/200?random=3" }
            ].map((t, idx) => (
              <div key={idx} className="bg-neutral-950 p-10 border border-white/5 relative group hover:border-gold/20 transition-all">
                <Quote className="absolute top-6 right-6 text-[#FFD700]/10 group-hover:text-[#FFD700]/30 transition-colors" size={40} />
                <div className="flex items-center space-x-4 mb-8">
                  <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full border-2 border-[#FFD700]" />
                  <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <div className="flex text-[#FFD700] gap-0.5"><Star size={10} fill="#FFD700" /><Star size={10} fill="#FFD700" /><Star size={10} fill="#FFD700" /><Star size={10} fill="#FFD700" /><Star size={10} fill="#FFD700" /></div>
                  </div>
                </div>
                <p className="text-gray-400 italic text-sm leading-relaxed">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
