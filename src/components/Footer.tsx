import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brown-900 text-cream pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-brown-800 pb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-1">
            <h2 className="font-serif text-3xl font-bold text-gold-500 mb-4 tracking-tight">Murthy's Kova</h2>
            <p className="text-cream/70 text-sm leading-relaxed mb-6">
              A legacy of authentic taste. Crafting traditional Indian sweets with premium ingredients and unmatched love since 1985.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brown-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors text-xs font-bold text-cream">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brown-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors text-xs font-bold text-cream">
                TW
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brown-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors text-xs font-bold text-cream">
                IG
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Shop', 'About Us', 'Contact', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-cream/70 hover:text-gold-500 transition-colors text-sm uppercase tracking-wider">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">Locate Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-cream/70">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">Shop 42, Heritage Street, <br />Andhra Pradesh, India</span>
              </li>
              <li className="flex items-center space-x-3 text-cream/70">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3 text-cream/70">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="text-sm">hello@murthyskova.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">Newsletter</h3>
            <p className="text-cream/70 text-sm mb-4">Subscribe to receive exclusive offers and updates on new sweets!</p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-brown-800 border-none text-cream px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-500 rounded placeholder:text-cream/30 text-sm"
              />
              <button className="bg-gold-500 text-white font-medium uppercase tracking-widest text-xs px-4 py-3 rounded hover:bg-gold-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-cream/50 text-xs text-center md:text-left tracking-wide">
          <p>&copy; {new Date().getFullYear()} Murthy's Kova House. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
