import React from 'react';
import photo2 from '../assets/photo2.jpg'

const SignUp = () => {
    return (
        <div className='flex -mt-24 justify-center items-center w-screen h-screen bg-white'>
             <div className="container mx-auto my-4 px-4 lg:px-20">
    <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
      <div className="flex">
        <h1 className="font-bold uppercase text-5xl">
          Send us a <br /> message
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="First Name*"
        />
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Last Name*"
        />
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="Email*"
        />
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Phone*"
        />
      </div>
      <div className="my-4">
        <textarea
          placeholder="Message*"
          className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
      <div className="my-2 w-1/2 lg:w-1/4">
        <button
          className="uppercase text-sm font-bold tracking-wide bg-gradient-to-r from-[#1A120B] to-[#3C2A21] text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
        >
          Send Message
        </button>
      </div>
    </div>

    <div className="w-full lg:-mt-104 lg:w-2/6 ml-auto ">
    <img className='w-7/8 rounded-lg' src={photo2} alt="" />
    </div>
  </div>
        </div>
    );
};

export default SignUp;