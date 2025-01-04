
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

const Reviews = () => {
    return (
        <div>


            <section className="pb-12 mx-auto md:pb-20 max-w-7xl" data-aos="zoom-out">

                <div className="py-4 text-center md:py-8">
                    <h4 className="font-bold tracking-wide text-center uppercase text-3xl text-black">What Our Customers Are Saying</h4>
                    <p className="mt-2 tracking-tight text-indigo-900 text:xl md:text-xl">
                        Trusted by Pharmacies Everywhere
                    </p>
                </div>

                <div className="gap-8 space-y-8 md:columns-2 lg:columns-3">

                    <div className="animate-floatSlow p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10 hover:shadow-indigo-200 hover:shadow-lg ">
                        <div className="flex gap-4 items-start">

                            <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/men/12.jpg"
                                 alt="user avatar" width="400" height="400" loading="lazy"/>

                            <div className="flex-1 flex justify-between items-start">
                                <div>
                                    <h6 className="text-lg font-medium text-gray-700">Emily R.</h6>
                                    <p className="text-sm text-gray-500">Pharmacy Manager</p>
                                </div>
                                <a href="https://twitter.com/ravikumar/status/1234567890"
                                   className="text-indigo-500 hover:text-indigo-600 ml-4">
                                    <FaTwitter/>
                                </a>
                            </div>

                        </div>

                        <p className="mt-8">"A Game-Changer for Our Pharmacy!"
                            PharmaCare has streamlined our inventory and sales processes, saving us countless hours.</p>
                    </div>

                    <div
                        className="animate-float p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10 hover:shadow-indigo-200 hover:shadow-lg">
                        <div className="flex gap-4 items-start">

                            <img className="w-12 h-12 rounded-full"
                                 src="https://randomuser.me/api/portraits/women/14.jpg" alt="user avatar" width="200"
                                 height="200" loading="lazy"/>
                            <div className="flex-1 flex justify-between items-start">
                                <div>
                                    <h6 className="text-lg font-medium text-gray-700">James L.</h6>
                                    <p className="text-sm text-gray-500">Business Owner</p>
                                </div>
                                <a href="https://www.instagram.com/p/1234567890"
                                   className="text-indigo-500 hover:text-indigo-600 ml-4">
                                    <FaInstagram/>
                                </a>
                            </div>
                        </div>
                        <p className="mt-8">"The Analytics Are Unbeatable!"
                            With real-time insights, we’ve made data-driven decisions that have significantly boosted our revenue.</p>
                    </div>

                    <div
                        className="animate-float p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10 hover:shadow-indigo-200 hover:shadow-lg">
                        <div className="flex gap-4 items-start">
                            <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/men/18.jpg"
                                 alt="user avatar" width="200" height="200" loading="lazy"/>
                            <div className="flex-1 flex justify-between items-start">
                                <div>
                                    <h6 className="text-lg font-medium text-gray-700">Sophia M.</h6>
                                    <p className="text-sm text-gray-500">Pharmacist</p>
                                </div>
                                <a href="https://www.facebook.com/vijaysingh/posts/1234567890"
                                   className="text-indigo-500 hover:text-indigo-600 ml-4">
                                    <FaFacebook/>
                                </a>
                            </div>
                        </div>
                        <p className="mt-8">"Customer Management Made Easy."
                            Tracking prescriptions and customer history has never been this simple and efficient.</p>
                    </div>

                    <div
                        className="animate-floatSlow p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10 hover:shadow-indigo-200 hover:shadow-lg">
                        <div className="flex gap-4 items-start">
                            <img className="w-12 h-12 rounded-full"
                                 src="https://randomuser.me/api/portraits/women/2.jpg" alt="user avatar" width="200"
                                 height="200" loading="lazy"/>
                            <div className="flex-1 flex justify-between items-start">
                                <div>
                                    <h6 className="text-lg font-medium text-gray-700">David P.</h6>
                                    <p className="text-sm text-gray-500">Operations Lead</p>
                                </div>
                                <a href="https://twitter.com/priyapatel/status/1234567890"
                                   className="text-indigo-500 hover:text-indigo-600 ml-4">
                                    <FaTwitter/>
                                </a>
                            </div>
                        </div>
                        <p className="mt-8">"Reliable and User-Friendly."
                            The interface is intuitive, and the features are exactly what a modern pharmacy needs.</p>
                    </div>

                    <div
                        className="animate-floatSlow p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10 hover:shadow-indigo-200 hover:shadow-lg">
                        <div className="flex gap-4 items-start">
                            <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/men/62.jpg"
                                 alt="user avatar" width="200" height="200" loading="lazy"/>
                            <div className="flex-1 flex justify-between items-start">
                                <div>
                                    <h6 className="text-lg font-medium text-gray-700"> Olivia T.</h6>
                                    <p className="text-sm text-gray-500">Chain Pharmacy Owner</p>
                                </div>
                                <a href="https://www.instagram.com/p/1234567890"
                                   className="text-indigo-500 hover:text-indigo-600 ml-4">
                                    <FaInstagram/>
                                </a>
                            </div>
                        </div>
                        <p className="mt-8">"Top-Notch Support and Features."
                            PharmaCare’s team has been incredibly helpful. The system is robust and easy to scale.</p>
                    </div>

                    <div
                        className="animate-float p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10 hover:shadow-indigo-200 hover:shadow-lg">
                        <div className="flex gap-4 items-start">
                            <img className="w-12 h-12 rounded-full"
                                 src="https://randomuser.me/api/portraits/women/19.jpg" alt="user avatar" width="400"
                                 height="400" loading="lazy"/>
                            <div className="flex-1 flex justify-between items-start">
                                <div>
                                    <h6 className="text-lg font-medium text-gray-700">Ethan K.</h6>
                                    <p className="text-sm text-gray-500">Independent Pharmacist</p>
                                </div>
                                <a href="https://www.facebook.com/sneharao/posts/1234567890"
                                   className="text-indigo-500 hover:text-indigo-600 ml-4">
                                    <FaFacebook/>
                                </a>
                            </div>
                        </div>
                        <p className="mt-8">"A Complete Pharmacy Solution."
                            From sales to compliance, PharmaCare covers everything we need. Highly recommended!</p>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Reviews;