import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import logo from '../assets/logo3-removebg-preview.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="px-4 bg-gradient-to-r from-[#1A120B] to-[#3C2A21] text-white text-bold max-w-screen sm:px-6 sticky top-0 z-50">
            <div className="relative p-3">
                <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                    <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <Link to="/">
                                <span className="sr-only">Coffee Shop</span>
                                <img
                                    className="w-auto h-10 sm:h-10"
                                    src={logo}
                                    loading="lazy"
                                    width="202"
                                    height="60"
                                    alt="Coffee Shop Logo"
                                />
                            </Link>
                            <div className="flex items-center -mr-2 md:hidden">
                                <button
                                    onClick={toggleMenu}
                                    className="inline-flex items-center justify-center p-2 text-white rounded-md hover:bg-[#5D4037] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    type="button"
                                    aria-expanded={isMenuOpen ? "true" : "false"}
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
                        <Link to='/' className="hover:text-[#D7CCC8] transition-colors">Home</Link>
                        {user && (
                            <div className="flex space-x-8">
                                <Link className='hover:text-[#D7CCC8] transition-colors' to='/addCoffee'>Add Coffee</Link>
                                <Link className='hover:text-[#D7CCC8] transition-colors' to='/users'>Users</Link>
                            </div>
                        )}
                        <Link to='/contact' className="hover:text-[#D7CCC8] transition-colors">Contact Us</Link>
                    </div>
                    <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                        <div className="inline-flex items-center space-x-4">
                            {user && user?.email ? (
                                <div className='flex items-center space-x-4'>
                                    <div className='flex items-center space-x-2'>
                                        {user.photoURL && (
                                            <img src={user.photoURL}
                                                className='w-8 h-8 rounded-full border-2 border-[#D7CCC8]' 
                                                alt="user" />
                                        )}
                                        <h1 className='font-bold'>{user.displayName}</h1>
                                    </div>
                                    <button 
                                        onClick={logOut} 
                                        className='px-4 py-2 bg-[#D7CCC8] text-[#3C2A21] rounded-full font-bold hover:bg-[#BCAAA4] transition-colors shadow-md'
                                    >
                                        Log out
                                    </button>
                                </div>
                            ) : (
                                <div className="flex items-center space-x-3">
                                    <Link to="login">
                                        <button className='px-4 py-2 bg-[#D7CCC8] text-[#3C2A21] rounded-full font-bold hover:bg-[#BCAAA4] transition-colors shadow-md'>
                                            Login
                                        </button>
                                    </Link>
                                    <Link to="signup">
                                        <button className='px-4 py-2 bg-[#3C2A21] text-white border-2 border-[#D7CCC8] rounded-full font-bold hover:bg-[#5D4037] transition-colors shadow-md'>
                                            Sign Up
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
                
                {/* Mobile menu, show/hide based on menu state */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-[#3C2A21] shadow-lg rounded-b-lg z-50">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link 
                                to="/" 
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#5D4037] hover:text-white"
                                onClick={toggleMenu}
                            >
                                Home
                            </Link>
                            {user && (
                                <>
                                    <Link 
                                        to="/addCoffee" 
                                        className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#5D4037] hover:text-white"
                                        onClick={toggleMenu}
                                    >
                                        Add Coffee
                                    </Link>
                                    <Link 
                                        to="/users" 
                                        className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#5D4037] hover:text-white"
                                        onClick={toggleMenu}
                                    >
                                        Users
                                    </Link>
                                </>
                            )}
                            <Link 
                                to="/contact" 
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#5D4037] hover:text-white"
                                onClick={toggleMenu}
                            >
                                Contact Us
                            </Link>
                            
                            <div className="pt-4 pb-3 border-t border-[#5D4037]">
                                {user && user?.email ? (
                                    <div className="flex items-center px-3">
                                        {user.photoURL && (
                                            <div className="flex-shrink-0">
                                                <img 
                                                    className="h-10 w-10 rounded-full border-2 border-[#D7CCC8]" 
                                                    src={user.photoURL} 
                                                    alt="User profile" 
                                                />
                                            </div>
                                        )}
                                        <div className="ml-3">
                                            <div className="text-base font-medium">{user.displayName}</div>
                                            <div className="text-sm font-medium text-gray-300">{user.email}</div>
                                        </div>
                                        <button
                                            onClick={() => {
                                                logOut();
                                                toggleMenu();
                                            }}
                                            className="ml-auto px-3 py-1 bg-[#D7CCC8] text-[#3C2A21] rounded-full font-bold hover:bg-[#BCAAA4] transition-colors shadow-md"
                                        >
                                            Log out
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex flex-col space-y-2 px-3">
                                        <Link 
                                            to="/login" 
                                            className="block w-full"
                                            onClick={toggleMenu}
                                        >
                                            <button className='w-full px-4 py-2 bg-[#D7CCC8] text-[#3C2A21] rounded-full font-bold hover:bg-[#BCAAA4] transition-colors shadow-md'>
                                                Login
                                            </button>
                                        </Link>
                                        <Link 
                                            to="/signup" 
                                            className="block w-full"
                                            onClick={toggleMenu}
                                        >
                                            <button className='w-full px-4 py-2 bg-[#3C2A21] text-white border-2 border-[#D7CCC8] rounded-full font-bold hover:bg-[#5D4037] transition-colors shadow-md'>
                                                Sign Up
                                            </button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;