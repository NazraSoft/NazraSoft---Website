import React from 'react'

const Hero = () => {
  return (
    <>
<div className="flex flex-col justify-between md:flex-row md:px-12 lg:px-20 p-4 dark:bg-gray-800 transition duration-500">
  <div className="text-container md:mt-10 md:w-1/2">
    {/* <p className="text-black bg-gray-200 dark:bg-gray-700 rounded-md px-2 py-1 text-sm inline-block dark:text-white my-4">
      <span className="bg-blue-500 px-2 py-1/2 rounded-md text-white">Pro</span> comes with */}
      {/* <svg viewBox="0 0 128 128" className="h-5 w-5 inline-block">
        <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path>
        <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path>
        <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path>
        <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
      </svg> */}
      {/* and */}
      {/* <svg viewBox="0 0 128 128" className="h-5 w-5 inline-block">
        <g fill="#61DAFB">
          <circle cx="64" cy="64" r="11.4"></circle>
          <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
        </g>
      </svg> */}
      {/* support */}
    {/* </p> */}
    <h1 className="text-2xl md:text-4xl text-black font-bold dark:text-white tracking-normal leading-10"><span className="text-tmk-blue">Handcrafted, professional </span>Website and App for your Business</h1>

    <h2 className="text-gray-700 text-lg font-light dark:text-white mt-8">
      Get beautiful, responsive, professionally developed Website and Apps.

      <span className="dark:text-white text-black font-semibold">quicker</span>
      . Worry less about responsive and beautiful Design, focus more on growing your business faster.
    </h2>

    <div className="flex mt-6 md:flex-row items-baseline space-x-4">
      <div className="flex space-x-2">
        <img src="https://avatars.githubusercontent.com/u/75849689?v=4" className="W-16 h-16 rounded-full ml-2"/>
        <img src="https://avatars.githubusercontent.com/u/77575489?v=4" className="W-16 h-16 rounded-full"/>
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEwK5a7V2nJxA/profile-displayphoto-shrink_400_400/0/1651919754622?e=1672876800&v=beta&t=y1JBTedkW3nZN2HxUU6h_MZgAl0nCNLaf7KBumYEmXY" className="W-16 h-16 rounded-full"/>
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGJ6bfiUFMFOg/profile-displayphoto-shrink_400_400/0/1667936904182?e=1674691200&v=beta&t=SRHnGM1NffTjtVbGvJRX_iKU5wAybA7WItk0BalwnxU" className="W-16 h-16 rounded-full"/>
      <div className='hidden md:block mt-4'>
        <h3 className="text-gray-700 md:text-lg font-light dark:text-white ml-4 mt-1">
          Created by the founders of
          <a href="https://nazrasoft.vercel.app"> NazraSoft</a>
        </h3>
      </div>
        
      </div>
      
    </div>
<div className='md:hidden mt-6 '>
        <h3 className="text-gray-700 md:text-lg font-light dark:text-white ml-4 mt-6">
          Created by the founders of
          <a href="https://nazrasoft.vercel.app"> NazraSoft</a>
        </h3>
      </div>
    <div className="buttons-container items-center justify-center  flex space-x-2 md:space-x-4 text-white dark:text-white my-12">
      <a href='/about' className="font-semibold rounded-md text-sm md:text-base bg-blue-500 px-8 py-3 mr-1 md:px-8 md:py-4 cursor-pointer transform transition duration-200 hover:shadow-xl hover:-translate-y-1"> <span className="hidden lg:inline-block">Get</span> Quote </a>
      <a href='/pricing' className="font-semibold rounded-md text-sm md:text-base bg-red-500 px-8 py-3 ml-1  md:px-8 md:py-4 cursor-pointer transform transition duration-200 hover:shadow-xl hover:-translate-y-1"> <span className="hidden lg:inline-block">View</span> Pricing </a>
    </div>
  </div>
  <div className="image-container md:w-1/2 md:mt-10 md:-mr-20">
  <img className='h-3/4 w-[90%] rounded-lg bg-black' src='/hero.gif'/>
  </div>
</div>
    </>
  )
}

export default Hero