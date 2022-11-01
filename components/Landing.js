import React from 'react'
import Hero from './Hero'
import Link from 'next/link'
import { useSession, signIn, signOut, newUSer } from "next-auth/react"
import Image from 'next/image'
const Landing = () => {

  // function imageFromJsonObject(file){
  //   for (var i = 0; i < file.length; i += 1) {
  //     var fruit = getRandomItem(fruitsArray);
  //     file[i].innerHTML = fruit.name + '<img src="'+fruit.image+'">';
  //   }
  // }
  const { data: session, status } = useSession()
  return (
    <div>
      <header className="flex flex-col mx-4 ace-x-2 mgt-4 bpx-4 md:mt-20 md:flex-row md:px-20">
        {/* <!-- Text container --> */}
        <div className="w-full md:w-1/2 mb-4 ">
          <h1 className="text-2xl font-bold text-gray-800 md:text-4xl lg:text-6xl dark:text-gray-50">Nazra Software Solution <span className="font-thin tracking-wider"> - Take your Business Online.</span></h1>
          <p className="max-w-xl my-10 font-light text-gray-800 dark:text-gray-200">Most Affordable Service Provider in the Region - Your Need Our Passion</p>
          {status == 'unauthenticated' && <div onClick={() => signIn()} className="inline-block py-2 bg-white border-2 cursor-pointer p x-8  relative rounded-3xl hover:bg-gray-300">
            <p className="relative mx-4 font-light text-gray-700 transition duration-100 transform hover:text-green-500 hover:-translate-y-2 hover:-translate-x-1 ">Create Account</p>
          </div>}
          {status === "authenticated" && <div className="inline-block py-2 bg-white border cursor-pointer p x-8 cursor-pointerrelative rounded-3xl hover:bg-gray-300"><Link href="/services" >
            <p className="relative mx-4 font-light text-gray-700 transition duration-100 transform hover:text-green-500 hover:-translate-y-2 hover:-translate-x-1 ">Get Started</p>
          </Link></div>}
        </div>

        {/* <!-- Image container --> */}
        <div className="mt:4 md:mt- w-full md:block md:w-1/2 perspective: 800px;">
          <div className="p-2 overflow-hidden transform h-full  shadow-2xl img-container rounded-xl transform: rotateX(40deg) rotateZ(6deg) rotateY(-10deg);">
            {/* <div class="grid grid-cols-4 gap-4 mr-2">
              <div className='bg-red-500 h-16'>
               
              </div>
              <div className='bg-red-500 h-16'></div>
              <div className='bg-red-500 h-16'></div>
              <div className='bg-red-500 h-16'></div>
              <div className='bg-red-500 h-16'></div>
              <div className='bg-red-500 h-16'></div>
              <div className='bg-red-500 h-16'></div>
              <div className='bg-red-500 h-16'></div>
              <div className='bg-red-500 h-16'></div>
              <div className='bg-red-500 h-16'></div>
              <div className='bg-red-500 h-16'></div>
              <div className='bg-red-500 h-16'></div>
              <div className='bg-red-500 h-16'></div>
              <div className='bg-red-500 h-16'></div>
              <div className='bg-red-500 h-16'></div>
              <div className='bg-red-500 h-16'></div>
              <div className='bg-red-500 h-16'></div><div className='bg-red-500 h-16'></div><div className='bg-red-500 h-16'></div><div className='bg-red-500 h-16'></div><div className='bg-red-500 h-16'></div><div className='bg-red-500 h-16'></div><div className='bg-red-500 h-16'></div><div className='bg-red-500 h-16'></div>


            </div> */}
            <img className='h-3/4' src="/landing.gif" />
          </div>
        </div>
      </header>
      {/* <!-- Companies --> */}
      <section className="flex flex-col items-center justify-between px-20 py-10 mt-20 bg-gray-600 md:flex-row">
        <h1 className="text-lg md:text-2xl font-bold text-gray-50">Companies who trust us</h1>
        <div className="flex flex-row flex-wrap items-center justify-center companies">
          <div className="mx-4 my-4">
            <img src="/c1.png" className="h-24 w-28" alt="logo company" />
          </div>
          <div className="mx-10 my-4">
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
    </div>
  )
}

export default Landing