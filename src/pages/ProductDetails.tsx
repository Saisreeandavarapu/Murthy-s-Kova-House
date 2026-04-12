import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Minus, Plus, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { products } from '../data/products';
import { useCartStore } from '../store/useCartStore';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const addItem = useCartStore((state) => state.addItem);
  
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-6 text-center">
        <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-gold-500 flex items-center space-x-2 font-medium">
          <ChevronLeft className="w-5 h-5" /> <span>Return to Shop</span>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-cream min-h-screen py-16">
      <div className="container mx-auto px-6">
        
        {/* Breadcrumbs */}
        <nav className="mb-10 flex space-x-2 text-sm text-brown-900/60 uppercase tracking-widest font-medium">
          <Link to="/" className="hover:text-gold-500">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold-500">Shop</Link>
          <span>/</span>
          <span className="text-brown-900">{product.name}</span>
        </nav>

        {/* Product Details Section */}
        <div className="bg-white rounded-3xl premium-shadow overflow-hidden flex flex-col md:flex-row mb-24">
          {/* Image */}
          <div className="w-full md:w-1/2 p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-cream"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Info */}
          <div className="w-full md:w-1/2 p-8 md:py-16 md:pr-16 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="inline-block px-3 py-1 bg-gold-500/10 text-gold-500 font-bold uppercase tracking-widest text-xs rounded mb-4">
                {product.category}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-brown-900 mb-6">{product.name}</h1>
              <p className="text-3xl text-brown-900 font-medium mb-8">₹{product.price}</p>
              
              <div className="w-20 h-1 bg-gold-500 mb-8"></div>
              
              <p className="text-brown-900/70 leading-relaxed mb-10 text-lg">
                {product.description}
              </p>

              {/* Add to Cart Area */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center border-2 border-brown-900/10 rounded overflow-hidden">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-4 text-brown-900/60 hover:text-brown-900 hover:bg-brown-900/5 transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="w-12 text-center font-bold text-lg text-brown-900">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-4 text-brown-900/60 hover:text-brown-900 hover:bg-brown-900/5 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className={`flex-1 text-white uppercase tracking-widest font-semibold px-8 py-4 rounded transition-colors flex items-center justify-center space-x-3 ${
                    added ? 'bg-green-600' : 'bg-gold-500 hover:bg-gold-600'
                  }`}
                >
                  {added ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" /> <span>Added</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" /> <span>Add to Cart</span>
                    </>
                  )}
                </motion.button>
              </div>

              {/* Guarantees */}
              <div className="mt-12 grid grid-cols-2 gap-4 pt-8 border-t border-brown-900/10">
                <div className="flex items-center space-x-3 text-sm text-brown-900/70">
                   <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                   <span>100% Pure Ingredients</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-brown-900/70">
                   <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                   <span>Made Fresh Daily</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-brown-900/70">
                   <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                   <span>Secure Checkout</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h3 className="font-serif text-3xl font-bold text-brown-900 mb-10 text-center">You May Also Like</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map(p => (
                <div key={p.id} className="bg-white rounded-xl overflow-hidden p-4 premium-shadow flex items-center space-x-4">
                  <div className="w-24 h-24 shrink-0 rounded overflow-hidden">
                    <img src={p.image} className="w-full h-full object-cover" alt={p.name} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-brown-900 mb-1"><Link to={`/product/${p.id}`} className="hover:text-gold-500 transition-colors">{p.name}</Link></h4>
                    <p className="text-gold-500 font-medium">₹{p.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
