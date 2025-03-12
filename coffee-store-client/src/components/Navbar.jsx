import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import logo from '../assets/logo3-removebg-preview.png'

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    

    return (
        <div className="px-4 bg-gradient-to-r from-[#1A120B] to-[#3C2A21] text-white text-bold  max-w-screen sm:px-6">
    <div className="relative p-3 sm:mb-24">
        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                        <span className="sr-only">Company Name</span>
                        <img
                            className="w-auto h-10 sm:h-10"
                            src={logo}
                            loading="lazy"
                            width="202"
                            height="60"
                            alt="Company Logo"
                        />
                    </a>
                    <div className="flex items-center -mr-2 md:hidden">
                        <button
                            className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
                            type="button"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex font-bold md:space-x-10 list-none">
               <Link to='/'>Home</Link>
              {user && <div > <Link className='mr-8' to='/addCoffee'>Add Coffee</Link>
                <Link to='/users'>Users</Link>
                </div>}
               <Link to='/contact'>Contact Us</Link>
               
            </div>
            <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <div className="inline-flex rounded-full  shadow">

                
                    {user && user?.email ?  <div className='flex gap-1 items-center '> <img  src={user.photoURL}
                    className='w-8 h-8 rounded-full' alt="user" /> 
                    <h1 className='font-bold'>{user.displayName}</h1> 
                    </div> :   <p></p>}



                {
                        user && user?.email ? 
                        
                        <button onClick={logOut} className='btn btn-neutral'>Log out</button>

                        : <div>  <button className='  className="inline-flex items-center mx-2 px-4 py-2 text-base text-gray-900 bg-white border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50"'>
                        <Link to="login">Login</Link>
                        </button>
                        <button className='  className="inline-flex items-center px-4 py-2 text-base text-gray-900 bg-white border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50"'>
                        <Link to="signup">SignUp</Link>
                        </button></div> 
                    } 
                  
                   
                   
                 
                       
                   
                </div>
            </div>
        </nav>
    </div>
</div>
    );
};

export default Navbar;