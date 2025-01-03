import React from 'react';
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <div className="fixed bottom-0 right-0 p-4">
            <button
                className="bg-indigo-800 relative z-20 hover:bg-indigo-500 shadow-xl hover:shadow-indigo-500 transition duration-500 hover:-translate-y-1 hover:shadow-xl text-white rounded-full w-10 h-10 flex items-center justify-center"
                onClick={backToTop}>
                <FaArrowUp/>
            </button>
        </div>
    );
};

export default BackToTop;