"use client"
import CartProvider from "./cartProvider";
import Hero from "./component/Hero";
// import Feature from "./featuredProducts/page";
import Product from "./product/page";

export default function Home() {
  return (
    <div className="flex flex-wrap">
 <Hero />
 <div className="flex flex-wrap place-items-center gap-4 md:gap-10 lg:gap-14 xl:gap-16 mx-10 sm:mx-0 sm:ml-[40px] xl:ml-[250px]">
  <img className="sm:h-8 h-4" src="https://www.pointagram.com/wp-content/uploads/2018/01/zapier-logo.png"></img>
  <img className="sm:h-14 h-7" src="https://iconape.com/wp-content/png_logo_vector/pipedrive.png"></img>
<img className="sm:h-16 h-8" src="https://www.eurotransfer.co.uk/wp-content/uploads/2015/03/CIB-bank-logo-300x300.jpg"></img>
<img className="sm:h-8 h-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3PFIbwd3oXBjWwR2VvZ-WtgadHg5vQ4eKhA&s"></img>
<img className="sm:h-12 h-6" src="https://i.pinimg.com/originals/4f/34/6b/4f346bf4f83de665b5beaf62e5eb546b.gif"></img>

<img className="sm:h-14 h-7" src="https://logovectordl.com/wp-content/uploads/2020/10/pandadoc-logo-vector.png"></img>
<img className="sm:h-14 h-7" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SvaQIIIAOS-kXrAVGev-hU72Nql94d8A_Q&s"></img>
 </div>
 
<CartProvider>
 <Product />
</CartProvider>

 {/* <Feature /> */}
 <img className="my-[200px] xl:my-[280px] items-center w-full" src="/image/main picture.png"></img>
 {/* <Card/> */}
 
    </div>
  );
}