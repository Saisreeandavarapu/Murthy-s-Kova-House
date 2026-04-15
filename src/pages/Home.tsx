import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowRight, Star, Sparkles, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

// All slides use local kova sweet photos from the /public folder
const slides = [
  {
    image: '/Kova images/image.png',
    tag: 'Pure & Handcrafted',
    title: 'Classic',
    titleHighlight: 'Pure Kova',
    subtitle: 'Slow-cooked over firewood. Creamy, rich, and authentic since 1986.',
    badge: 'Signature Product',
  },
  {
    image: '/Kova images/image copy.png',
    tag: 'Heritage Recipe',
    title: 'Premium',
    titleHighlight: 'Kaju Blend',
    subtitle: 'A luxurious fusion of cashew katli layered over our signature fresh Kova.',
    badge: 'Bestseller',
  },
  {
    image: '/Kova images/image copy 2.png',
    tag: 'Exotic Collection',
    title: 'Almond &',
    titleHighlight: 'Saffron Kova',
    subtitle: 'Infused with real Kashmiri saffron and slow-roasted almonds. Pure indulgence.',
    badge: 'Premium',
  },
  {
    image: '/Kova images/image copy 3.png',
    tag: 'Traditional Taste',
    title: 'Cardamom',
    titleHighlight: 'Kova Bites',
    subtitle: 'Bite-sized bliss. Rich cardamom essence crafted into every morsel.',
    badge: 'Fan Favourite',
  },
  {
    image: '/Kova images/image copy 4.png',
    tag: 'Festive Gifting',
    title: 'Festive',
    titleHighlight: 'Kova Hamper',
    subtitle: 'A curated assortment of our finest Kova varieties. Perfect for every celebration.',
    badge: 'Gift Special',
  },
  {
    image: '/Kova images/image copy 5.png',
    tag: 'Rose Collection',
    title: 'Rose',
    titleHighlight: 'Pistachio Kova',
    subtitle: 'Delicate rose petal essence folded into creamy Kova. A timeless delight.',
    badge: 'Limited Edition',
  },
];

