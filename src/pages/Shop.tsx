import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, ChevronDown, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const categories = ['All', 'Traditional Sweets', 'Premium', 'Nutty Sweets', 'Hampers', 'Healthy Alternatives'];
const sortOptions = ['Sort by Price: Low to High', 'Sort by Price: High to Low'];

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products;
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    if (sortOption === 'Sort by Price: Low to High') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'Sort by Price: High to Low') {
      filtered.sort((a, b) => b.price - a.price);
    }
    return filtered;
  }, [selectedCategory, sortOption]);

  return (
    <div className="bg-cream min-h-screen py-16">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="bg-brown-900 text-white rounded-2xl p-12 text-center mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1600&auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
          <h1 className="font-serif text-5xl font-bold mb-4 relative z-10">Our Shop</h1>
          <p className="text-white/70 max-w-xl mx-auto relative z-10">Discover our rich, slow-cooked Kova variants, prepared daily for the freshest taste.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Mobile Filter Toggle */}
          <button 
            className="lg:hidden flex items-center justify-center space-x-2 bg-white text-brown-900 py-3 px-4 rounded-xl premium-shadow font-semibold uppercase tracking-wider text-sm"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Filter className="w-5 h-5" /> <span>Filters</span>
          </button>

          {/* Sidebar */}
          <motion.aside 
            className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block w-full lg:w-1/4 shrink-0 space-y-8`}
          >
            <div className="bg-white p-6 rounded-2xl premium-shadow">
              <h3 className="font-serif text-2xl text-brown-900 font-bold mb-6 border-b border-brown-900/10 pb-4">Categories</h3>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button 
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left transition-colors flex items-center space-x-2 group ${selectedCategory === cat ? 'text-gold-500 font-bold' : 'text-brown-900/70 hover:text-brown-900'}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full transition-all ${selectedCategory === cat ? 'bg-gold-500 scale-100' : 'bg-brown-900/30 scale-0 group-hover:scale-100'}`} />
                      <span>{cat}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl premium-shadow">
              <h3 className="font-serif text-2xl text-brown-900 font-bold mb-6 border-b border-brown-900/10 pb-4">Sort By</h3>
              <div className="relative">
                <select 
                  onChange={(e) => setSortOption(e.target.value)}
                  className="w-full appearance-none bg-cream/30 border border-brown-900/20 text-brown-900 py-3 px-4 rounded focus:outline-none focus:ring-1 focus:ring-gold-500 cursor-pointer text-sm"
                >
                  <option value="">Default Sorting</option>
                  {sortOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-900/50 pointer-events-none" />
              </div>
            </div>
          </motion.aside>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            <div className="mb-6 text-sm text-brown-900/60 font-medium">
              Showing {filteredProducts.length} results
            </div>
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl p-16 text-center text-brown-900/60 premium-shadow">
                No products found matching your criteria.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    key={product.id}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            )}
            
            {/* Simple Pagination Mock */}
            {filteredProducts.length > 0 && (
              <div className="flex justify-center mt-16 space-x-2">
                <button className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-gold-500 bg-gold-500 text-white font-bold">1</button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-brown-900/10 text-brown-900/60 hover:border-gold-500 transition-colors">2</button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center text-brown-900/60 hover:text-gold-500 transition-colors"><ChevronRight className="w-5 h-5" /></button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
