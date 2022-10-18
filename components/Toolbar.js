import React from 'react'
import { useState } from 'react';
import { FaHome } from "react-icons/fa"
import { FcServices,FcAbout,FcBusinessContact } from "react-icons/fc"
import {IoMdContact,IoMdLogIn} from "react-icons/io"
import {SiAboutdotme} from 'react-icons/si'
import Link from "next/link"
import {TbWriting} from "react-icons/tb"

const Toolbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 right-0 w-[40%] text-white bg-gray-500 fixed h-full z-40 ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}>
        <div className='mt-24 ml-10 flex-col items-center justify-center'>
          <div className='mb-2'>
            <Link href="/">
            <FaHome className='w-10 h-10 ml-1 text-red-400' />
            </Link>
            <h3 className="text-md font-bold text-white">Home</h3>
          </div>
            <Link href="/services">
          <div className='mb-2'>
            <FcServices className='w-10 h-10 ml-1 text-red-400' />
            <h3 className="text-md font-bold text-white">Services</h3>
          </div>
          </Link>
          <Link href="/blog">
          <div className='mb-2'>
            <TbWriting className='w-10 h-10 ml-1 text-red-400' />
            <h3 className="text-md font-bold text-white">Blog</h3>
          </div>
          </Link>
          <Link href="/about">
          <div className='mb-2'>
            <SiAboutdotme className='w-10 h-10 ml-1 text-red-400' />
            <h3 className="text-md font-bold text-white">About us</h3>
          </div>
          </Link>
          <Link href="/contact">
          <div className='mb-2'>
            <IoMdContact className='w-10 h-10 ml-1 text-red-400' />
            <h3 className="text-md font-bold text-white">Contact us</h3>
          </div>
          </Link>
          <Link href="/login">
          <div className='mb-2'>
            <IoMdLogIn className='w-10 h-10 ml-1 text-yellow-400' />
            <h3 className="text-md font-bold text-white">Login </h3>
          </div>
          </Link>
          <Link href="/register">
          <div className='mb-2'>
            <h3 className="text-md underline font-bold text-white">Register </h3>
          </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Toolbar