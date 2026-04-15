export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Classic Pure Kova',
    price: 350,
    image: '/kova_gourmet_1.png',
    category: 'Traditional Sweets',
    description: 'Our signature pure milk Kova, slow-cooked to perfection over firewood. Rich, creamy, and melts in your mouth with an authentic sweet aroma.',
    featured: true,
  },
  {
    id: 'p2',
    name: 'Kaju Katli Kova Blend',
    price: 550,
    image: '/image copy.png',
    category: 'Premium',
    description: 'A luxurious fusion of premium cashew nut katli layered over our fresh classic Kova.',
    featured: true,
  },
  {
    id: 'p3',
    name: 'Almond & Saffron Kova',
    price: 480,
    image: '/image copy 2.png',
    category: 'Nutty Sweets',
    description: 'Elevate your sweet experience with Kova infused with pure Kashmiri Saffron and slow-roasted almonds.',
    featured: false,
  },
  {
    id: 'p4',
    name: 'Cardamom Kova Bites',
    price: 380,
    image: '/image copy 3.png',
    category: 'Traditional Sweets',
    description: 'Bite-sized delights packed with the rich essence of premium cardamom and fresh milk.',
  },
  {
    id: 'p5',
    name: 'Festive Kova Hamper',
    price: 1250,
    image: '/image copy 4.png',
    category: 'Hampers',
    description: 'The perfect gift for any occasion. A curated assortment of our best-selling Kova varieties packed in an elegant box.',
    featured: true,
  },
  {
    id: 'p6',
    name: 'Rose Pistachio Kova',
    price: 460,
    image: '/image copy 5.png',
    category: 'Premium',
    description: 'Delicate rose petal essence folded gently into creamy Kova, generously topped with crushed pistachios.',
  },
  {
    id: 'p7',
    name: 'Jaggery Kova (Healthy)',
    price: 390,
    image: '/image copy 6.png',
    category: 'Healthy Alternatives',
    description: 'A guilt-free indulgence made with pure organic jaggery instead of refined sugar, offering an earthy and robust sweetness.',
  },
  {
    id: 'p8',
    name: 'Golden Milk Mysore Pak',
    price: 420,
    image: '/image copy 7.png',
    category: 'Traditional Sweets',
    description: 'A delicate and crumbly traditional treat infused with golden milk properties. A heritage recipe.',
  },
  {
    id: 'p9',
    name: 'Special Malai Gaja',
    price: 400,
    image: '/image copy 8.png',
    category: 'Specials',
    description: 'A deeply indulgent sweet pastry soaked in cardamom syrup and stuffed with pure fresh Kova.',
    featured: true,
  },
  {
    id: 'p10',
    name: 'Heritage Kova Laddu',
    price: 450,
    image: '/image copy 9.png',
    category: 'Signature Dishes',
    description: 'Our award-winning Kova laddu, rolled with roasted dry fruits and traditional ghee.',
    featured: true,
  },
  {
    id: 'p11',
    name: 'Diwali Grand Box',
    price: 2500,
    image: '/image copy 10.png',
    category: 'Festival Offers',
    description: 'A grand collection of our finest 12 sweet varieties specially packed for your festive gifting needs.',
    featured: true,
  },
  {
    id: 'p12',
    name: 'Kova Peda Selection',
    price: 320,
    image: '/image copy.png',
    category: 'Traditional Sweets',
    description: 'Round, flat traditional pedas that dissolve instantly in your mouth with a hint of natural milk sweetness.',
  },
  {
    id: 'p13',
    name: 'Premium Fig & Kova',
    price: 580,
    image: '/image copy 2.png',
    category: 'Premium',
    description: 'Fresh honey-soaked figs combined with classic rich Kova for an exotic flavor profile.',
  },
  {
    id: 'p14',
    name: 'Sugar-free Almond Bites',
    price: 460,
    image: '/image copy 3.png',
    category: 'Healthy Alternatives',
    description: 'For the calorie-conscious, enjoy these naturally sweetened almond and Kova bites made with Stevia extracts.',
  }
];
