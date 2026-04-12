import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1600&auto=format&fit=crop&q=80',
    title: 'Authentic Sweetness',
    subtitle: 'Crafted with passion, baked to perfection.',
  },
  {
    image: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=1600&auto=format&fit=crop&q=80',
    title: 'Premium Kova',
    subtitle: 'Experience the richness of pure milk and tradition.',
  },
  {
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=1600&auto=format&fit=crop&q=80',
    title: 'Festive Sensations',
    subtitle: 'Celebrate your moments with the sweetest hampers.',
  }
];

const testimonials = [
  { name: 'Aarav Mehta', text: 'The most authentic Kova I have ever tasted. Reminds me of my childhood celebrations!', rating: 5 },
  { name: 'Priya Sharma', text: 'Beautiful packaging and exquisite taste. The almond saffron Kova is out of this world.', rating: 5 },
  { name: 'Siddharth Rao', text: 'Impeccable quality. Murthy\'s Kova never disappoints whenever we have guests over.', rating: 4 },
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-serif text-5xl md:text-7xl font-bold text-white mb-4 text-shadow-sm"
              >
                {slides[currentSlide].title}
              </motion.h2>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg md:text-2xl text-cream mb-8 font-light tracking-wide text-shadow-sm"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Link to="/shop" className="bg-gold-500 text-white px-8 py-4 uppercase tracking-widest font-semibold hover:bg-white hover:text-brown-900 transition-colors duration-300">
                  Shop Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Hero Controls */}
        <div className="absolute z-30 bottom-10 left-0 right-0 flex justify-center space-x-12 items-center">
          <button onClick={prevSlide} className="text-white hover:text-gold-500 transition-colors">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <div className="flex space-x-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full ${idx === currentSlide ? 'bg-gold-500 w-8 h-2' : 'bg-white/50 w-2 h-2 hover:bg-white'
                  }`}
              />
            ))}
          </div>
          <button onClick={nextSlide} className="text-white hover:text-gold-500 transition-colors">
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="font-serif text-4xl text-brown-900 mb-4 font-bold">Discover Our Range</h3>
          <div className="h-1 w-20 bg-gold-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Traditional Sweets', img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=60' },
            { title: 'Premium Selection', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=60' },
            { title: 'Gift Hampers', img: 'public/image copy 13.png' },
          ].map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="text-center">
                  <h4 className="text-2xl font-serif text-white font-bold mb-4">{cat.title}</h4>
                  <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 inline-flex items-center">
                    Explore <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Parallax Banner */}
      <section
        className="relative py-32 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1616843469046-2485ed9e9619?w=1600&auto=format&fit=crop&q=80)' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Celebrate With The Best</h2>
          <p className="max-w-2xl mx-auto text-lg mb-10 text-cream/90 font-light leading-relaxed">
            Every piece is crafted with love and aged to perfection, promising a burst of flavors that take you back to your roots. Enjoy an exclusive 15% off on all Premium Hampers today.
          </p>
          <Link to="/shop" className="border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white px-8 py-4 uppercase tracking-widest font-semibold transition-all duration-300">
            View Collection
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 container mx-auto px-6 bg-cream">
        <div className="text-center mb-16">
          <h3 className="font-serif text-4xl text-brown-900 mb-4 font-bold">Signature Delights</h3>
          <p className="text-brown-900/60 font-light uppercase tracking-widest text-sm mb-4">Our most loved sweets</p>
          <div className="h-1 w-20 bg-gold-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.filter(p => p.featured).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/shop" className="text-brown-900 font-semibold border-b-2 border-gold-500 pb-1 hover:text-gold-500 transition-colors inline-flex items-center uppercase tracking-widest text-sm">
            See All Products <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl text-brown-900 mb-4 font-bold">What They Say</h3>
            <div className="h-1 w-20 bg-gold-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 border border-brown-900/5 bg-cream/30 rounded-xl relative text-center"
              >
                <div className="flex justify-center mb-4 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < t.rating ? 'text-gold-500 fill-gold-500' : 'text-gray-300'}`} />
                  ))}
                </div>
                <p className="italic text-brown-900/80 mb-6 leading-relaxed">"{t.text}"</p>
                <h5 className="font-serif font-bold text-lg text-brown-900">{t.name}</h5>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
