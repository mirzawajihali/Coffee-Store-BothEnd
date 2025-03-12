import React, { useContext, useState } from 'react';
import photo2 from '../assets/photo2.jpg'
import { AuthContext } from '../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignUp = () => {

        const {createUser, setUser} = useContext(AuthContext);
        const [errorMessage , setErrorMessage] = useState(null);
        const navigate = useNavigate();
        
        const handleSignUp = (event) => {
            event.preventDefault();
            const form = event.target;
            const name = form.Name.value;
            const photo = form.photo.value;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email, password);
            createUser(email, password)
            .then(result => {
            
               
              
               
                const createdAt = result?.user?.metadata.creationTime;
                const newUser = {email, name, photo, createdAt }
                setUser(newUser);

                // save new user data to database 
                fetch("http://localhost:5000/users",{
                    method : 'POST',
                    headers : {
                        'content-type' : 'application/json' 
                    }
                    ,
                    body : JSON.stringify(newUser)
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data);
                    if(data.insertedId){
                         Swal.fire({
                                        title: "Success!",
                                        text: "Congratulations you succesfully registered",
                                        imageUrl: "https://i.pinimg.com/736x/00/af/60/00af601b947285d31fa1ba13d6e89d78.jpg",
                                        imageWidth: 400,
                                        imageHeight: 200,
                                        imageAlt: "Custom image"
                                      }); 
                    }
                })
                form.reset();
                navigate(location?.state ? location.state : '/' );
            })
            .catch(error => {
                console.log(error);
                console.log(error)
                setErrorMessage(error.message)
            })
        }

    return (
        <div className='flex -mt-24 justify-center items-center w-screen h-screen bg-white'>
             <div className="container mx-auto my-4 px-4 lg:px-20">
    <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
      <div className="flex justify-center">
        <h1 className="font-bold uppercase text-center text-4xl">
         Sign Up
        </h1>
      </div>
      <div className="grid grid-cols-1  gap-5 md:grid-cols-1 mt-5">
      <form onSubmit={handleSignUp} className='w-2/3 mx-auto'>
                <div className="relative mt-6">
                    <input
                        type="text"
                        name="Name"
                        id="name"
                        placeholder="name"
                        className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                        autoComplete="NA"
                    />
                    <label
                        htmlFor="email"
                        className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                      Your Name
                    </label>
                </div>
                <div className="relative mt-6">
                    <input
                        type="text"
                        name="photo"
                        id="name"
                        placeholder="Photo"
                        className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                        autoComplete="NA"
                    />
                    <label
                        htmlFor="email"
                        className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                      Photo URL
                    </label>
                </div>
                <div className="relative mt-6">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                        autoComplete="NA"
                    />
                    <label
                        htmlFor="email"
                        className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                        Email Address
                    </label>
                </div>
                <div className="relative mt-6">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    />
                    <label
                        htmlFor="password"
                        className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                        Password
                    </label>
                </div>
                <div className="my-6">
                    <button
                        type="submit"
                        className="w-full font-bold rounded-md bg-gradient-to-r   from-[#1A120B] to-[#3C2A21] px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                    >
                       Sign Up
                    </button>
                </div>
                <p className="text-center text-sm text-gray-500">
                    Already have and account?
                   <Link to='/login'>
                        Sign In
                    </Link>
                    .
                </p>
            </form>
            <p className='text-center font-bold text-red-500'>
    {
      errorMessage && errorMessage
    }
  </p>
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