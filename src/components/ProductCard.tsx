import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/products';
import { useCartStore } from '../store/useCartStore';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1);
    // In a real app we could show a toast here.
  };

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-xl premium-shadow overflow-hidden flex flex-col h-full ring-1 ring-brown-900/5"
    >
      {/* Image Container with Hover Actions */}
      <div className="relative aspect-[4/3] overflow-hidden bg-cream/30">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
          <Link to={`/product/${product.id}`}>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-brown-900 p-3 rounded-full hover:bg-gold-500 hover:text-white transition-colors"
            >
              <Eye className="w-5 h-5" />
            </motion.div>
          </Link>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="bg-white text-brown-900 p-3 rounded-full hover:bg-gold-500 hover:text-white transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
          </motion.button>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brown-800 rounded">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow text-center items-center justify-between">
        <div>
          <Link to={`/product/${product.id}`} className="block">
            <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-gold-500 transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm text-brown-900/60 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>
        <div className="mt-4 pt-4 border-t border-brown-900/10 w-full flex justify-between items-center">
          <span className="font-bold text-lg text-brown-900">₹{product.price}</span>
          <button 
            onClick={handleAddToCart}
            className="text-xs uppercase tracking-widest font-semibold text-gold-500 hover:text-brown-900 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
