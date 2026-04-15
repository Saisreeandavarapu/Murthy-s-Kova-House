import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Flame, History, HeartHandshake, Smile, Star, Coffee, Users, Store } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const About: React.FC = () => {
  return (
    <div className="bg-cream min-h-screen overflow-hidden">
      {/* Hero Banner */}
      <div className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-center overflow-hidden"
        style={{ backgroundImage: "url('Kova images/image copy 6.png')" }}>
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-6 rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-500/30"
          >
            <img src="/logo_premium.png" alt="Murthy's Logo" className="w-full h-full object-cover" />
          </motion.div>
          <span className="text-gold-500 font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Est. 1986</span>
          <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-6 text-shadow-lg">Our Heritage</h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
            A Legacy of Purity
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 py-20 md:py-28">

        {/* Mission Statement */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
          className="max-w-4xl mx-auto text-center mb-28 relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
            <Star size={120} className="text-gold-500 fill-gold-500" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-brown-900 leading-relaxed font-medium relative z-10 italic">
            "To honour the time-honoured craft of kova-making and deliver sweets of uncompromising purity, bringing generations together through flavour, trust, and tradition."
          </h2>
          <div className="mt-8">
            <span className="font-semibold text-gold-500 tracking-wider uppercase text-sm">— Our Mission —</span>
          </div>
        </motion.div>

        {/* Brand Overview Grid */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="mb-28"
        >
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-brown-900 font-bold mb-4">Brand Overview</h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: History, label: 'Founded', value: '1986', desc: 'Nearly four decades of excellence' },
              { icon: Store, label: 'Category', value: 'Artisan Confectionery', desc: 'Handcrafted Indian sweets' },
              { icon: Coffee, label: 'Flagship Product', value: 'Traditional Kova', desc: 'Khoya-based signature sweets' },
              { icon: ShieldCheck, label: 'Brand Promise', value: 'A Legacy of Purity', desc: 'Unwavering quality in every bite' },
              { icon: Star, label: 'Personality', value: 'Heritage & Authentic', desc: 'Trustworthy, warm, and premium' },
              { icon: Users, label: 'Target Audience', value: 'Sweet Lovers', desc: 'Families & tradition-conscious gifters' },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn}
                className="bg-white p-8 rounded-2xl premium-shadow group hover:shadow-xl transition-all duration-300 relative overflow-hidden backdrop-blur-sm border border-brown-900/5"
              >
                <div className="absolute right-0 top-0 w-32 h-32 bg-gold-500/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110"></div>
                <div className="bg-cream w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-brown-900/5 group-hover:bg-gold-500 transition-colors duration-300">
                  <item.icon className="text-gold-500 w-7 h-7 group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-brown-900/50 uppercase tracking-widest text-xs font-bold mb-2">{item.label}</p>
                <h4 className="font-serif text-2xl font-bold text-brown-900 mb-2">{item.value}</h4>
                <p className="text-brown-900/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <div className="mb-28 relative">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent -z-10"></div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <h2 className="font-serif text-4xl text-brown-900 font-bold mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {[
              { icon: ShieldCheck, title: 'Purity', text: 'Only the finest, unadulterated ingredients ever touch our vessels.' },
              { icon: Flame, title: 'Craftsmanship', text: 'Every batch is prepared by skilled artisans using traditional copper uruli vessels.' },
              { icon: History, title: 'Heritage', text: 'Nearly four decades of knowledge passed down through dedicated craft.' },
              { icon: HeartHandshake, title: 'Trust', text: 'A name families rely upon for celebrations, gifting, and everyday indulgence.' },
              { icon: Smile, title: 'Warmth', text: 'We serve not just sweets, but moments of joy and belonging.' },
            ].map((value, idx) => (
              <motion.div key={idx} variants={fadeIn}
                className="bg-white rounded-2xl p-8 text-center premium-shadow group hover:-translate-y-2 transition-transform duration-300 border-t-4 border-transparent hover:border-gold-500"
              >
                <div className="mx-auto w-16 h-16 bg-cream rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-gold-500" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brown-900 mb-3">{value.title}</h3>
                <p className="text-sm text-brown-900/70 leading-relaxed">{value.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tradition Meets Luxury Section */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="flex flex-col lg:flex-row-reverse gap-16 items-center mb-28"
        >
          <motion.div variants={fadeIn} className="w-full lg:w-1/2">
            <h3 className="font-serif text-gold-500 uppercase tracking-widest text-sm font-bold mb-4">The Packaging</h3>
            <h2 className="font-serif text-4xl text-brown-900 font-bold mb-6">Tradition Meets Luxury</h2>
            <div className="w-20 h-1 bg-gold-500 mb-8 rounded-full"></div>
            <p className="text-brown-900/80 leading-relaxed mb-6 text-lg">
              We believe that the journey to sweetness begins the moment you hold our box. Our signature 'Legacy' packaging is designed to be as premium as the sweets inside.
            </p>
            <p className="text-brown-900/80 leading-relaxed text-lg">
              From the deep maroon finish to the gold embossed detailing and branded butter paper, every element is a testament to our commitment to excellence and heritage.
            </p>
          </motion.div>
          <motion.div variants={fadeIn} className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-brown-900/5 -translate-x-4 -translate-y-4 rounded-2xl"></div>
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/product_packaging.png"
                alt="Product Packaging"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Brand Story */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="flex flex-col lg:flex-row gap-16 items-center mb-28"
        >
          <motion.div variants={fadeIn} className="w-full lg:w-1/2">
            <h2 className="font-serif text-4xl text-brown-900 font-bold mb-6">A Legacy of Pure Taste</h2>
            <div className="w-20 h-1 bg-gold-500 mb-8 rounded-full"></div>
            <p className="text-brown-900/80 leading-relaxed mb-6 text-lg">
              Since 1986, Murthy's Kova House has been synonymous with purity, authenticity, and celebration. What started as a single artisan kitchen has grown into a recognised name synonymous with quality, trust, and cultural pride.
            </p>
            <p className="text-brown-900/80 leading-relaxed text-lg">
              Our secret isn't complicated: we use only farm-fresh milk, pure organic jaggery or sugar, and traditional firewood cooking methods. We believe that shortcuts compromise taste, which is why we still slow-cook our Kova just like our grandmother did.
            </p>
          </motion.div>
          <motion.div variants={fadeIn} className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-gold-500 translate-x-4 translate-y-4 rounded-2xl transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <div className="relative z-10 overflow-hidden rounded-2xl">
              <img
                src="/PHOTO-2026-04-13-08-59-59.jpg"
                alt="Making Kova"
                className="w-full h-[500px] object-cover premium-shadow transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Master Artisans */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
          <h2 className="font-serif text-4xl text-brown-900 font-bold mb-4">Master Artisans</h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {[
            { name: 'K. V. Murthy', role: 'Founder & Head Chef', img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60' },
            { name: 'Lakshmi Rao', role: 'Innovation Lead', img: '/image copy 13.png' },
            { name: 'Srinivas Reddy', role: 'Quality Master', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60' },
          ].map((member, idx) => (
            <motion.div
              variants={fadeIn}
              key={idx}
              className="bg-white rounded-2xl overflow-hidden premium-shadow group"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-8 text-center relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-1 bg-gold-500 rounded-full"></div>
                <h3 className="font-serif text-2xl font-bold text-brown-900 mb-2">{member.name}</h3>
                <p className="text-gold-500 font-medium tracking-wide uppercase text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;

