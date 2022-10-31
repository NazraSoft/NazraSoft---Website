import React from 'react'
import Spinner from "./Spinner"
import Image from 'next/image'
import Hero from './Hero'
import {FaMoon,FaSun,FaSearch} from "react-icons/fa"
import {useTheme} from "next-themes";
const Landing = () => {
    const {systemTheme , theme, setTheme} = useTheme ();
    const renderThemeChanger= () => {
  
      const currentTheme = theme === "system" ? systemTheme : theme ;
  
      if(currentTheme ==="dark"){
        return (
          <FaSun className="w-10 h-6 text-yellow-600 border-l-2 border-red-600 " role="button" onClick={() => setTheme('light')} />
        )
      }
      else {
        return (
          <FaMoon className="w-10 h-6 text-gray-900 border-l-2 border-red-600 " role="button" onClick={() => setTheme('dark')} />
        )
      }
   };
  return (
    <div>

    <main className="relative antialiased bg-white dark:bg-[#25292A] z-0 overflow-hidden">
  {/* <!-- Blobs --> */}
  <div className="absolute hidden text-gray-100 md:block -left-40 -top-40 dark:text-gray-600" style={{"z-index": -40}}>
  </div>
  <nav className="flex flex-row items-center justify-between px-4 py-10 md:px-20">
    {/* <!-- Small little logo :) --> */}
    <div className="relative flex flex-row items-center space-x-1">

      <div className="absolute w-6 transform r-2 2h-8 top-1 left-1"><Image width={16} height={16} src='/logo.jpg' layout="responsive" /></div>
      <div><h1 className="pl-5 ml-3 text-2xl italic font-bold text-gray-700 dark:text-gray-50">NazraSoft</h1></div>
      <div>
      {renderThemeChanger()}              
            </div>
    </div>
    <div className="flex flex-row items-center space-x-8">
      <a href="#" className="hidden font-semibold text-gray-500 transition duration-100 md:block hover:underline dark:text-gray-200">Home</a>
      <a href="#" className="hidden font-semibold text-gray-500 transition duration-100 md:block hover:underline dark:text-gray-200">Services</a>
      <a href="#" className="hidden font-semibold text-gray-500 transition duration-100 md:block hover:underline dark:text-gray-200">Plans</a>
      <a href="#" className="hidden font-semibold text-gray-500 transition duration-100 md:block hover:underline dark:text-gray-200">About us</a>
      <div className="hidden font-semibold text-gray-500 transition duration-100 md:block hover:text-green-500 dark:text-gray-200">
        {/* Search BAR */}
        <div  className='hidden bg-black border-black rounded-full shadow-md dark:bg-white lg:block border-1 w-80 h-9 '>
              <div className= 'flex flex-row  focus:border-blue-700 w-[97%] h-[80%] border-1 mx-1 pt-1'>
                 <input className='dark:bg-white flex w-[93%] h-[96%] border-1 bg-black mx-1 p-2' type="search" name="search" placeholder='Search Here' />
                 <FaSearch className='w-5 h-5 mt-1 dark:text-black' />
              </div>
            </div>
      </div>
      <div className="relative px-8 py-2 bg-white border border-gray-800 rounded-3xl dark:border-gray-50 hover:bg-gray-300">
        <a href="#" className="relative font-light text-gray-700 transition duration-100 transform hover:text-green-500 hover:-translate-y-2 hover:-translate-x-1">Login</a>
      </div>
    </div>
  </nav>

  <header className="flex flex-col mx-4 ace-x-2 mgt-4 bpx-4 md:mt-20 md:flex-row md:px-20">
    {/* <!-- Text container --> */}
    <div className="w-full md:w-1/2">
      <h1 className="text-2xl font-bold text-gray-800 md:text-4xl lg:text-6xl dark:text-gray-50">Nazra Software Solution <span className="font-thin tracking-wider"> - Take your Business Online.</span></h1>
      <p className="max-w-xl my-10 font-light text-gray-800 dark:text-gray-200">Most Affordable Service Provider in the Region - Your Need Our Passion</p>
      <div className="relative inline-block px-8 py-2 bg-white border cursor-pointer rounded-3xl hover:bg-gray-300">
     <a href="#" className="relative font-light text-gray-700 transition duration-100 transform hover:text-green-500 hover:-translate-y-2 hover:-translate-x-1 ">Create Account</a>
      </div>
    </div>

    {/* <!-- Image container --> */}
    <div className="hidden w-full md:block md:w-1/2 perspective: 800px;">
      <div className="p-2 overflow-hidden transform bg-white shadow-2xl img-container rounded-xl transform: rotateX(40deg) rotateZ(6deg) rotateY(-10deg);">
        <img className="rounded-lg" src="https://res.cloudinary.com/tailwindmasterkit/image/upload/v1627290155/assets/untitled-design-47png-a821832209.png" alt="img-container" />
      </div>
    </div>
  </header>
  {/* <!-- Companies --> */}
  <section className="flex flex-col items-center justify-between px-20 py-10 mt-20 bg-gray-600 md:flex-row">
    <h1 className="text-2xl font-bold text-gray-50">Companies who trust us</h1>
    <div className="flex flex-row flex-wrap items-center justify-center companies">
      <div className="mx-4 my-4">
        <img src="/c1.jpg" className="h-24 w-28" alt="logo company" />
      </div>
      <div className="mx-4 my-4">
        <img src="https://www.pathshalagyan.com/logo1.jpg" className="h-24 w-28" alt="logo company" />
      </div>
      <div className="mx-4 my-4">
        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1024px-Slack_Technologies_Logo.svg.png" className="h-auto w-28" alt="logo company" /> */}
      </div>
      <div className="mx-4 my-4">
        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/800px-Shopify_logo_2018.svg.png" className="h-auto w-28" alt="logo company" /> */}
      </div>
    </div>
  </section>
  <Hero />
  {/* <section className="pt-20 bg-red-500 dark:bg-gray-700">
    <div className="grid items-center max-w-6xl grid-cols-1 px-8 mx-auto my-2 mt-10 md:grid-cols-2">
      <div>
        <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-50">Payments in <span className="text-[#1a759f]">one click</span> without any hassle</h1>
        <p className="my-8 text-gray-600 dark:text-gray-200">Get additional 40% off on your next referral. Refer a friend and earn money. Conditions apply!</p>
        <div className="relative inline-block px-8 py-2 bg-white border cursor-pointer rounded-3xl">
          <div className="absolute inset-0 px-8 py-2 transform translate-x-1 translate-y-2 border rounded-3xl dark:border-gray-50 z-index: -10"></div>
          <a href="#" className="relative font-bold text-gray-700 transition duration-100 transform hover:text-green-500 hover:-translate-y-2 hover:-translate-x-1 dark:border-gray-50">Refer Now</a>
        </div>
      </div>

      <div className="relative p-2 mt-8 bg-gray-400 rounded-md shadow-2xl md:mt-0">
        <img src="https://svgsilh.com/svg/26432.svg" className="absolute z-10 w-48 h-48 -right-10 opacity-5 -top-10 z-index: 20" />

        <img src="https://res.cloudinary.com/tailwindmasterkit/image/upload/v1627290155/assets/untitled-design-47png-a821832209.png" className="rounded-lg" alt="hero image" />
      </div>
    </div>

    {/* <!-- Masonry with content --> */}
    {/* <div className="mt-8">
      <div className="box-border max-w-6xl mx-auto md:masonry before:box-inherit after:box-inherit">
        <div className="px-8 py-2 my-2 rounded-lg break-inside">
          <img src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1390&q=80" alt="image here" className="rounded-lg" />
        </div>
        <div className="px-8 py-2 my-2 rounded-lg break-inside">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1404&q=80" alt="second image" className="rounded-lg" />
        </div>
        <div className="px-8 py-2 my-2 rounded-lg break-inside">
          <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1640&q=80" alt="fourth Image" className="rounded-lg" />
        </div>

        <div className="px-8 py-2 my-6 rounded-lg break-inside">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" alt="third image" className="rounded-lg" />
        </div>
        <div className="px-8 py-2 my-6 rounded-lg break-inside">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" alt="third image" className="rounded-lg" />
        </div>
        <div className="px-8 py-2 my-6 rounded-lg break-inside">
          <img src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" alt="third image" className="rounded-lg" />
        </div>
      </div>
    </div>
  </section> */}
  {/* <!-- footer --> */}
  {/* <div className="py-6 flex flex-col justify-center sm:py-12 md:-mt-20 dark:bg-[#25292A]">
    <div className="p-4 m-2 h-90 rounded-xl">
      {/* <!-- Menus --> */}
      {/* <div className="justify-around px-10 py-8 md:flex"> */}
        {/* <!-- Left logo + button --> */}

        {/* <!-- Menus --> */}
        {/* <div className="py-5 md:py-0">
          <h4 className="px-2 mb-2 font-bold text-green-500">Explore</h4>
          <ul className="text-gray-600">
            <li className="px-2 py-2 border border-transparent rounded-full cursor-pointer hover:border-purple-300">Free tutorials</li>
            <li className="px-2 py-2 border border-transparent rounded-full cursor-pointer hover:border-purple-300">Payments</li>
            <li className="px-2 py-2 border border-transparent rounded-full cursor-pointer hover:border-purple-300">Referrals</li>
            <li className="px-2 py-2 border border-transparent rounded-full cursor-pointer hover:border-purple-300">Open Source</li>
          </ul>
        </div>
        <div className="py-5 md:py-0">
          <h4 className="px-2 mb-2 font-bold text-green-500">Site</h4>
          <ul className="text-gray-600">
            <li className="px-2 py-2 border border-transparent rounded-full cursor-pointer hover:border-purple-300">License</li>
            <li className="px-2 py-2 border border-transparent rounded-full cursor-pointer hover:border-purple-300">Articles</li>
            <li className="px-2 py-2 border border-transparent rounded-full cursor-pointer hover:border-purple-300">About</li>
            <li className="px-2 py-2 border border-transparent rounded-full cursor-pointer hover:border-purple-300">Support</li>
          </ul>
        </div>
        <div className="py-5 md:py-0">
          <h4 className="px-2 mb-2 font-bold text-green-500">Follow Us</h4>
          <div></div>
          <div></div>
        </div>
      </div>
      {/* <!-- below footer --> */}
      {/* <div className="flex items-end justify-between px-12 py-8 text-gray-500 md:px-32">
        <div>Legal</div>
        <div>© 2021 AcePay. All Rights Reserved.</div>
        <div className="hidden md:block">
          <p className="text-xl font-bold tracking-tighter">1384</p>
          <p>Cr. funds transferred</p>
        </div>
      </div>
    </div>
  </div> */}
</main>
    </div>
  )
}

export default Landing