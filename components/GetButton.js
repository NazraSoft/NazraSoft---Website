import React from 'react'
import Link from "next/link"

export const GetButton = () => {
  return (
    <div className='bottom-5 right-4 fixed z-100'>
        <button  className="px-8 py-2 bg-[#da2525] border border-gray-800 cursor-pointer rounded-3xl dark:border-gray-50 hover:bg-[#e06464] transition duration-100 transform text-white dark:text-white">
      <Link href="/contact" className="relative font-light text-gray-700">Get in Touch</Link>  </button>
    </div>
  )
}
