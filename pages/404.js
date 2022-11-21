import React from "react";
import Link from "next/link";
import Spinner from "../components/Spinner"

const Error12 = () => {
    return (
        <div className="bg-gray-800 h-screen">
            <div className="flex items-center justify-center py-12">
                <div className="bg-white border rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
                    <div className="flex flex-col items-center py-16 ">
                        <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">OOPS! </h1>
                        <Spinner props={"Error"}/>
                        <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">No signal here! we cannot find the page you are looking for </p>
                        <button className="mx-4 h-10 w-44 border rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800"><Link href="/">Go to Home Page</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error12;
