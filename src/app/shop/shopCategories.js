export const shopCategories = [
  { id: "electronics", name: "Electronics" },
  { id: "fashion", name: "Fashion" },
];

export const products = [
  {
    id: "prod1",
    name: "iPhone 15",
    category: "electronics",
    price: 1200,
    image: "/images/iphone15.jpg",
  },
  {
    id: "prod2",
    name: "Samsung Galaxy S23",
    category: "electronics",
    price: 999,
    image: "/images/galaxyS23.jpg",
  },
  {
    id: "prod3",
    name: "Leather Jacket",
    category: "fashion",
    price: 199,
    image: "/images/jacket.jpg",
  },
  {
    id: "prod4",
    name: "MacBook",
    category: "electronics",
    price: 2500,
    image: "/images/macbook.jpg",
  },
];



export const macbookProducts = [
  {
    id: "prod5",
    name: "MacBook Air",
    category: "electronics",
    subcategory: "laptops",
    price: 2000,
    image: "/images/macbook-air.jpg",
    features: [
      "M1 chip for speed and efficiency",
      "Retina Display with True Tone",
      "Ultra-light and portable",
      "Up to 18 hours battery life",
    ],
    description: "MacBook Air is perfect for everyday computing with excellent performance and portability.",
    specifications: {
      RAM: "8GB",
      Storage: "256GB SSD",
      Weight: "1.29kg",
      Color: "Silver",
    },
  },
  {
    id: "prod6",
    name: "MacBook Pro 15",
    category: "electronics",
    subcategory: "laptops",
    price: 2500,
    image: "/images/macbook-pro-15.jpg",
    features: [
      "M1 Pro chip for high performance",
      "Retina XDR display",
      "Powerful graphics for creators",
      "Up to 20 hours battery life",
    ],
    description: "MacBook Pro 15 is designed for professionals who need power and speed for demanding tasks.",
    specifications: {
      RAM: "16GB",
      Storage: "512GB SSD",
      Weight: "1.83kg",
      Color: "Space Gray",
    },
  },
  {
    id: "prod7",
    name: "MacBook Pro 16",
    category: "electronics",
    subcategory: "laptops",
    price: 3000,
    image: "/images/macbook-pro-16.jpg",
    features: [
      "M1 Max chip for extreme performance",
      "16-inch Retina XDR display",
      "Ideal for video and 3D editing",
      "Up to 21 hours battery life",
    ],
    description: "MacBook Pro 16 is the ultimate machine for creatives and professionals needing top performance.",
    specifications: {
      RAM: "32GB",
      Storage: "1TB SSD",
      Weight: "2.1kg",
      Color: "Silver",
    },
  },
];
