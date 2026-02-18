import BirthdayCardImg from '../assets/birthdayImg/birthdayCard.jpg';
import BirthdayCushionImg from '../assets/birthdayImg/birthdayCushion.jpg';
import BirthdayFrameImg from '../assets/birthdayImg/birthdayPhotoFrame.jpg';
import BirthdayPlateImg from '../assets/birthdayImg/birthdayPlate.jpg';
import BirthdayKeychainImg from '../assets/birthdayImg/birthdayKeychain.jpg';
import BirthdayPuzzleImg from '../assets/birthdayImg/birthdayPuzzal.webp';
import StrawberryCakeImg from '../assets/cakeImg/strawberryCake.jpg';
import NameCakeImg from '../assets/cakeImg/nameCake.jpg';

const products = [
    {
      id: 1,
      name: "Personalized Birthday Card",
      description: "Custom image & heartfelt message",
      price: 499,
      originalPrice: 599,
      discount: 20,
      image: generatePlaceholderImage("Birthday Card", "#fce7f3"),
    },
    {
      id: 2,
      name: "Custom Birthday Cushion",
      description: "Upload your favorite birthday photo",
      price: 899,
      originalPrice: 999,
      discount: 10,
      image: generatePlaceholderImage("Birthday Cushion", "#fce7f3"),
    },
    {
      id: 3,
      name: "Personalized Photo Mug",
      description: "Your favorite moment on a mug",
      price: 399,
      originalPrice: 499,
      discount: 20,
      image: generatePlaceholderImage("Photo Mug", "#fce7f3"),
    },
    {
      id: 4,
      name: "Birthday Photo Frame",
      description: "Beautiful wooden frame with custom photo",
      price: 599,
      originalPrice: 799,
      discount: 25,
      image: generatePlaceholderImage("Photo Frame", "#fce7f3"),
    },
    {
      id: 5,
      name: "Personalized Birthday Plate",
      description: "Ceramic plate with custom birthday design",
      price: 449,
      originalPrice: 599,
      discount: 25,
      image: generatePlaceholderImage("Birthday Plate", "#fce7f3"),
    },
    {
      id: 6,
      name: "Custom Photo Blanket",
      description: "Cozy fleece blanket with your favorite photos",
      price: 699,
      originalPrice: 899,
      discount: 22,
      image: generatePlaceholderImage("Photo Blanket", "#fce7f3"),
    },
    {
      id: 7,
      name: "Personalized Birthday Keychain",
      description: "Durable keychain with custom photo and name",
      price: 199,
      originalPrice: 299,
      discount: 33,
      image: generatePlaceholderImage("Birthday Keychain", "#fce7f3"),
    },
    {
      id: 8,
      name: "Custom Birthday Puzzle",
      description: "Fun 500-piece puzzle with your favorite photo",
      price: 549,
      originalPrice: 699,
      discount: 21,
      image: generatePlaceholderImage("Photo Puzzle", "#fce7f3"),
    },
  ];

  {
    id: 1,
    name: "Personalized Birthday Card",
    description: "Custom image & heartfelt message",
    price: 499,
    originalPrice: 599,
    discount: 20,
    image: BirthdayCardImg,
  },
  {
    id: 2,
    name: "Custom Birthday Cushion",
    description: "Upload your favorite birthday photo",
    price: 899,
    originalPrice: 999,
    discount: 10,
    image: BirthdayCushionImg,
  },
  {
    id: 3,
    name: "Strawberry Cake",
    description: "Fresh strawberry cake with custom photo design",
    price: 849,
    originalPrice: 1099,
    discount: 23,
    image: StrawberryCakeImg,
  },
  {
    id: 4,
    name: "Birthday Photo Frame",
    description: "Beautiful wooden frame with custom photo",
    price: 599,
    originalPrice: 799,
    discount: 25,
    image: BirthdayFrameImg,
  },
  {
    id: 5,
    name: "Personalized Birthday Plate",
    description: "Ceramic plate with custom birthday design",
    price: 449,
    originalPrice: 599,
    discount: 25,
    image: BirthdayPlateImg,
  },
  {
    id: 6,
    name: "Custom Name Message Cake",
    description: "Vanilla cake with personalized name and message",
    price: 749,
    originalPrice: 949,
    discount: 21,
    image: NameCakeImg,
  },
  {
    id: 7,
    name: "Personalized Birthday Keychain",
    description: "Durable keychain with custom photo and name",
    price: 199,
    originalPrice: 299,
    discount: 33,
    image: BirthdayKeychainImg,
  },
  {
    id: 8,
    name: "Custom Birthday Puzzle",
    description: "Fun 500-piece puzzle with your favorite photo",
    price: 549,
    originalPrice: 699,
    discount: 21,
    image: BirthdayPuzzleImg,
  },
];

export default BirthdayData;
