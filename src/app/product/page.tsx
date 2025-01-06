"use client"

import { useContext } from "react";
import Link from "next/link";
import CartContext from "../context";
import CartProvider from "../cartProvider";

const productData = [
  {
    slug: "product-1",
    title: "Library stool chair-1",
    image: "/image/whitechair2.jpeg",
    price: "$20",
    image2: "/image/cart.png",
  },
  {
    slug: "product-2",
    title: "Library stool chair-2",
    image: "/image/pinkchair.jpeg",
    price: "$20",
    image2: "/image/cart.png",
  },
  {
    slug: "product-3",
    title: "Library stool chair-3",
    image: "/image/orangechair.jpeg",
    price: "$20",
    image2: "/image/cart.png",
  },
  {
    slug: "product-4",
    title: "Library stool chair-4",
    image: "/image/whitechair.jpeg",
    price: "$20",
    image2: "/image/cart.png",
  },

  {
    slug: "product-5",
    title: "Library stool chair-5",
    image: "/image/wingchairs.webp",
    price: "$20",
    image2: "/image/cart.png",
  },
  {
    slug: "product-6",
    title: "Library stool chair-6",
    image: "/image/deskchair.jpeg",
    price: "$20",
    image2: "/image/cart.png",
  },
  {
    slug: "product-7",
    title: "Library stool chair-7",
    image: "/image/woodenchair.webp",
    price: "$20",
    image2: "/image/cart.png",
  },
 
  {
    slug: "product-8",
    title: "Library stool chair-8",
    image: "/image/orangechair.jpeg",
    price: "$20",
    image2: "/image/cart.png",
  },
  {
    slug: "product-9",
    title: "Library stool chair-9",
    image: "/image/pinkchair.jpeg",
    price: "$20",
    image2: "/image/cart.png",
  },
  {
    slug: "product-10",
    title: "Library stool chair-10",
    image: "/image/whitechair.jpeg",
    price: "$20",
    image2: "/image/cart.png",
  },
  {
    slug: "product-11",
    title: "Library stool chair-11",
    image: "/image/wingchairs.webp",
    price: "$20",
    image2: "/image/cart.png",
  },
  {
   slug: "product-12",
   title: "Library stool chair-12",
   image: "/image/gray.webp",
   price: "$20",
   image2: "/image/cart.png",
 },
];
export default function Product() {

  const obj = useContext(CartContext)
  console.log(obj)
  return (
    <div>
      <div className=" text-bold text-xl sm:text-2xl mt-10 ml-6 lg:text-3xl">
        <h1>
          <b>All Products</b>
        </h1>
      </div>
      <div className="featured flex flex-wrap gap-6 items-center mt-[20px] mx-6 place-items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {productData.map((product) => (
      
          <div key={product.slug} >
             <Link href={`/productData/${product.slug}`}><img className="rounded-xl w-[240px] mt-6" src={product.image}></img></Link>
            <div className="flex">
              <div className="w-[80%] mt-4">
                <h1>{product.title}</h1>
                <h2 className="text-bold   mt-1">
                  <b>{product.price}</b>
                </h2>
              </div>

              <div className="w-[20%]">
                <img
                  className="sm:mt-1 mt-6 sm:h-14  bg-gray-200 m-1 hover:bg-blue-500"
                  src={product.image2} onClick={()=>obj.add({title:product.title,image:product.image,  price: product.price})}
                ></img>
              </div>
            
          </div></div>
        ))}
      </div>

      <div className="bg-gray-200 lg:h-[600px] mt-[160px] text-center">
        <br></br>
        <h1 className="text-bold text-xl lg:text-3xl mt-10 lg:mt-[80px]">
          <b>Or Subscribe To The Newsletter</b>
        </h1>
        <input
          className="bg-gray-200 underline mt-[20px] lg:mt-[50px] text-sm lg:text-xl"
          type="text"
          placeholder="Email Address...              "
        ></input>
        <button className="ml-8 text-gray-900 ">
          <u>SUBMIT</u>
        </button>
        <h1 className="text-bold text-xl lg:text-3xl  mt-4">
          <b>Follow Products And Discounts On Instagram</b>
        </h1>

        <div className="flex gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mx-4  lg:grid-cols-6  place-items-center my-8">
          <img
            className="h-[160px] w-[160px]"
            src="/image/pinkchair.jpeg"
          ></img>
          <img
            className="h-[160px] w-[160px]"
            src="/image/deskchair.jpeg"
          ></img>
          <img
            className="h-[160px] w-[160px]"
            src="/image/woodenchair.webp"
          ></img>
          <img
            className="h-[160px] w-[160px]"
            src="/image/wingchairs.webp"
          ></img>
          <img
            className="h-[160px] w-[160px]"
            src="/image/orangechair.jpeg"
          ></img>
          <img
            className="h-[160px] w-[160px]"
            src="/image/whitechair.jpeg"
          ></img>
        </div>
      </div>
    </div>
  );
}
