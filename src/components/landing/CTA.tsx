

const Cta = () => {
    return (
        <div>
            <div className="relative overflow-hidden border-b w-full mb-24 " data-aos="zoom-out-down">
                <div className="px-6 py-8 sm:px-6 sm:py-20">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-base font-semibold text-indigo-400  tracking-wide uppercase">
                            Ready to Transform Your Pharmacy?
                        </h2>
                        <p
                            className="mt-1 text-4xl font-extrabold text-gray-900  sm:text-5xl sm:tracking-tight lg:text-6xl">
                            Take the Next Step
                            <span className="px-2 py-1 relative inline-block"><svg
                                className="stroke-current bottom-0 absolute text-indigo-300 -translate-x-2"
                                viewBox="0 0 410 18" xmlns="http://www.w3.org/2000/svg"><path
                                d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602" strokeWidth="12" fill="none"
                                fillRule="evenodd" strokeLinecap="round"></path></svg><span className="relative">

                                 with PharmaCare

                            </span></span>
                        </p>
                        <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500 ">
                            Experience seamless pharmacy management with tools designed to save time,
                            reduce errors, and boost patient satisfaction. Join a growing community of
                            pharmacies optimizing their operations today.
                        </p>
                        <a href="#"
                           className="inline-block px-6 py-3 mt-8 bg-black  text-white font-semibold rounded hover:bg-indigo-700 ">
                            Get Started Now
                        </a>
                        <a href="#"
                           className="inline-block px-6 ml-2 py-3 mt-8 bg-indigo-600  text-white font-semibold rounded hover:bg-indigo-700 ">
                            Request a Demo
                        </a>
                    </div>
                </div>
                <svg viewBox="0 0 1024 1024"
                     className="absolute left-1/2 z-5 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                     aria-hidden="true">
                    <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                            fillOpacity="0.7">
                    </circle>
                    <defs>
                        <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                            <stop stopColor="#3b82f6"></stop>
                            <stop offset="1" stopColor="#1d4ed8"></stop>
                        </radialGradient>
                    </defs>
                </svg>
            </div>

        </div>
    );
};

export default Cta;