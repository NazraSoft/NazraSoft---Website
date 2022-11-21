import React from "react";
import Link from "next/link"

export default function TeamBanner() {
    return (
        <div>
            <div className="container mx-auto ">
                <div className="flex flex-col lg:flex-row justify-center items-center py-12 mx-4 md:mx-6 border-t-4 border-red-500 border-b-4">
                    <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 dark:text-white text-center lg:text-left">Meet our professionals</h1>
                        <p className="text-base leading-normal text-gray-600  dark:text-white mt-4 md:w-8/12 lg:w-11/12 text-center lg:text-left">BackBones of the Organization</p>
                        <div className="w-full flex justify-center lg:justify-start">
                            <button className="bg-indigo-700 text-base font-medium text-white rounded text-center py-4 px-9 mt-8 lg:mt-12 hover:bg-indigo-600 leading-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 w-full sm:w-auto"><Link href="/team">View All</Link></button>
                        </div>
                    </div>
                    <div role="list" aria-label="Team members" className="lg:w-1/2 grid grid-cols-3  gap-x-12 gap-y-12 md:gap-x-12 mt-10 lg:mt-0 sm:w-auto w-full">
                        <div role="listitem" className="flex justify-center items-center ">
                            <img src="https://avatars.githubusercontent.com/u/75849689?v=4" className="w-16 h-16 rounded-full" alt="display avatar" role="img" />
                        </div>
                        <div role="listitem" className="flex justify-center items-center ">
                            <img src="https://avatars.githubusercontent.com/u/77575489?v=4" className="w-16 h-16 rounded-full" alt="display avatar" role="img" />
                        </div>
                        <div role="listitem" className="flex justify-center items-center ">
                            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEwK5a7V2nJxA/profile-displayphoto-shrink_400_400/0/1651919754622?e=1672876800&v=beta&t=y1JBTedkW3nZN2HxUU6h_MZgAl0nCNLaf7KBumYEmXY" className="w-16 h-16 rounded-full" alt="display avatar" role="img" />
                        </div>
                        <div role="listitem" className="flex justify-center items-center ">
                            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGJ6bfiUFMFOg/profile-displayphoto-shrink_400_400/0/1667936904182?e=1674691200&v=beta&t=SRHnGM1NffTjtVbGvJRX_iKU5wAybA7WItk0BalwnxU" className="w-16 h-16 rounded-full" alt="display avatar" role="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}