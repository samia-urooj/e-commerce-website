"use client"
import { useContext } from "react";
import CartContext from "@/app/context";
import { notFound } from "next/navigation";


const productData = {
    "product-1": {
        image:"/image/whitechair2.jpeg",
        title: "Library Stool Chair-1",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consectetur aspernatur hic eveniet repellendus quae doloribus. Fugiat quisquam incidunt consectetur velit, atque vitae possimus aut magnam esse distinctio ducimus iure!",
        button1:"Add to cart",
        button2:"Shop Now",
        price: "$20",
    },
    "product-2": {
        image:"/image/pinkchair.jpeg",
        title: "Library Stool Chair-2",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consectetur aspernatur hic eveniet repellendus quae doloribus. Fugiat quisquam incidunt consectetur velit, atque vitae possimus aut magnam esse distinctio ducimus iure!",
        button1:"Add to cart",
        button2:"Shop Now",
        price: "$20",
    },
    "product-3": {
        image:"/image/orangechair.jpeg",
        title: "Library Stool Chair-3",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consectetur aspernatur hic eveniet repellendus quae doloribus. Fugiat quisquam incidunt consectetur velit, atque vitae possimus aut magnam esse distinctio ducimus iure!",
        button1:"Add to cart",
        button2:"Shop Now",
        price: "$20",
    },
    "product-4": {
        image:"/image/whitechair.jpeg",
        title: "Library Stool Chair-4",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consectetur aspernatur hic eveniet repellendus quae doloribus. Fugiat quisquam incidunt consectetur velit, atque vitae possimus aut magnam esse distinctio ducimus iure!",
        button1:"Add to cart",
        button2:"Shop Now",
        price: "$20",
    },
    "product-5": {
        image:"/image/wingchairs.webp",
        title: "Library Stool Chair-5",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consectetur aspernatur hic eveniet repellendus quae doloribus. Fugiat quisquam incidunt consectetur velit, atque vitae possimus aut magnam esse distinctio ducimus iure!",
        button1:"Add to cart",
        button2:"Shop Now",
        price: "$20",
    },
    "product-6": {
        image:"/image/deskchair.jpeg",
        title: "Library Stool Chair-6",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consectetur aspernatur hic eveniet repellendus quae doloribus. Fugiat quisquam incidunt consectetur velit, atque vitae possimus aut magnam esse distinctio ducimus iure!",
        button1:"Add to cart",
        button2:"Shop Now",
        price: "$20",
    },
    "product-7": {
        image:"/image/woodenchair.webp",
        title: "Library Stool Chair-7",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consectetur aspernatur hic eveniet repellendus quae doloribus. Fugiat quisquam incidunt consectetur velit, atque vitae possimus aut magnam esse distinctio ducimus iure!",
        button1:"Add to cart",
        button2:"Shop Now",
        price: "$20",
    },
    "product-8": {
        image:"/image/orangechair.jpeg",
        title: "Library Stool Chair-8",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consectetur aspernatur hic eveniet repellendus quae doloribus. Fugiat quisquam incidunt consectetur velit, atque vitae possimus aut magnam esse distinctio ducimus iure!",
        button1:"Add to cart",
        button2:"Shop Now",
        price: "$20",
    },
    "product-9": {
        image:"/image/pinkchair.jpeg",
        title: "Library Stool Chair-9",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consectetur aspernatur hic eveniet repellendus quae doloribus. Fugiat quisquam incidunt consectetur velit, atque vitae possimus aut magnam esse distinctio ducimus iure!",
        button1:"Add to cart",
        button2:"Shop Now",
        price: "$20",
    },
    "product-10": {
        image:"/image/whitechair.jpeg",
        title: "Library Stool Chair-10",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consectetur aspernatur hic eveniet repellendus quae doloribus. Fugiat quisquam incidunt consectetur velit, atque vitae possimus aut magnam esse distinctio ducimus iure!",
        button1:"Add to cart",
        button2:"Shop Now",
        price: "$20",
    },
    "product-11": {
        image:"/image/wingchairs.webp",
        title: "Library Stool Chair-11",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consectetur aspernatur hic eveniet repellendus quae doloribus. Fugiat quisquam incidunt consectetur velit, atque vitae possimus aut magnam esse distinctio ducimus iure!",
        button1:"Add to cart",
        button2:"Shop Now",
        price: "$20",
    },
    "product-12": {
        image:"/image/gray.webp",
        title: "Library Stool Chair-12",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consectetur aspernatur hic eveniet repellendus quae doloribus. Fugiat quisquam incidunt consectetur velit, atque vitae possimus aut magnam esse distinctio ducimus iure!",
        button1:"Add to cart",
        button2:"Shop Now",
        price: "$20",
    },


}

export default function ProductData ({params}:{params : {slug:string } }){
    const product = productData[params.slug];
    const obj = useContext(CartContext);
    console.log(obj)

    if (!product) {
        return notFound();
    }

    return(
        <div className="text-center p-4 items-center justify-center">
        
            <img src={product.image}  className="mx-auto my-6 h-[300px] rounded-xl"></img>
            <h1 className="font-serif font-bold text-xl mb-3">{product.title}</h1>
            <p className="mx-auto mb-2">{product.desc}</p>
            <button className="mx-3 bg-sky-400 hover:bg-sky-200 rounded-2xl h-8 w-[100px]" onClick={() => {
    if (obj?.add) {
      obj.add({ title: product.title, image: product.image, price: product.price });
    } else {
      console.error("add function is not defined in CartContext");
    }
  }} >{product.button1}</button>
            <button className="mx-3 bg-sky-400 hover:bg-sky-200 rounded-2xl h-8 w-[100px]">{product.button2}</button>
        </div>
    )
}
     
