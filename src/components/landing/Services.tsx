
import 'aos/dist/aos.css';
import {useEffect} from "react";
import AOS from "aos";

const Services = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Set the animation duration in milliseconds
            easing: 'ease-in-out', // You can choose the easing option you prefer
            once: true, // Animation will only run once
        });
    }, []);

    return (
        <div>

            <div
                className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-10">

                <div className=" w-full mx-auto text-center" data-aos="fade-down">

                    <h2 className="mb-1 text-4xl font-extrabold leading-tight text-gray-900">Our Services</h2>
                    <p className="mb-12 text-lg text-indigo-700"> Comprehensive Services Tailored for Modern Pharmacies </p>

                </div>


                <div className="w-full">
                    <div className="flex flex-col w-full mb-10 sm:flex-row">

                        <div className="w-full mb-10 sm:mb-0 sm:w-1/2" data-aos="fade-right">
                            <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                <span
                                    className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-600  rounded-lg "></span>
                                <div
                                    className=" group relative h-full p-5 bg-white border-2 border-indigo-600 hover:scale-105 duration-500 transition rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 group-hover:text-xl duration-500">
                                            Prescription Management
                                        </h3>
                                    </div>
                                    <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase"></p>
                                    <p className="mb-2 text-gray-600">
                                        Efficiently handle and store prescriptions with advanced tracking and compliance tools.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2" data-aos="fade-left">
                            <div className="relative h-full ml-0 md:mr-10">
                                <span
                                    className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-600 rounded-lg"></span>
                                <div
                                    className="group relative h-full p-5 bg-white border-2 border-indigo-600 hover:scale-105 duration-500 transition rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 group-hover:text-xl duration-500">24/7 Inventory Monitoring</h3>
                                    </div>
                                    <p className="mt-3 mb-1 text-xs font-medium text-indigo-600  uppercase"></p>
                                    <p className="mb-2 text-gray-600">Keep your stock optimized with round-the-clock tracking and automated reorder alerts.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col w-full mb-5 sm:flex-row">
                        <div className="w-full mb-10 sm:mb-0 sm:w-1/2" data-aos="fade-right">
                            <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                <span
                                    className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-600  rounded-lg"></span>
                                <div
                                    className="group relative h-full p-5 bg-white border-2 border-indigo-600 hover:scale-105 duration-500 transition rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 group-hover:text-xl duration-500">
                                            Integrated Billing Solutions</h3>
                                    </div>
                                    <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase"></p>
                                    <p className="mb-2 text-gray-600">Simplify transactions with seamless invoicing, multiple payment methods, and due payment tracking.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mb-10 sm:mb-0 sm:w-1/2" data-aos="fade-up">
                            <div className=" relative h-full ml-0 mr-0 sm:mr-10">
                                <span
                                    className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-600  rounded-lg"></span>
                                <div
                                    className="group relative h-full p-5 bg-white border-2 group-hover border-indigo-600 hover:scale-105 duration-500 transition rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 group-hover:text-xl duration-500">Customer Support Tools</h3>
                                    </div>
                                    <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase"></p>
                                    <p className="mb-2 text-gray-600">Enhance patient care with profiles, medical history tracking, and personalized recommendations.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2" data-aos="fade-left">
                            <div className="relative h-full ml-0 md:mr-10">
                                <span
                                    className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-600  rounded-lg"></span>
                                <div
                                    className="group relative h-full p-5 bg-white border-2 border-indigo-600 hover:scale-105 duration-500 transition rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 group-hover:text-xl duration-500">
                                            Regulatory Compliance</h3>
                                    </div>
                                    <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase"></p>
                                    <p className="mb-2 text-gray-600">Ensure your pharmacy operates within all legal guidelines with built-in compliance features.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Services;