const testimonials = [
  { name: 'Aarav Mehta', text: 'The most authentic Kova I have ever tasted. Reminds me of my childhood celebrations!', rating: 5 },
  { name: 'Priya Sharma', text: 'Beautiful packaging and exquisite taste. The almond saffron Kova is out of this world.', rating: 5 },
  { name: 'Siddharth Rao', text: "Impeccable quality. Murthy's Kova never disappoints whenever we have guests over.", rating: 4 },
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const heroParallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setDirection('next');
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setDirection('next');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };
  const prevSlide = () => {
    setDirection('prev');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const imageVariants = {
    enter: (dir: string) => ({ opacity: 0, scale: 1.08, x: dir === 'next' ? 60 : -60 }),
    center: { opacity: 1, scale: 1, x: 0, transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: (dir: string) => ({ opacity: 0, scale: 0.96, x: dir === 'next' ? -60 : 60, transition: { duration: 0.8 } }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay: number) => ({
      opacity: 1, y: 0,
      transition: { delay, duration: 0.7, ease: 'easeOut' }
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  return (
    <div className="bg-cream min-h-screen">
      {/* ─── Hero Section ─── */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden">

        {/* Slide Images */}
        <AnimatePresence mode="sync" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <motion.img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              style={{ y: heroParallaxY }}
              className="w-full h-[110%] -top-[5%] absolute object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Layered Gradient Overlays – brand palette: maroon + black */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3b0e0e]/90 via-[#3b0e0e]/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0505]/80 via-transparent to-[#1a0505]/30 z-10" />

        {/* Decorative corner ornaments */}
        <div className="absolute top-6 left-6 z-20 w-16 h-16 border-t-2 border-l-2 border-[#C9A84C]/60 hidden md:block" />
        <div className="absolute top-6 right-6 z-20 w-16 h-16 border-t-2 border-r-2 border-[#C9A84C]/60 hidden md:block" />
        <div className="absolute bottom-20 right-6 z-20 w-16 h-16 border-b-2 border-r-2 border-[#C9A84C]/60 hidden md:block" />

        {/* Floating badge */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide + '-badge'}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.8, duration: 0.6 } }}
            exit={{ opacity: 0, x: 30 }}
            className="absolute top-8 right-8 md:top-24 md:right-10 z-30 hidden sm:flex items-center space-x-2 bg-[#C9A84C] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg"
          >
            <Sparkles className="w-3 h-3" />
            <span>{slides[currentSlide].badge}</span>
          </motion.div>
        </AnimatePresence>

        {/* Slide counter */}
        <div className="absolute bottom-8 right-6 md:right-10 z-30 text-right hidden md:block">
          <span className="font-serif text-4xl font-bold text-[#C9A84C]">
            {String(currentSlide + 1).padStart(2, '0')}
          </span>
          <span className="text-white/40 text-sm ml-1">/ {String(slides.length).padStart(2, '0')}</span>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div key={currentSlide + '-content'} className="space-y-5 md:space-y-6">

              {/* Tag */}
              <motion.div
                custom={0.1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex items-center space-x-3"
              >
                <div className="h-px w-10 bg-[#C9A84C]" />
                <span className="text-[#C9A84C] uppercase tracking-[0.25em] text-xs md:text-sm font-bold">
                  {slides[currentSlide].tag}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                custom={0.2}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="font-serif font-bold leading-none"
              >
                <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  {slides[currentSlide].title}
                </span>
                <span className="block text-[#C9A84C] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl -mt-2">
                  {slides[currentSlide].titleHighlight}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                custom={0.35}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-base md:text-lg lg:text-xl text-white/80 max-w-md font-light leading-relaxed"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                custom={0.5}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center bg-[#C9A84C] hover:bg-[#b8942f] text-white font-bold px-8 py-4 uppercase tracking-widest text-sm transition-all duration-300 shadow-lg hover:shadow-[#C9A84C]/30 hover:shadow-xl group"
                >
                  Order Now
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center border-2 border-white/50 hover:border-[#C9A84C] text-white font-semibold px-8 py-4 uppercase tracking-widest text-sm transition-all duration-300 hover:text-[#C9A84C] backdrop-blur-sm"
                >
                  Our Story
                </Link>
              </motion.div>

              {/* Brand Trust Strip */}
              <motion.div
                custom={0.65}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex items-center space-x-6 pt-2"
              >
                {[{ icon: Award, label: 'Est. 1986' }, { label: '1M+ Happy Customers' }, { label: '100% Pure Milk' }].map((item, i) => (
                  <div key={i} className="flex items-center space-x-1.5 text-white/60 text-xs">
                    {item.icon && <item.icon className="w-3.5 h-3.5 text-[#C9A84C]" />}
                    {!item.icon && <div className="w-1 h-1 rounded-full bg-[#C9A84C]" />}
                    <span>{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Thumbnails (visible on md+) */}
        <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 flex-col gap-3 hidden lg:flex">
          {slides.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => { setDirection(idx > currentSlide ? 'next' : 'prev'); setCurrentSlide(idx); }}
              className={`relative overflow-hidden rounded-lg transition-all duration-500 ${idx === currentSlide
                ? 'w-14 h-14 ring-2 ring-[#C9A84C] ring-offset-2 ring-offset-transparent'
                : 'w-10 h-10 opacity-40 hover:opacity-70'
                }`}
            >
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute z-30 bottom-8 left-6 md:left-12 flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 backdrop-blur-sm text-white hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300 flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dot indicators */}
          <div className="flex space-x-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { setDirection(idx > currentSlide ? 'next' : 'prev'); setCurrentSlide(idx); }}
                className={`transition-all duration-500 rounded-full ${idx === currentSlide ? 'bg-[#C9A84C] w-7 h-2' : 'bg-white/40 w-2 h-2 hover:bg-white/70'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 backdrop-blur-sm text-white hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300 flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        {isAutoPlaying && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-30">
            <motion.div
              key={currentSlide}
              className="h-full bg-[#C9A84C]"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 5, ease: 'linear' }}
            />
          </div>
        )}
      </section>

      {/* ─── Categories Grid ─── */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-[#C9A84C] uppercase tracking-widest text-xs font-bold mb-3 block"
          >
            Handcrafted Varieties
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-brown-900 mb-4 font-bold"
          >
            Discover Our Range
          </motion.h3>
          <div className="h-1 w-20 bg-[#C9A84C] mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: 'Traditional Sweets', img: '/image copy 6.png', desc: 'Time-honoured kova recipes' },
            { title: 'Premium Selection', img: '/image copy 7.png', desc: 'Artisan crafted delicacies' },
            { title: 'Gift Hampers', img: '/image copy 13.png', desc: 'Perfect for every occasion' },
          ].map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl group cursor-pointer shadow-lg"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3b0e0e]/80 via-[#3b0e0e]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <p className="text-[#C9A84C] uppercase tracking-widest text-xs font-bold mb-1">{cat.desc}</p>
                <h4 className="text-2xl font-serif text-white font-bold mb-3">{cat.title}</h4>
                <span className="text-white/0 group-hover:text-white uppercase tracking-widest text-xs font-semibold transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 inline-flex items-center opacity-0 group-hover:opacity-100">
                  Explore <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Stats Banner ─── */}
      <section className="py-16 bg-[#3b0e0e]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '1986', label: 'Established' },
              { value: '38+', label: 'Years of Heritage' },
              { value: '1M+', label: 'Happy Customers' },
              { value: '50+', label: 'Sweet Varieties' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <h4 className="font-serif text-4xl md:text-5xl font-bold text-[#C9A84C] mb-2">{stat.value}</h4>
                <p className="text-white/60 uppercase tracking-widest text-xs font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Signature Packaging ─── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <span className="text-[#C9A84C] uppercase tracking-widest text-xs font-bold mb-4 block">Gifting Reimagined</span>
              <h2 className="font-serif text-4xl md:text-5xl text-brown-900 font-bold mb-8 leading-tight">
                Signature Premium<br />Packaging
              </h2>
              <p className="text-brown-900/70 text-lg leading-relaxed mb-8">
                Our sweets aren't just food; they are an experience. Every order comes in our signature legacy box, wrapped in delicate branded butter paper that preserves the aroma and freshness of our handcrafted Kova.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Hand-stamped Heritage Logo',
                  'Aroma-Preserving Branded Butter Paper',
                  'Sustainable Artisan Craft Boxes',
                  'Elegant Gold Foil Detailing',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center space-x-3 text-brown-900/80"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#C9A84C] shrink-0" />
                    <span className="font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center font-bold text-brown-900 hover:text-[#C9A84C] transition-colors uppercase tracking-widest text-sm border-b-2 border-[#C9A84C] pb-1"
              >
                Learn our story <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="absolute -inset-4 bg-[#C9A84C]/10 rounded-2xl -rotate-2" />
              <img
                src="/product_packaging.png"
                alt="Signature Packaging"
                className="relative z-10 w-full rounded-2xl shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Parallax Banner ─── */}
      <section
        className="relative py-28 md:py-36 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: 'url(/image copy 12.png)' }}
      >
        <div className="absolute inset-0 bg-[#1a0505]/75" />
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#C9A84C] uppercase tracking-widest text-xs font-bold mb-4 block">Special Offer</span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">Celebrate With The Best</h2>
            <p className="max-w-2xl mx-auto text-lg mb-10 text-white/80 font-light leading-relaxed">
              Every piece is crafted with love and slow-cooked to perfection, promising a burst of flavour that takes you back to your roots. Enjoy an exclusive 15% off on all Premium Hampers today.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white px-10 py-4 uppercase tracking-widest font-bold transition-all duration-300 group"
            >
              View Collection <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── Featured Products ─── */}
      <section className="py-24 container mx-auto px-6 bg-cream">
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] uppercase tracking-widest text-xs font-bold mb-3 block">Curated For You</span>
          <h3 className="font-serif text-4xl md:text-5xl text-brown-900 mb-4 font-bold">Signature Delights</h3>
          <p className="text-brown-900/60 font-light mb-4">Our most loved sweets</p>
          <div className="h-1 w-20 bg-[#C9A84C] mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.filter((p) => p.featured).map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center text-brown-900 font-semibold border-b-2 border-[#C9A84C] pb-1 hover:text-[#C9A84C] transition-colors uppercase tracking-widest text-sm group"
          >
            See All Products <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* ─── Authentic Kova Gallery ─── */}
      <section className="py-24" style={{ backgroundColor: '#faf6f0' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C9A84C] uppercase tracking-widest text-xs font-bold mb-3 block">Behind The Scenes</span>
            <h3 className="font-serif text-4xl md:text-5xl text-brown-900 mb-4 font-bold">Authentic Gallery</h3>
            <p className="text-brown-900/60 font-light mb-4">A visual feast of our heritage</p>
            <div className="h-1 w-20 bg-[#C9A84C] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]">
            {[
              { src: '/kova_gourmet_1.png', col: 'col-span-2 row-span-2' },
              { src: '/image copy 8.png', col: 'col-span-1 row-span-1' },
              { src: '/image copy 9.png', col: 'col-span-1 row-span-1' },
              { src: '/image copy 10.png', col: 'col-span-1 row-span-1' },
              { src: '/image copy 11.png', col: 'col-span-1 row-span-1' },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${img.col} relative overflow-hidden rounded-xl group cursor-pointer shadow-lg`}
              >
                <img
                  src={img.src}
                  alt="Kova Gallery"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3b0e0e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-24 bg-[#3b0e0e]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C9A84C] uppercase tracking-widest text-xs font-bold mb-3 block">Customer Love</span>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">What They Say</h3>
            <div className="h-1 w-20 bg-[#C9A84C] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-2xl relative text-center border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <div className="flex justify-center mb-5 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < t.rating ? 'text-[#C9A84C] fill-[#C9A84C]' : 'text-white/20'}`}
                    />
                  ))}
                </div>
                <p className="italic text-white/80 mb-6 leading-relaxed text-sm md:text-base">"{t.text}"</p>
                <div className="w-8 h-px bg-[#C9A84C] mx-auto mb-4" />
                <h5 className="font-serif font-bold text-lg text-white">{t.name}</h5>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
