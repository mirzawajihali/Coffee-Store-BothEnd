import React from 'react';
import background from '../assets/background.jpg'

const Header = () => {
    return (
        <div className='-mt-24'>
            <div className="relative bg-gradient-to-r from-[#D7CCC8] to-[#BCAAA4]  h-screen text-white overflow-hidden">
  <div className="absolute inset-0">
    <img
      src={background}
      alt="Background Image"
      className="object-cover object-center w-full h-full"
    />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>

  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 className="text-5xl font-bold leading-tight mb-4">
      Welcome to Our Awesome Website
    </h1>
    <p className="text-lg text-gray-300 mb-8">
      Discover amazing features and services that await you.
    </p>
    <a
      href="#"
      className="bg-gradient-to-r from-[#D7CCC8] to-[#ffffff]  text-gray-900 hover:bg-grey-400 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    >
      Get Started
    </a>
  </div>
</div>
        </div>
    );
};

export default Header;