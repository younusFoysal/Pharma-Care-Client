
import { useNavigate} from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import GltfViewer from "./GltfViewer.tsx";
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

function Hero() {

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000, // Set the animation duration in milliseconds
            easing: 'ease-in-out', // You can choose the easing option you prefer
            once: true, // Animation will only run once
        });
    }, []);

    return (
        <div className="relative bg-white pt-16 pb-24 overflow-hidden max-w-7xl mx-auto">
            <div className="relative">
                <div className="lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-8 lg:px-8">



                    <div data-aos="fade-right" className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                        <div className="lg:py-24">
                            {/*<h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:text-6xl lg:mt-6">*/}
                            {/*    Modern Pharmacy*/}
                            {/*    <span className="text-indigo-600"> Management</span>*/}
                            {/*</h1>*/}


                            <h1 className="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-7">
                                Manage Your
                                <span
                                    className="relative z-0 after:bg-indigo-500/50 mx-4 after:-z-10 after:absolute md:after:h-6 after:h-4 after:w-full after:bottom-0 after:end-0">
                                    Medicine
                                </span>
                                Shop in a Modern Way.
                            </h1>


                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                Streamline your pharmacy operations with our comprehensive management system.
                                From inventory to sales, we've got you covered.
                            </p>
                            <div className="mt-10 sm:mt-12">



                                <button
                                    onClick={() => navigate("/register")}
                                    className="overflow-hidden inline-flex items-center shadow-xl w-48 p-2 px-6 py-3 hover:scale-110 duration-500  h-12  bg-indigo-600 text-white border-none rounded-md text-xl  font-medium rounded-mdcursor-pointer relative z-8 group"
                                >
                                    Get Started <ArrowRight className="ml-2 h-5 w-5"/>
                                    <span
                                        className="absolute w-48 h-32 -top-9 -left-0 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
                                    ></span>
                                    <span
                                        className="absolute w-48 h-32 -top-9 -left-0 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
                                    ></span>
                                    <span
                                        className="absolute w-48 h-32 -top-9 -left-0 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-90 transition-transform group-hover:duration-1000 duration-500 origin-left"
                                    ></span>
                                    <span
                                        className="group-hover:opacity-100 inline-flex items-center group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-8"
                                    >Explore Now !
                                    </span
                                    >
                                </button>


                                {/*<Link*/}
                                {/*    to="/register"*/}
                                {/*    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"*/}
                                {/*>*/}
                                {/*    Get Started*/}
                                {/*    */}
                                {/*</Link>*/}
                            </div>
                        </div>
                    </div>



                    <div data-aos="fade-left" className="mt-12 lg:m-0">
                        <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">

                            <GltfViewer fileUrl="/meds.glb" scale={[0.5, 0.5, 0.5]} position={[0, -1, 0]}/>
                            {/*<img*/}
                            {/*    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"*/}
                            {/*    src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80"*/}
                            {/*    alt="Pharmacy Management Dashboard"*/}
                            {/*/>*/}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Hero;