import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Banner */}
      <div
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1600&auto=format&fit=crop&q=80)' }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4">
          <h1 className="font-serif text-5xl md:text-6xl text-white font-bold mb-4 text-shadow-sm">Our Heritage</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Decades of authentic sweet making, straight from our family to yours.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">

        {/* Brand Story */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="w-full lg:w-1/2">
            <h2 className="font-serif text-4xl text-brown-900 font-bold mb-6">A Legacy of Pure Taste</h2>
            <div className="w-20 h-1 bg-gold-500 mb-8"></div>
            <p className="text-brown-900/80 leading-relaxed mb-6 text-lg">
              Since 1985, Murthy's Kova House has been synonymous with purity, authenticity, and celebration. What started as a small family kitchen in the heart of Andhra Pradesh has grown into a renowned landmark for sweet lovers across the country.
            </p>
            <p className="text-brown-900/80 leading-relaxed text-lg">
              Our secret isn't complicated: we use only farm-fresh milk, pure organic jaggery or sugar, and traditional firewood cooking methods. We believe that shortcuts compromise taste, which is why we still slow-cook our Kova just like our grandmother did.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gold-500 translate-x-4 translate-y-4 rounded-2xl"></div>
            <img
              src="/image copy 12.png"
              alt="Making Kova"
              className="relative z-10 w-full rounded-2xl premium-shadow"
            />
          </div>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {[
            { label: 'Years of Heritage', value: '38+' },
            { label: 'Happy Customers', value: '1M+' },
            { label: 'Varieties of Sweets', value: '50+' },
            { label: 'Artisan Chefs', value: '25' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl text-center premium-shadow">
              <h4 className="font-serif text-4xl font-bold text-gold-500 mb-2">{stat.value}</h4>
              <p className="text-brown-900/70 uppercase tracking-widest text-xs font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-brown-900 font-bold mb-4">Master Artisans</h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { name: 'K. V. Murthy', role: 'Founder & Head Chef', img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60' },
            { name: 'Lakshmi Rao', role: 'Innovation Lead', img: 'https://images.unsplash.com/photo-1595273611465-398b620ee97d?w=500&auto=format&fit=crop&q=60' },
            { name: 'Srinivas Reddy', role: 'Quality Master', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60' },
          ].map((member, idx) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={idx}
              className="bg-white rounded-2xl overflow-hidden premium-shadow group"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-2xl font-bold text-brown-900 mb-1">{member.name}</h3>
                <p className="text-gold-500 font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
