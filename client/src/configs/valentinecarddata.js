import RedRoseImg from '../assets/valentaineImg/redrose.jpg';
import ChocolateImg from '../assets/valentaineImg/chocolatebox.jpg';
import TeddyBearImg from '../assets/valentaineImg/teddybear.jpg'
import MugSetImg from '../assets/valentaineImg/mugsets.jpg';
import LocketImg from '../assets/valentaineImg/locket.jpg';
import GreetingCardImg from '../assets/valentaineImg/greetingcard.jpg';
import PhotoFrameImg from '../assets/valentaineImg/photoframe.jpg';
import StoryBookImg from '../assets/valentaineImg/storybook.jpg';

const products = [
  {
    id: 31,
    name: "Romantic Red Rose Bouquet",
    description: "Beautiful fresh red roses bouquet for your loved one.",
    originalPrice: 1499,
    price: 1199,
    discount: "20",
    image: RedRoseImg,
    category: "Flowers"
  },
  {
    id: 32,
    name: "Heart Shape Chocolate Box",
    description: "Premium assorted chocolates in heart-shaped box.",
    originalPrice: 999,
    price: 799,
    discount: "20",
    image: ChocolateImg,
    category: "Chocolates"
  },
  {
    id: 33,
    name: "Couple Teddy Bear",
    description: "Cute teddy bear pair for Valentine's gift.",
    originalPrice: 1299,
    price: 999,
    discount: "23",
    image: TeddyBearImg,
    category: "Soft Toys",
  },
  {
    id: 34,
    name: "Love Greeting Card",
    description: "Romantic handwritten style Valentine's greeting card.",
    originalPrice: 299,
    price: 199,
    discount: "33",
    image: GreetingCardImg,
    category: "Cards",
  },
  {
    id: 35,
    name: "Personal Photo Frame",
    description: "Custom photo frame with your favorite picture.",
    originalPrice: 899,
    price: 699,
    discount: "22",
    image: PhotoFrameImg,
    category: "Personalized Gifts",
  },
  {
    id: 36,
    name: "Love Couple Mug Set",
    description: "Cute matching mugs for couples.",
    originalPrice: 799,
    price: 599,
    discount: "25",
    image: MugSetImg,
    category: "Accessories",
  },
  {
    id: 37,
    name: "Couple Photo Locket",
    description: "Precious moments in a beautiful locket.",
    originalPrice: 899,
    price: 699,
    discount: "22",
    image: LocketImg,
    category: "Jewellery",
  },
  {
    id: 38,
    name: "Custom Love Story Book",
    description: "Our memories beautifully captured in a personalized photo book.",
    originalPrice: 1299,
    price: 999,
    discount: "23",
    image: StoryBookImg,
    category: "Personalized Gifts",
  }
];

export default products;