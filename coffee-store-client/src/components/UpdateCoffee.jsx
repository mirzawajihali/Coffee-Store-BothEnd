import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from './Navbar';
import Swal from 'sweetalert2';




const UpdateCoffee = () => {

    const coffee = useLoaderData();
    


    const {name, quantity, price,photo, taste, category, details, _id} = coffee;

    const handleUpdateCoffee=event =>{
       
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const price = form.price.value;
        const photo = form.photo.value;

        const updatedCoffee={
            name,
            quantity,
            price,
            taste,
            category,
            details,
            photo
        }
        console.log(updatedCoffee)

        fetch(`https://coffee-store-server-one-rho.vercel.app/coffee/${_id}`,{
            method: 'PUT',    
            headers: {
                'content-type': 'application/json'
            },            
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())    
            .then(data => {
                console.log("hello")
                 if(data.modifiedCount > 0){
                    
                               
                                Swal.fire({
                                  title: "Success!",
                                  text: "Congratulations you succesfully updated a coffee",
                                  imageUrl: "https://i.pinimg.com/736x/00/af/60/00af601b947285d31fa1ba13d6e89d78.jpg",
                                  imageWidth: 400,
                                  imageHeight: 200,
                                  imageAlt: "Custom image"
                                }); }
            })
            }
    

    return (
        <div>
      
         <div className="bg-[#dfd9c5] border border-4 rounded-lg shadow relative m-10">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold">
                Update Coffee : {name}
            </h3>
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
            </button>
        </div>
    
        <div className="p-6 space-y-6">
            <form onSubmit={handleUpdateCoffee}>
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">Coffee Name</label>
                        <input type="text" name="name" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder='Name' defaultValue={name} required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">Coffee Category</label>
                        <input type="text" name="category" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" defaultValue={category} placeholder="Enter Category" required />
                    </div>
                
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">Quantity</label>
                        <input type="text" name="quantity" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" defaultValue={quantity} placeholder="Quantity" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="" className="text-sm font-medium text-gray-900 block mb-2"> Taste</label>
                        <input type="text" name="taste" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"defaultValue={taste} placeholder="Enter Coffee Taste" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2">Photo URL</label>
                        <input type="text" name="photo" id="brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" defaultValue={photo} placeholder="URL" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                        <input type="number" name="price" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" defaultValue={price} placeholder="$2300" required />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="product-details" className="text-sm font-medium text-gray-900 block mb-2">Product Details</label>
                        <textarea id="product-details" name='details' rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" defaultValue={details} placeholder="Details"></textarea>
                    </div>
                </div>
                <div className="py-6 border-t border-gray-200 rounded-b">
           <input type="submit" value="Update Coffee" className="btn bg-[#6F4E37] text-white btn-block" />
        </div>
            </form>
        </div>
    
     
    </div>
       </div>
    );
};

export default UpdateCoffee;