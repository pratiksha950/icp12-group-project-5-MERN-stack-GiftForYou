import PhotoTshirtImg from '../assets/fashionImg/photoTshirt.jpg'
import CustomHoodieImg from '../assets/fashionImg/personalizedHoodie.jpg';
import PhotoJacketImg from '../assets/fashionImg/photoJacket.jpg';
import CustomCapImg from '../assets/fashionImg/personalizedCap.jpg';
import CustomPoloShirtImg from '../assets/fashionImg/poloShirt.jpg';
import CustomTankTopImg from '../assets/fashionImg/photoTankTop.jpg';
import CustomBeanieImg from '../assets/fashionImg/beanie.jpg';
import WomenSummerDressImg from '../assets/fashionImg/womenSummerDress.jpg';


const FashionData = [
  {
    id: 21,
    name: "Custom Photo T-Shirt",
    description: "Wear your favorite memory on a tee",
    price: 499,
    originalPrice: 699,
    discount: 29,
    image: PhotoTshirtImg,
  },
  {
    id: 22,
    name: "Personalized Hoodie",
    description: "Cozy hoodie with your custom design",
    price: 799,
    originalPrice: 999,
    discount: 20,
    image: CustomHoodieImg,
  },
  {
    id: 23,
    name: "Custom Photo Jacket",
    description: "Stylish jacket with your personalized print",
    price: 1299,
    originalPrice: 1599,
    discount: 19,
    image: PhotoJacketImg,
  },
  {
    id: 24,
    name: "Personalized Cap",
    description: "Trendy cap with custom embroidery or print",
    price: 399,
    originalPrice: 499,
    discount: 20,
    image: CustomCapImg,
  },
  {
    id: 25,
    name: "Custom Polo Shirt",
    description: "Premium polo with your photo and name",
    price: 599,
    originalPrice: 799,
    discount: 25,
    image: CustomPoloShirtImg,
  },
  {
    id: 26,
    name: "Women's Summer Dress",
    description: "Lightweight floral summer dress perfect for outings.",
    originalPrice: 1999,
    price: 1499,
    discount: "25%",
    image: WomenSummerDressImg,
  },
  {
    id: 27,
    name: "Custom Photo Tank Top",
    description: "Summer ready tank with your favorite photo",
    price: 349,
    originalPrice: 499,
    discount: 30,
    image: CustomTankTopImg,
  },
  {
    id: 28,
    name: "Personalized Beanie",
    description: "Cozy beanie with custom embroidery",
    price: 299,
    originalPrice: 399,
    discount: 25,
    image: CustomBeanieImg,
  },
];
export default FashionData;

