import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {useTheme} from "next-themes";
import {FaMoon,FaSun,FaSearch} from "react-icons/fa"

const Home: NextPage = () => {
  const {systemTheme , theme, setTheme} = useTheme ();
  const renderThemeChanger= () => {

    const currentTheme = theme === "system" ? systemTheme : theme ;

    if(currentTheme ==="dark"){
      return (
        <FaSun className="w-10 h-6  border-l-2 border-red-600 text-yellow-600 " role="button" onClick={() => setTheme('light')} />
      )
    }
    else {
      return (
        <FaMoon className="w-10 h-6 border-l-2 border-red-600  text-gray-900 " role="button" onClick={() => setTheme('dark')} />
      )
    }
 };
  return (

    <div>
      <header className="text-gray-600 body-font bg-green-400 mt-10 ml-20 mr-20 rounded-tl-xl rounded-br-xl shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            {/* logo */}
            <span className="ml-3 text-xl">Art Life</span>
          </a>
          <nav className="hidden  md:mr-auto md:ml-4 md:py-1 md:pl-4	md:flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white text-black ">Home</a>
            <a className="mr-5 hover:text-white text-black">About us</a>
            <a className="mr-5 hover:text-white text-black ">Blog</a>
            <a className="mr-5 hover:text-white text-black ">Services</a>
            <a className="mr-5 hover:text-white text-black ">Contact</a>
            {renderThemeChanger()}
          </nav>
          <div  className='hidden lg:block border-1 border-black rounded-lg shadow-md w-80 h-9 bg-black'>
            <div className= 'flex flex-row  focus:border-blue-700 w-[97%] h-[80%] border-1 mx-1 mt-1'>
               <input className='flex w-[93%] h-[96%] border-1 bg-black mx-1 p-2' type="search" name="search" placeholder='Search Here' />
               <FaSearch className='mt-1 w-5 h-5' />
            </div>
          </div>
         
          <button className="ml-4 inline-flex items-center bg-cyan-300 border-0 py-1 px-3 focus:outline-none hover:bg-blue-400 rounded text-base mt-4 md:mt-0">Log In
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>

        </div>
      </header>
    </div>
  )
}

export default Home
