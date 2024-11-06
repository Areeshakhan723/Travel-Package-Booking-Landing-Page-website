import {
  frame,
  img1,
  img2,
  img3,
  img4,
  ticket,
  vecter,
  imgInfo1,
  imgInfo2,
  imgInfo3,
  client1,
  client2,
  client3,
  client4,
  client,
  im1,
  im2,
  im3,
  im4,
  im5,
} from "../assets/images";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/Instagram.png";
import linkedin from "../assets/icons/linkedin.png";

export const cardsdata = [
  {
    imgcard: vecter,
    title: "Search Your Destination",
    description:
      "vitae nisi vel ex. faucibus maximus non. Vestibulum sollicitudin. adipiscing sollicitudin. nec consectetur placerat. turpis viverra vitae lobortis, Ut vel tincidunt volutpat luctus diam tincidunt sodales. quam sollicitudin.",
  },
  {
    imgcard: ticket,
    title: "Get Your Tickets",
    description:
      "vitae nisi vel ex. faucibus maximus non. Vestibulum sollicitudin. adipiscing sollicitudin. nec consectetur placerat. turpis viverra vitae lobortis, Ut vel tincidunt volutpat luctus diam tincidunt sodales. quam sollicitudin.",
  },
  {
    imgcard: frame,
    title: "Travel Around The Country",
    description:
      "vitae nisi vel ex. faucibus maximus non. Vestibulum sollicitudin. adipiscing sollicitudin. nec consectetur placerat. turpis viverra vitae lobortis, Ut vel tincidunt volutpat luctus diam tincidunt sodales. quam sollicitudin.",
  },
];

// Top detinations images

export const imgs = [
  {
    imgURL: img1,
    title: "Hunza Valley",
    description: "Valley Tour | Hunza Tour Packages",
    price: "957.00",
    days: "10 days",
    locationName: "Gilgit",
  },
  {
    imgURL: img4,
    title: "Convict Lake",
    description: "For 3 Days | Book & Save up to 60000",
    price: "957.00",
    days: "10 days",
    locationName: "Convict Lake",
  },
  {
    imgURL: img3,
    title: "Lake",
    description: "Lake blue deep water of Oregon's Crater Lake",
    price: "957.00",
    days: "10 days",
    locationName: "USA",
  },
  {
    imgURL: img2,
    title: "Maldives",
    description: "Package for 3 Days | Book & Save up to 60000",
    price: "957.00",
    days: "10 days",
    locationName: "Maldives",
  },
];

// Footer Links
export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", link: "/" },
      { name: "Destination", link: "/" },
      { name: "Package", link: "/" },
      { name: "About us", link: "/" },
      { name: "Contact", link: "/" },
      { name: "Privacy policy", link: "/" },
    ],
  },
  {
    title: "Features",
    links: [
      { name: "Vacation Package", link: "/" },
      { name: "List of Tour", link: "/" },
      { name: "Gallery", link: "/" },
      { name: "Travel on a Budget", link: "/" },
    ],
  },
];

export const socialMedia = [
  {
    href: "https://www.facebook.com/profile.php?id=61550054554015",
    src: facebook,
    alt: "facebook logo",
  },
  {
    href: "https://www.linkedin.com/in/areesha-khan-04bb07305/",
    src: linkedin,
    alt: "linkedin logo",
  },
  { src: instagram, alt: "instagram logo" },
];

// AboutUs tour guide
export const tourguide = [
  {
    imgURL: imgInfo1,
    name: "Margaret March",
    role: "Forest Guide",
    description:
      "Margaret is an experienced forest guide with a deep passion for nature and wildlife.He has spent over 10 years exploring and studying dense forests across multiple continents. Her knowledge of plants, animals, and natural survival skills makes her an invaluable guide for adventurous explorers looking to connect with the wilderness. Join her on an unforgettable journey through the heart of nature.",
  },
  {
    imgURL: imgInfo2,
    name: "Lillian Chou",
    role: "City Guide",
    description:
      "Lillian is a dynamic city guide who brings urban landscapes to life with her in-depth knowledge of history, architecture, and local culture. Born and raised in the city, Lillian knows every hidden alley and cultural hotspot. Whether you’re a history buff or a foodie, her tours offer a vibrant mix of insights and experiences that capture the essence of city life. Discover the city from a local's perspective with Lillian.",
  },
  {
    imgURL: imgInfo3,
    name: "Adam Walker",
    role: "Ocean Guide",
    description:
      "Adam is an ocean guide dedicated to exploring and protecting marine environments. With a background in marine biology, he brings a wealth of knowledge about ocean ecosystems and coastal life. From snorkeling with vibrant coral reefs to observing diverse sea creatures, Adam's tours offer a unique window into the underwater world. Perfect for anyone who loves the sea, his tours promise excitement and education on every dive.",
  },
];

// client reviews
export const reviews = [
  {
    banner: client,
    imgURL: client1,
    name: "Hania Amir",
    role: "Traveler",
    description:
      "lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
  },
  {
    banner: client,
    imgURL: client2,
    name: "Wahaj Ali",
    role: "Traveler",
    description:
      "lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
  },
  {
    banner: client,
    imgURL: client3,
    name: "Maya Ali",
    role: "Traveler",
    description:
      "lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
  },
  {
    banner: client,
    imgURL: client4,
    name: "Muneeb But",
    role: "Traveler",
    description:
      "lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
  },
];

// Packages
export const packages = [
  {
    imgURL: im3,
    name: "France Tour",
    days: "10 days",
    location: "Parise France",
  },
  {
    imgURL: im5,
    name: "Caribbean Paradise Escape",
    days: "10 days",
    location: "Caribbean",
  },
  {
    imgURL: im4,
    name: "Asian Adventure Expedition",
    days: "10 days",
    location: "Asia",
  },
  {
    imgURL: im3,
    name: "South American Expedition",
    days: "10 days",
    location: "South America",
  },
  {
    imgURL: im2,
    name: "Australian Outback Adventure",
    days: "10 days",
    location: "Australia",
  },
  {
    imgURL: im1,
    name: "Pakistan Culture Expedition",
    days: "10 days",
    location: "Pakistan",
  },
  {
    imgURL: im3,
    name: "Brazil Tour Expedition",
    days: "10 days",
    location: "Brazil",
  },
  {
    imgURL: im3,
    name: "African Safari Adventure",
    days: "10 days",
    location: "Africa",
  },
  
];
