import ProductImg1 from './assets/img/product1.png';
import ProductImg2 from './assets/img/product2.png';
import ProductImg3 from './assets/img/product3.png';
import ProductImg4 from './assets/img/product4.png';
import ProductImg5 from './assets/img/product5.png';
import ProductImg6 from './assets/img/product6.png';

// blog images
import BlogImg1 from './assets/img/blogImg1.png';
import BlogImg2 from './assets/img/blogImg2.png';
import BlogImg3 from './assets/img/blogImg3.png';
import UserIcon from './assets/img/user.svg';


export const images = [
    ProductImg1,
      ProductImg2,
      ProductImg3,
      ProductImg4,
]



export const ProductList = [
  {
    id: 1,
    sticker: "New",
    productImg: ProductImg1,
    productCategory: "SKINCARE",
    productTitle: "Body Hydrating Cream",
    price: "₹299.00",
    oldPrice: "₹299.00",
    bgClr: "bg-clr-green",
    cornerBg: "bg-clr-greenDeep",
    category: "Face",
    color: "Black",
    colorBg: "bg-clr-dark1",
    brand: "Monastery",
    stock: 5,
    images:[
      ProductImg1,
      ProductImg2,
      ProductImg3,
      ProductImg4,
    ]
  },
  {
     id: 2,
    sticker: "",
    productImg: ProductImg2,
    productCategory: "HAIR OIL",
    productTitle: "Cosmetix No. 7 Bonding Oil",
    price: "₹158.00",
    oldPrice: "₹200.00",
    bgClr: "bg-clr-dark",
    cornerBg: "bg-clr-greenDeep",
    category: "Hair Styling",
    color: "Green",
    colorBg: "bg-clr-dark1",
    brand: "Lessse",
     stock: 3,
  },
  {
    id: 3,
    sticker: "",
    productImg: ProductImg3,
    productCategory: "FOUNDATION",
    productTitle: "Beautifully Bare Foundation Serum",
    price: "₹111.00",
    oldPrice: "₹113.00",
    bgClr: "bg-clr-green",
    cornerBg: "bg-clr-greenDeep",
    category: "Lips",
    color: "Blue",
    colorBg: "bg-clr-green",
    brand: "Lessse",
     stock: 2,
  },
  {
     id: 4,
    sticker: "",
    productImg: ProductImg4,
    productCategory: "HAIR MASK",
    productTitle: "Cosmetix No. 1 Hair Mask",
    price: "₹115.00",
    oldPrice: "₹135.00",
    bgClr: "bg-clr-green",
    cornerBg: "bg-clr-greenDeep",
    category: "Face",
    color: "Brown",
    colorBg: "bg-clr-green",
    brand: "Lessse",
     stock: 5,
  },
  {
     id: 5,
    sticker: "",
    productImg: ProductImg5,
    productCategory: "SKINCARE",
    productTitle: "Body Hydrating Cream",
    price: "₹299.00",
    oldPrice: "₹299.00",
    bgClr: "bg-clr-green",
    cornerBg: "bg-clr-greenDeep",
    category: "Lips",
    color: "Orange",
    colorBg: "bg-clr-yellow",
    brand: "Kapowder",
     stock: 4,
  },
  {
     id: 6,
    sticker: "-25%",
    productImg: ProductImg6,
    productCategory: "HAIR OIL",
    productTitle: "Cosmetix No. 7 Bonding Oil",
    price: "₹158.00",
    oldPrice: "₹200.00",
    bgClr: "bg-clr-danger",
    cornerBg: "bg-clr-dangerDeep",
    category: "Skincare",
    color: "Black",
    colorBg: "bg-clr-yellowLight",
    brand: "Kapowder",
     stock: 5,
  },
  {
     id: 7,
    sticker: "",
    productImg: ProductImg1,
    productCategory: "FOUNDATION",
    productTitle: "Beautifully Bare Foundation Serum",
    price: "₹111.00",
    oldPrice: "₹113.00",
    bgClr: "bg-clr-green",
    cornerBg: "bg-clr-greenDeep",
    category: "Face",
    color: "Green",
    colorBg: "bg-clr-danger",
    brand: "Erbaviva",
     stock: 5,
  },
  {
    id: 8,
    sticker: "",
    productImg: ProductImg2,
    productCategory: "HAIR MASK",
    productTitle: "Cosmetix No. 1 Hair Mask",
    price: "₹115.00",
    oldPrice: "₹135.00",
    bgClr: "bg-clr-green",
    cornerBg: "bg-clr-greenDeep",
    category: "Skincare",
    color: "Blue",
    colorBg: "bg-clr-whiteShade",
    brand: "Erbaviva",
    stock: 5,
  },
]

export const BlogList = [

  {
    blogImg: BlogImg1,
    postDate: "FEB 7, 2023",
    blogCat: "LIFESTYLE",
    blogTitle: "The 7 Best Bikini Trimmers to Get Ready for Swimsuit Season.",
    blogIntro: "",
    blogAuthor: "By Luisa Howell",
    userIcon: UserIcon,
  },

   {
    blogImg: BlogImg2,
    postDate: "FEB 8, 2023",
    blogCat: "FASHION",
    blogTitle: "Perfect Way To Find Your Lip Combo For Everyday Lip Makeup.",
    blogIntro: "",
    blogAuthor: "By Mallali youg",
    userIcon: UserIcon,
  },

   {
    blogImg: BlogImg3,
    postDate: "FEB 8, 2023",
    blogCat: "FASHION",
    blogTitle: "Perfect Way To Find Your Lip Combo For Everyday Lip Makeup.",
    blogIntro: "",
    blogAuthor: "By Jacks spot",
    userIcon: UserIcon,
  },

]