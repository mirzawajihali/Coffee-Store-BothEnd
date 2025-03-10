import React from 'react';
    import photo1 from "../assets/photo1.jpg"

const ExtraSection = () => {
    return (
        <div>
            <section className="my-24 flex gap-10 flex-col lg:flex-row lg:p-24 justify-center">
    <div className="flex-1 gap-8 grid grid-cols-1 md:grid-cols-2">
        <div className="rounded-xl bg-gradient-to-r bg-gradient-to-r from-[#D7CCC8] to-[#BCAAA4] h-36"></div>
        <div className="rounded-xl row-span-2 bg-gradient-to-r bg-gradient-to-r from-[#D7CCC8] to-[#BCAAA4]+ flex justify-center px-8 py-12">
            <img className="" src="https://i.ibb.co.com/pjvxfWkd/3.png" alt="Fresh Tea 1" />
        </div>
        <div className="rounded-xl row-span-2 bg-gradient-to-r from-[#F4F4F4] to-gray-200 flex justify-center px-8 py-12">
            <img className="" src="https://i.ibb.co.com/Qx83jk5/4.png" alt="Fresh Tea 2" />
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