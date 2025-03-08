import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <nav className="w-full bg-gradient-to-r from-green-900 via-teal-800 to-green-900 p-4 backdrop-blur-lg bg-opacity-80 fixed top-0 z-50 mb-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="relative w-10 h-10">
                            <div className="absolute inset-0 bg-white rounded-full animate-pulse"></div>
                            <div className="absolute inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        </div>
                        <span className="text-white font-bold text-xl">WasteMitra</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/community" className="text-gray-200 hover:text-white transition-colors duration-300 relative group">
                            Community
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                        <Link to="/rewards" className="text-gray-200 hover:text-white transition-colors duration-300 relative group">
                            Rewards
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                        <Link to="/waste-vendors" className="text-gray-200 hover:text-white transition-colors duration-300 relative group">
                            Waste-vendors
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>

                        {/* Animated Login/Signup Button */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <button className="relative px-6 py-2 overflow-hidden rounded-full group">
                                <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover:translate-x-0"></span>
                                <span className="relative flex items-center text-white">
                                    Login / Signup
                                    <ChevronDown
                                        className={`ml-1 w-4 h-4 transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`}
                                    />
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
                    <div className="flex flex-col space-y-4">
                        < Link to="/community" className="text-gray-200 hover:text-white transition-colors duration-300">
                            Community
                        </Link >
                        <Link to="/rewards" className="text-gray-200 hover:text-white transition-colors duration-300">
                            Rewards
                        </Link >
                        <Link to="/waste-vendors" className="text-gray-200 hover:text-white transition-colors duration-300">
                            Waste-vendors
                        </Link >
                        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity duration-300">
                            Login / Signup
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;