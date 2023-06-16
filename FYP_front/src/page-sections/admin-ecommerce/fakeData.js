import { format } from "date-fns";
export const productsFakeData = [
  {
    image: "/static/products/shoe-3.png",
    name: "Nike Air Max 270",
    company: "Nike Official",
    category: "Shoe",
    sku: "UY3769",
    price: 450,
    stock: 48,
    rate: 14,
  },
  {
    image: "/static/products/shoe-4.png",
    name: "White Nike 270",
    company: "Rave BD",
    category: "Shoe",
    sku: "UY3769",
    price: 450,
    stock: 48,
    rate: 14,
  },
  {
    image: "/static/products/shoe-3.png",
    name: "Blue Revels Shoes",
    company: "Rave BD",
    category: "Shoe",
    sku: "UY3769",
    price: 450,
    stock: 48,
    rate: 14,
  },
  {
    image: "/static/products/shoe-4.png",
    name: "Nike Pro Max 270",
    company: "Nike BD",
    category: "Shoe",
    sku: "UY3769",
    price: 450,
    stock: 48,
    rate: 14,
  },
  {
    image: "/static/products/light.png",
    name: "Nike Lamp Light",
    company: "Super Start",
    category: "Electronics",
    sku: "UY3769",
    price: 450,
    stock: 48,
    rate: 14,
  },
  {
    image: "/static/products/chair.png",
    name: "Comfortable Chair",
    company: "Hatil",
    category: "Chair",
    sku: "UY3769",
    price: 450,
    stock: 48,
    rate: 14,
  },
];
export const ordersFakeData = [
  {
    orderNo: "UY3769",
    customer: "Mark Ruffle",
    date: format(new Date(), "dd-MM-yyyy"),
    total: "$789",
    payment: "Paypal",
    status: "Unpaid",
  },
  {
    orderNo: "UY3770",
    customer: "Mark Ruffle",
    date: format(new Date(), "dd-MM-yyyy"),
    total: "$789",
    payment: "Paypal",
    status: "Paid",
  },
  {
    orderNo: "UY3761",
    customer: "Mark Ruffle",
    date: format(new Date(), "dd-MM-yyyy"),
    total: "$789",
    payment: "Paypal",
    status: "Unpaid",
  },
  {
    orderNo: "UY3762",
    customer: "Mark Ruffle",
    date: format(new Date(), "dd-MM-yyyy"),
    total: "$789",
    payment: "Paypal",
    status: "Paid",
  },
];
export const customersFakeData = [
  {
    date: format(new Date(), "MMM dd, yyyy"),
    name: "Kishor kumar",
    // position: "Editor",
    phone: "+92 333115245",
    avatar: "/static/avatar/003-boy.svg",
    email: "kishor@gmail.com",
    location: "Malir",
    status: "Active",
  },
  {
    date: format(new Date(), "MMM dd, yyyy"),
    name: "Kabber kumar",
    // position: "Editor",
    phone: "+92 578115245",
    avatar: "/static/avatar/003-boy.svg",
    email: "kabber@gmail.com",
    location: "New Karachi",
    status: "Blocked",
  },
  {
    date: format(new Date(), "MMM dd, yyyy"),
    name: "Haji Sahab",
    // position: "UI Designer",
    phone: "+92 44415245",
    avatar: "/static/avatar/003-boy.svg",
    email: "haji@gmail.com",
    location: "Juhar",
    status: "Active",
  },
  {
    date: format(new Date(), "MMM dd, yyyy"),
    name: "Kabir Singh",
    phone: "+98 52215245",
    avatar: "/static/avatar/003-boy.svg",
    email: "preeti@gmail.com",
    location: "Landhi",
    status: "Blocked",
  },
];
