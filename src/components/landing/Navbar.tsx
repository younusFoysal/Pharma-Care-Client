import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Pill } from 'lucide-react';
import {useAuth} from "../../context/AuthContext.tsx";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useAuth();

    return (
        <nav className="bg-white shadow-sm fixed w-full z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <Pill className="h-8 w-8 text-indigo-600"/>


                            <h1 className="text-3xl/tight sm:text-4xl/tight lg:text-3xl/tight font-semibold ml-2">
                                PharmaCare
                            </h1>

                        </Link>
                    </div>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
                        <Link to="#services" className="text-gray-600 hover:text-gray-900">Services</Link>
                        <Link to="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>

                        {
                            user ? <>
                                <Link
                                    to="/dashboard"
                                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 hover:shadow-xl duration-500"
                                >
                                    Dashboard
                                </Link>
                            </> : <>
                                <Link to="/login" className="text-indigo-600 hover:text-indigo-500">Login</Link>
                                <Link
                                    to="/register"
                                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 hover:shadow-xl duration-500"
                                >
                                     Get Started
                                </Link>
                            </>
                        }

                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-400 hover:text-gray-500 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden py-4">
                        <div className="flex flex-col space-y-4">
                            <Link to="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
                            <Link to="#services" className="text-gray-600 hover:text-gray-900">Services</Link>
                            <Link to="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>

                            {
                                user ? <>
                                    <Link
                                        to="/dashboard"
                                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 hover:shadow-xl duration-500"
                                    >
                                        Dashboard
                                    </Link>
                                </> : <>
                                    <Link to="/login" className="text-indigo-600 hover:text-indigo-500">Login</Link>
                                    <Link
                                        to="/register"
                                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 hover:shadow-xl duration-500"
                                    >
                                        Get Started
                                    </Link>
                                </>
                            }

                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;