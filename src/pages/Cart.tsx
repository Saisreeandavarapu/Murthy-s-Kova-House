import React from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 premium-shadow text-brown-900/30">
          <Trash2 className="w-10 h-10" />
        </div>
        <h2 className="font-serif text-3xl mb-4 text-brown-900 font-bold">Your Cart is Empty</h2>
        <p className="text-brown-900/60 mb-8 max-w-md">Looks like you haven't added any of our delicious sweets to your cart yet.</p>
        <Link to="/shop" className="bg-gold-500 text-white px-8 py-4 uppercase tracking-widest font-semibold hover:bg-gold-600 transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen py-16">
      <div className="container mx-auto px-6">
        <h1 className="font-serif text-4xl text-brown-900 font-bold mb-10 text-center md:text-left">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="w-full lg:w-2/3 space-y-6">
            {items.map((item) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={item.id} 
                className="bg-white p-4 md:p-6 rounded-2xl premium-shadow flex flex-col sm:flex-row items-center gap-6"
              >
                <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-cream">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-grow text-center sm:text-left">
                  <Link to={`/product/${item.id}`} className="hover:text-gold-500 transition-colors">
                    <h3 className="font-serif text-xl font-bold text-brown-900 mb-1">{item.name}</h3>
                  </Link>
                  <p className="text-gold-500 font-semibold mb-4">₹{item.price}</p>
                </div>

                <div className="flex items-center space-x-6 sm:ml-auto">
                  <div className="flex items-center border border-brown-900/20 rounded">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 text-brown-900/60 hover:text-brown-900 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-semibold text-brown-900">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 text-brown-900/60 hover:text-brown-900 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="text-right min-w-[80px]">
                    <p className="font-bold text-brown-900">₹{item.price * item.quantity}</p>
                  </div>

                  <button 
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-red-400 hover:text-red-600 bg-red-50 hover:bg-red-100 rounded transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-8 rounded-2xl premium-shadow sticky top-32">
              <h3 className="font-serif text-2xl text-brown-900 font-bold mb-6 border-b border-brown-900/10 pb-4">Order Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-brown-900/70">
                  <span>Subtotal</span>
                  <span className="font-medium text-brown-900">₹{getTotal()}</span>
                </div>
                <div className="flex justify-between text-brown-900/70">
                  <span>Shipping</span>
                  <span className="font-medium text-brown-900">Calculated at checkout</span>
                </div>
                <div className="border-t border-brown-900/10 pt-4 flex justify-between items-center text-xl">
                  <span className="font-serif font-bold text-brown-900">Total</span>
                  <span className="font-bold text-gold-500">₹{getTotal()}</span>
                </div>
              </div>

              <Link 
                to="/checkout" 
                className="w-full bg-gold-500 text-white flex items-center justify-center py-4 uppercase tracking-widest font-semibold hover:bg-gold-600 transition-colors rounded"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <div className="text-center mt-6 text-sm text-brown-900/50">
                <p>Tax included. Secure payment processing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
