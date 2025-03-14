import React from 'react';

const TeaSection = () => {
    return (
        <div>
             <section className="mb-24 flex gap-10 flex-col  lg:flex-row-reverse lg:p-24 justify-center">
                <div className="flex-1 gap-8 grid grid-cols-1 md:grid-cols-2">
                    <div className="rounded-xl bg-gradient-to-r bg-gradient-to-r from-[#D7CCC8] to-[#BCAAA4] h-36"></div>
                    <div className="rounded-xl row-span-2 bg-gradient-to-r bg-gradient-to-r from-[#D7CCC8] to-[#BCAAA4] flex justify-center px-8 py-12">
                        <img className="" src="https://i.ibb.co.com/QFFP2P7h/tea-3.png" alt="Fresh Tea 1" />
                    </div>
                    <div className="rounded-xl row-span-2 bg-gradient-to-r from-[#F4F4F4] to-gray-200 flex justify-center px-8 py-12">
                        <img className="" src="https://i.ibb.co.com/BHbjHMys/tea-1.png" alt="Fresh Tea 2" />
                    </div>
                    <div className="rounded-xl bg-gradient-to-r from-[#F4F4F4] to-gray-200 h-36"></div>
                </div>
            
                <div className="flex-1">
                    <h1 className="text-6xl font-extrabold mb-10">
                        Great Tea, <br /> Freshly Presented
                    </h1>
                    <p>
                        The meaning of gong cha is chanese is to provide the best tea to emperor from all possessions. It represents the highest quality and self expectation. Establishing in 2006, Gong cha had been deeply appreciated by its customers because of good words of mouth and unique customized service originated from Taiwan.
                    </p>
            
                    <h3 className="text-xl font-bold mt-8">Unique Taste</h3>
                    <p>A Unique and different style from other teapots gives a luxurious and minimalist impression</p>
            
                    <h3 className="text-xl font-bold mt-8">Premium Quality</h3>
                    <p>Premium Quality that makes tea more elegant and more durable when you use it.</p>
                </div>
            </section>
            
           
        </div>
    );
};

export default TeaSection;