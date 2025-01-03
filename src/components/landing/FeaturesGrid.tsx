
import {BarChart2, FileText, Package, Shield, ShoppingCart, User} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";



const FeaturesGrid = () => {

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
                className="mx-auto max-w-7xl mb-24 rounded-3xl px-5 py-16 md:px-10 md:py-16 bg-gradient-to-b from-indigo-50 via-white to-indigo-100 " data-aos="fade-up">
                <div className="mx-auto w-full max-w-3xl text-center">
                    <h2 className="text-4xl font-extrabold text-indigo-900  md:text-5xl">Revolutionize Your Pharmacy Operations</h2>
                    <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
                        <p className="text-lg text-indigo-700 ">
                            Effortless Inventory, Smarter Sales, and Personalized Care all in One Powerful Platform.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:gap-12">



                    <div className="relative mb-8 flex flex-col rounded-2xl border border-indigo-300 bg-white p-8 shadow-lg group  lg:mb-4 hover:scale-105 duration-500" >
                        <div className="absolute -top-8 right-4 flex h-16 w-16 items-center justify-center rounded-full border border-indigo-400 bg-indigo-100 shadow-md group-hover:shadow-2xl  lg:right-8">
                            <Package className="h-10 w-10 text-indigo-600" />
                        </div>
                        <p className="mb-4 text-xl font-semibold text-indigo-900 ">Smart Inventory Tracking</p>
                        <p className="text-indigo-700 ">
                            Stay on top of your stock with real-time tracking, low-stock alerts, and expiry date monitoring to ensure uninterrupted operations.
                        </p>
                    </div>



                    <div className="relative mb-8 flex flex-col rounded-2xl border border-indigo-300 bg-white p-8 shadow-lg group  lg:mb-4 hover:scale-105 duration-500" >
                        <div
                            className="absolute -top-8 right-4 flex h-16 w-16 items-center justify-center rounded-full border border-indigo-400 bg-indigo-100 shadow-md group-hover:shadow-2xl  lg:right-8">
                            <ShoppingCart className="h-10 w-10 text-indigo-600"/>
                        </div>
                        <p className="mb-4 text-xl font-semibold text-indigo-900 ">Streamlined Sales Processing</p>
                        <p className="text-indigo-700 ">
                            Process sales effortlessly with quick invoicing, multiple payment options, and a robust
                            history tracker to keep everything organized.
                        </p>
                    </div>

                    <div className="relative mb-8 flex flex-col rounded-2xl border border-indigo-300 bg-white p-8 shadow-lg group  lg:mb-4 hover:scale-105 duration-500" >
                        <div
                            className="absolute -top-8 right-4 flex h-16 w-16 items-center justify-center rounded-full border border-indigo-400 bg-indigo-100 shadow-md group-hover:shadow-2xl  lg:right-8">
                            <FileText className="h-10 w-10 text-indigo-600"/>
                        </div>
                        <p className="mb-4 text-xl font-semibold text-indigo-900 ">
                            Comprehensive Purchase Management
                        </p>
                        <p className="text-indigo-700 ">
                            Manage suppliers, create purchase orders, and track incoming stock seamlessly—all in one
                            intuitive platform.
                        </p>
                    </div>

                    <div className="relative mb-8 flex flex-col rounded-2xl border border-indigo-300 bg-white p-8 shadow-lg group  lg:mb-4 hover:scale-105 duration-500" >
                        <div
                            className="absolute -top-8 right-4 flex h-16 w-16 items-center justify-center rounded-full border border-indigo-400 bg-indigo-100 shadow-md group-hover:shadow-2xl  lg:right-8">
                            <User className="h-10 w-10 text-indigo-600"/>
                        </div>
                        <p className="mb-4 text-xl font-semibold text-indigo-900 ">
                            Personalized Customer Care
                        </p>
                        <p className="text-indigo-700 ">
                            Build lasting relationships with detailed customer profiles, prescription tracking, and
                            purchase history insights.
                        </p>
                    </div>

                    <div className="relative mb-8 flex flex-col rounded-2xl border border-indigo-300 bg-white p-8 shadow-lg group  lg:mb-4 hover:scale-105 duration-500" >
                        <div
                            className="absolute -top-8 right-4 flex h-16 w-16 items-center justify-center rounded-full border border-indigo-400 bg-indigo-100 shadow-md group-hover:shadow-2xl  lg:right-8">
                            <BarChart2 className="h-10 w-10 text-indigo-600"/>
                        </div>
                        <p className="mb-4 text-xl font-semibold text-indigo-900 ">Data-Driven Insights</p>
                        <p className="text-indigo-700 ">
                            Access powerful analytics to monitor sales, track revenue, and make data-backed decisions
                            that drive growth.
                        </p>
                    </div>

                    <div className="relative mb-8 flex flex-col rounded-2xl border border-indigo-300 bg-white p-8 shadow-lg group  lg:mb-4 hover:scale-105 duration-500" >
                        <div
                            className="absolute -top-8 right-4 flex h-16 w-16 items-center justify-center rounded-full border border-indigo-400 bg-indigo-100 shadow-md group-hover:shadow-2xl  lg:right-8">
                            <Shield className="h-10 w-10 text-indigo-600"/>
                        </div>
                        <p className="mb-4 text-xl font-semibold text-indigo-900 ">Secure User Management</p>
                        <p className="text-indigo-700 ">
                            Control access with role-based permissions, monitor activity logs, and safeguard your data
                            with top-tier security protocols.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FeaturesGrid;