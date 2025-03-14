import React, { useState } from 'react';
import TeaSection from './TeaSection';
import CoffeeSection from './coffeeSection';
import photo1 from "../assets/photo1.jpg"
 

const ExtraSection = () => {

    const [showTea, setShowTea] = useState(false);



      
       
           return (
               <div>
                     <div className="flex justify-center mt-24 "> 
           <label
       htmlFor="themeSwitcherTwo"
       className="relative inline-flex cursor-pointer select-none items-center"
       >
       {/* Left Label (Books) */}
       <span className="text-sm font-medium text-dark">
                     Coffee
       </span>
       
       {/* Hidden Checkbox for Toggle */}
       <input
         type="checkbox"
         name="themeSwitcherTwo"
         id="themeSwitcherTwo"
         className="sr-only"
         checked={showTea}
         onChange={() => setShowTea(!showTea)}
       />
       
       {/* Toggle Switch */}
       <span
         className={`mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
           showTea ? "bg-black" : "bg-gray-400"
         }`}
       >
         {/* Moving dot */}
         <span
           className={`h-6 w-6 rounded-full bg-white duration-200 transform ${
             showTea ? "translate-x-[28px]" : "translate-x-0"
           }`}
         ></span>
       </span>
       
       {/* Right Label (My Purchased Books) */}
       <span className="text-sm font-medium text-dark">
         Tea
       </span>
       </label>
       </div>
       
        
       {showTea ? (
            <TeaSection></TeaSection>
          ):<CoffeeSection></CoffeeSection> }



          
<section className="px-3 py-5 max-w-7xl mx-auto bg-neutral-100 lg:py-10">
    <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
            <p className="text-4xl font-bold md:text-7xl text-orange-600">25% OFF</p>
            <p className="text-4xl font-bold md:text-7xl">SUMMER SALE</p>
            <p className="mt-2 text-sm md:text-lg">For limited time only!</p>
            <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">
                Shop Now
            </button>
        </div>
        <div className="order-1 lg:order-2">
            <img
                className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
                src={photo1}
                alt="Summer Sale"
            />
        </div>
    </div>
</section>
        </div>

    
    



    );
};

export default ExtraSection;