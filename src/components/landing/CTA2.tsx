import {Mail,  PlayCircle} from "lucide-react";
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';


const Cta2 = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Set the animation duration in milliseconds
            easing: 'ease-in-out', // You can choose the easing option you prefer
            once: true, // Animation will only run once
        });
    }, []);

    return (
        <div>

            <div className="bg-gray-900 my-16" data-aos="fade-right">
                <section>
                    <div className="relative">
                        <div
                            className="absolute m-auto blur-[160px] max-w-s h-[13rem] top-12 inset-0"
                            style={{
                                background: "linear-gradient(180deg, #7C3AED 0%, rgba(152, 103, 240, 0.984375) 0.01%, rgba(237, 78, 80, 0.2) 100%)"
                            }}
                        ></div>

                        <div className="relative">
                            <div className="custom-screen py-28 relative">
                                <div className="relative z-5 duration-1000 delay-150 opacity-1">
                                    <div className="max-w-2xl mx-auto text-center">
                                        <h1 className="text-5xl mb-4 text-white font-bold"> <span>Simplify, Optimize, and Grow </span> </h1>
                                        <h2 className="text-gray-50 text-2xl font-bold sm:text-2xl mt-2">Seize the Future of Pharmacy Management</h2>
                                        <p className="mt-2 text-gray-300">Discover a smarter way to manage your pharmacy. Automate daily tasks, improve patient care, and focus on what matters most.
                                            Let’s grow together and make a difference in the tech world!</p>
                                    </div>
                                    <div className="flex justify-center font-medium text-md">
                                        <form className="mt-6 flex flex-col items-center sm:flex-row sm:gap-x-3">
                                            <div className="sm:pt-0 pt-3"><a
                                                className="py-2.5 px-4 text-center  duration-150 flex items-center justify-center gap-x-1 h-12 text-white bg-black hover:bg-slate-800 ring-offset-2 ring-blue-600 focus:ring shadow rounded-lg active:bg-gray-900"
                                                href="">

                                                <PlayCircle className="h-5 w-5 text-white" />
                                                {/*<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"*/}
                                                {/*     fill="currentColor"*/}
                                                {/*     viewBox="0 0 24 24">*/}
                                                {/*    <path*/}
                                                {/*        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">*/}
                                                {/*    </path>*/}
                                                {/*</svg>*/}
                                                Start Your Free Trial
                                            </a>
                                            </div>
                                            <div className="sm:pt-0 pt-3"><a
                                                className="py-2.5 px-4 text-center  duration-150 flex items-center justify-center gap-x-1 h-12 text-white bg-[#5865F2] hover:bg-indigo-700 ring-offset-2 ring-blue-600 focus:ring shadow rounded-lg active:bg-indigo-800"
                                                href="">

                                                <Mail className="h-5 w-5 text-white" />


                                                Contact Sales
                                            </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <img src="https://i.ibb.co/8D7rcYv/download.webp" width="2880" height="1358"
                                     decoding="async" data-nimg="1"
                                     className="w-full h-full object-cover m-auto absolute inset-0 pointer-events-none"
                                     loading="lazy" alt="gfh"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Cta2;