
import { Link } from 'react-router-dom';
import { Pill, Facebook, Twitter, Instagram } from 'lucide-react';
import footerImage from "/footer.jpg";

function Footer() {
    return (
        <footer className="relative bg-gray-900">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{ backgroundImage: `url(${footerImage})` }}
            ></div>

            {/* Content */}
            <div className="relative z-10 text-white max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1">
                        <Link to="/" className="flex items-center">
                            <Pill className="h-8 w-8 text-indigo-400" />
                            <span className="ml-2 text-xl font-bold text-white">PharmaCare</span>
                        </Link>
                        <p className="mt-4 text-gray-400 text-sm">
                            Modern pharmacy management system for streamlined operations and better patient care.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Product</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link to="#features" className="text-base text-gray-300 hover:text-white">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link to="#pricing" className="text-base text-gray-300 hover:text-white">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link to="#demo" className="text-base text-gray-300 hover:text-white">
                                    Request Demo
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link to="/about" className="text-base text-gray-300 hover:text-white">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-base text-gray-300 hover:text-white">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="text-base text-gray-300 hover:text-white">
                                    Privacy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Connect</h3>
                        <div className="flex space-x-6 mt-4">
                            <a href="#" className="text-gray-400 hover:text-gray-300" aria-label="Facebook">
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-300" aria-label="Twitter">
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-300" aria-label="Instagram">
                                <Instagram className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-800 pt-8">
                    <p className="text-base text-gray-400 text-center">
                        © {new Date().getFullYear()} PharmaCare. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
