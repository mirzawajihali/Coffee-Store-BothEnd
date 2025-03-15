import React from 'react';

const FeatureSection = () => {
    return (
        <section className="py-16 bg-white text-[#3C2A21]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#3C2A21]">Why Choose Our Coffee</h2>
                    <div className="w-24 h-1 bg-[#D7CCC8] mx-auto"></div>
                    <p className="mt-6 text-lg text-[#5D4037] max-w-2xl mx-auto">
                        Experience the perfect blend of flavor, quality, and craftsmanship in every cup
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature Card 1 */}
                    <div className="bg-[#F5F5F5] rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-[#D7CCC8]">
                        <div className="w-16 h-16 bg-[#3C2A21] rounded-full flex items-center justify-center mb-6 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-center text-[#3C2A21]">Premium Quality</h3>
                        <p className="text-[#5D4037] text-center">
                            We source only the finest coffee beans from sustainable farms around the world, ensuring exceptional quality in every cup.
                        </p>
                    </div>

                    {/* Feature Card 2 */}
                    <div className="bg-[#F5F5F5] rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-[#D7CCC8]">
                        <div className="w-16 h-16 bg-[#3C2A21] rounded-full flex items-center justify-center mb-6 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-center text-[#3C2A21]">Unique Flavors</h3>
                        <p className="text-[#5D4037] text-center">
                            Our master roasters craft unique flavor profiles that bring out the distinctive character of each coffee origin.
                        </p>
                    </div>

                    {/* Feature Card 3 */}
                    <div className="bg-[#F5F5F5] rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-[#D7CCC8]">
                        <div className="w-16 h-16 bg-[#3C2A21] rounded-full flex items-center justify-center mb-6 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-center text-[#3C2A21]">Fresh Roasted</h3>
                        <p className="text-[#5D4037] text-center">
                            We roast in small batches to ensure freshness, delivering coffee at the peak of flavor within days of roasting.
                        </p>
                    </div>
                </div>

                {/* Testimonial Section */}
                <div className="mt-20 bg-[#F5F5F5] rounded-2xl p-8 md:p-12 border border-[#D7CCC8]">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/3 mb-8 md:mb-0">
                            <div className="relative">
                                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto border-4 border-[#3C2A21]">
                                    <img 
                                        src="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1037&q=80" 
                                        alt="Coffee Expert" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -right-4 bg-[#3C2A21] text-white rounded-full w-16 h-16 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/3 md:pl-12">
                            <svg className="h-12 w-12 text-[#3C2A21] mb-6 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                            </svg>
                            <p className="text-xl italic mb-6 text-[#5D4037]">
                                "Our coffee shop has transformed since we started sourcing from this amazing supplier. The quality and consistency of their beans have made us the most popular coffee destination in town."
                            </p>
                            <div>
                                <h4 className="font-bold text-lg text-[#3C2A21]">Sarah Johnson</h4>
                                <p className="text-[#5D4037]">Master Barista, The Coffee Gallery</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#3C2A21]">Ready to Experience the Difference?</h3>
                    <button className="px-8 py-3 bg-[#3C2A21] text-white rounded-full font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        Order Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection; 