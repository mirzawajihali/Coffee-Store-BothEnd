import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from './Header';
import DisplayCoffee from './displayCoffee';
import ExtraSection from './ExtraSection';
import logo from "../assets/logo3.jpg"

const Home = () => {
    const coffee =useLoaderData();
    return (
        <div>
            <Header></Header>
            <DisplayCoffee coffee={coffee}></DisplayCoffee>
            <ExtraSection></ExtraSection>

            <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
  <div>
    <a
      title="Pay me"
      href="https://www.facebook.com/mirzawajih.ali"
      target="_blank"
      className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
    >
      <img
        className="object-cover object-center w-full h-full rounded-full"
        src={logo}
        alt="Buy me a pizza"
      />
    </a>
  </div>
</div>
           
    
        </div>
    );
};

export default Home;