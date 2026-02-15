import birthday1 from "../assets/homeimg/birthday1.jpg";
import flower1 from "../assets/homeimg/flower1.jpg";
import cake1 from "../assets/homeimg/cake1.jpg";

const giftCardData = [
  {
    id: 1,
    name: "Classmate Notebook",
    description: "200 pages notebook ideal for engineering students",
    originalPrice: 135,
    price: 120,
    discount: 10,
    image: birthday1,
    category: "Stationery",
    quantity: 1,
  },
  {
    id: 2,
    name: "Instruments Box",
    description: "Complete set including compass, divider, and scale",
    originalPrice: 370,
    price: 350,
    discount: 5,
    image: birthday1,
    category: "Stationery",
    quantity: 1,
  },

  // 🎂 Birthday Gifts
  {
    id: 3,
    name: "Birthday Cake",
    description: "Chocolate truffle cake 1kg for birthday celebration",
    originalPrice: 800,
    price: 699,
    discount: 12,
    image: cake1,
    category: "Cake",
    quantity: 1,
  },
  {
    id: 4,
    name: "Teddy Bear",
    description: "Soft teddy bear 30cm for gift",
    originalPrice: 600,
    price: 499,
    discount: 15,
    image: birthday1,
    category: "Toys",
    quantity: 1,
  },

  // 💐 Flowers
  {
    id: 5,
    name: "Rose Bouquet",
    description: "Fresh red roses bouquet with wrapping",
    originalPrice: 500,
    price: 420,
    discount: 16,
    image: flower1,
    category: "Flowers",
    quantity: 1,
  },

  // 🎁 Surprise Gifts
  {
    id: 6,
    name: "Surprise Gift Box",
    description: "Special gift box with chocolates and greeting card",
    originalPrice: 900,
    price: 799,
    discount: 11,
    image: birthday1,
    category: "Gift Box",
    quantity: 1,
  },
  {
    id: 7,
    name: "Personalized Mug",
    description: "Custom name printed coffee mug",
    originalPrice: 300,
    price: 250,
    discount: 17,
    image: birthday1,
    category: "Personalized",
    quantity: 1,
  },
  {
    id: 8,
    name: "Photo Frame",
    description: "Wooden photo frame for memories",
    originalPrice: 400,
    price: 320,
    discount: 20,
    image: birthday1,
    category: "Home Decor",
    quantity: 1,
  },
];

export default giftCardData;
