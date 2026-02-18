import ButterCreamCakeImg from '../assets/cakeImg/buttercreamCake.jpg';
import ChocolateCakeImg from '../assets/cakeImg/chocolateCake.jpg';
import ThemeCakeImg from '../assets/cakeImg/themeCustomizedCake.jpg';
import EgglessCakeImg from '../assets/cakeImg/egglessCake.jpg';
import MultiTieredCakeImg from '../assets/cakeImg/multiTierCake.jpg';
import PhotoCakeImg from '../assets/cakeImg/photoCake.jpg';
import StrawberryCakeImg from '../assets/cakeImg/strawberryCake.jpg';
import NameCakeImg from '../assets/cakeImg/nameCake.jpg';

export const Products = [
  {
    id: 11,
    name: "Customized Photo Cake",
    description: "Your favorite photo on a delicious cake",
    price: 999,
    originalPrice: 1299,
    discount: 23,
    image: PhotoCakeImg,
  },
  {
    id: 12,
    name: "Personalized Buttercream Cake",
    description: "Custom design with your special message",
    price: 1299,
    originalPrice: 1599,
    discount: 19,
    image: ButterCreamCakeImg,
  },
  {
    id: 13,
    name: "Chocolate Photo Cake",
    description: "Rich chocolate cake with custom photo topper",
    price: 899,
    originalPrice: 1099,
    discount: 18,
    image: ChocolateCakeImg,
  },
  {
    id: 14,
    name: "Theme Based Customized Cake",
    description: "Any theme you desire on your cake",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    image: ThemeCakeImg,
  },
  {
    id: 15,
    name: "Multi-Tier Custom Photo Cake",
    description: "Beautiful tiered cake with custom photos on each tier",
    price: 1599,
    originalPrice: 1999,
    discount: 20,
    image: MultiTieredCakeImg,
  },
  {
    id: 16,
    name: "Strawberry Photo Cake",
    description: "Fresh strawberry cake with custom photo design",
    price: 849,
    originalPrice: 1099,
    discount: 23,
    image: StrawberryCakeImg,
  },
  {
    id: 17,
    name: "Personalized Eggless Photo Cake",
    description: "Delicious eggless cake with your custom photo",
    price: 699,
    originalPrice: 899,
    discount: 22,
    image: EgglessCakeImg,
  },
  {
    id: 18,
    name: "Custom Name Message Cake",
    description: "Vanilla cake with personalized name and message",
    price: 749,
    originalPrice: 949,
    discount: 21,
    image: NameCakeImg,
  },
];

export default Products;
