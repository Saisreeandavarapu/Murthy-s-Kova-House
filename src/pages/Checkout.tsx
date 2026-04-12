import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

const Checkout: React.FC = () => {
  const { items, getTotal, clearCart } = useCartStore();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', address: '', city: '', state: '', zip: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    
    // Mock processing
    setTimeout(() => {
      setIsSuccess(true);
      clearCart();
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-6 text-center">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.5 }}
          className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 premium-shadow"
        >
          <CheckCircle className="w-12 h-12 text-gold-500" />
        </motion.div>
        <h2 className="font-serif text-4xl mb-4 text-brown-900 font-bold">Order Confirmed!</h2>
        <p className="text-brown-900/60 mb-8 max-w-md mx-auto leading-relaxed">
          Thank you for your purchase. Your premium sweets are being carefully prepared and packed for delivery.
        </p>
        <Link to="/" className="bg-brown-900 text-white px-8 py-3 uppercase tracking-widest font-semibold hover:bg-gold-500 transition-colors rounded">
          Return Home
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="bg-cream min-h-screen py-16">
      <div className="container mx-auto px-6">
        <h1 className="font-serif text-4xl text-brown-900 font-bold mb-10 text-center">Checkout</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-12">
          {/* Billing Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-8 rounded-2xl premium-shadow">
              <h3 className="font-serif text-2xl text-brown-900 font-bold mb-8 border-b border-brown-900/10 pb-4">Billing Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-brown-900 mb-2 uppercase tracking-wide">First Name *</label>
                  <input required name="firstName" onChange={handleChange} className="w-full bg-cream/30 border border-brown-900/20 py-3 px-4 rounded focus:outline-none focus:border-gold-500 transition-colors" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brown-900 mb-2 uppercase tracking-wide">Last Name *</label>
                  <input required name="lastName" onChange={handleChange} className="w-full bg-cream/30 border border-brown-900/20 py-3 px-4 rounded focus:outline-none focus:border-gold-500 transition-colors" type="text" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-brown-900 mb-2 uppercase tracking-wide">Email Address *</label>
                  <input required name="email" onChange={handleChange} className="w-full bg-cream/30 border border-brown-900/20 py-3 px-4 rounded focus:outline-none focus:border-gold-500 transition-colors" type="email" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brown-900 mb-2 uppercase tracking-wide">Phone *</label>
                  <input required name="phone" onChange={handleChange} className="w-full bg-cream/30 border border-brown-900/20 py-3 px-4 rounded focus:outline-none focus:border-gold-500 transition-colors" type="tel" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-brown-900 mb-2 uppercase tracking-wide">Street Address *</label>
                <input required name="address" onChange={handleChange} placeholder="House number and street name" className="w-full bg-cream/30 border border-brown-900/20 py-3 px-4 rounded focus:outline-none focus:border-gold-500 transition-colors" type="text" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-brown-900 mb-2 uppercase tracking-wide">Town / City *</label>
                  <input required name="city" onChange={handleChange} className="w-full bg-cream/30 border border-brown-900/20 py-3 px-4 rounded focus:outline-none focus:border-gold-500 transition-colors" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brown-900 mb-2 uppercase tracking-wide">State *</label>
                  <input required name="state" onChange={handleChange} className="w-full bg-cream/30 border border-brown-900/20 py-3 px-4 rounded focus:outline-none focus:border-gold-500 transition-colors" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brown-900 mb-2 uppercase tracking-wide">ZIP / PIN *</label>
                  <input required name="zip" onChange={handleChange} className="w-full bg-cream/30 border border-brown-900/20 py-3 px-4 rounded focus:outline-none focus:border-gold-500 transition-colors" type="text" />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-8 rounded-2xl premium-shadow sticky top-32">
              <h3 className="font-serif text-2xl text-brown-900 font-bold mb-6 border-b border-brown-900/10 pb-4">Your Order</h3>
              
              <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between text-sm items-center">
                    <span className="text-brown-900/70 truncate flex-1 pr-4">{item.name} <span className="font-bold">× {item.quantity}</span></span>
                    <span className="font-medium text-brown-900 shrink-0">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-b border-brown-900/10 py-4 mb-8 space-y-3">
                <div className="flex justify-between text-brown-900/70">
                  <span>Subtotal</span>
                  <span className="font-medium text-brown-900">₹{getTotal()}</span>
                </div>
                <div className="flex justify-between text-brown-900/70">
                  <span>Standard Shipping</span>
                  <span className="font-medium text-brown-900">₹50</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-xl mb-8">
                <span className="font-serif font-bold text-brown-900">Total</span>
                <span className="font-bold text-gold-500">₹{getTotal() + 50}</span>
              </div>

              <button 
                type="submit"
                className="w-full bg-gold-500 text-white py-4 uppercase tracking-widest font-semibold hover:bg-brown-900 transition-colors rounded"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
