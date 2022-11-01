import React from 'react'

const Plans = () => {
  return (
    <div>
        <div className="dark:bg-gray-800">
  <div className="py-10 page-container">
    <div className="header">
      <h1 className="text-2xl font-extrabold text-center text-gray-700 md:text-4xl dark:text-white">Get your business best product</h1>
      <p className="max-w-2xl mx-4 mt-4 text-sm text-center text-gray-500 dark:text-white md:mx-auto md:text-lg">Get Easy access to services and all the additional benefits. Get 1-year support for all the components and additional basic support from our team.</p>
    </div>
  </div>
  <div className="z-10 grid items-center content-center grid-cols-1 gap-8 py-20 mx-4 lg:grid-cols-3 md:mx-8 xl:mx-40">
    <div className="relative z-10">
      <div className="relative z-10 flex flex-col p-4 mx-auto bg-white border border-gray-100 rounded-lg shadow-md card dark:bg-gray-700 dark:border-gray-700">
        <h2 className="my-4 text-xl font-bold text-center text-gray-800 dark:text-white">Webite Development</h2>
        <p className="flex items-center justify-center my-4 mt-4 font-extrabold text-gray-800 price text-8xl dark:text-white"><span className="text-4xl">₹</span>12999</p>
        <div className="features">
          <div className="flex flex-row items-start justify-start my-4 space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 mt-1 text-green-500">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <p className="text-gray-600 dark:text-white">Latest technology used</p>
          </div>
          <div className="flex flex-row items-start justify-start my-4 space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 mt-1 text-green-500">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <p className="text-gray-600 dark:text-white">Customer Support</p>
          </div>
          <div className="flex flex-row items-start justify-start my-4 space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 mt-1 text-green-500">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <p className="text-gray-600 dark:text-white">1-year customer support</p>
          </div>
          <div className="flex flex-row items-start justify-start my-4 space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 mt-1 text-green-500">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <p className="text-gray-600 dark:text-white">On call support</p>
          </div>
          <div className="flex flex-row items-start justify-start my-4 space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 mt-1 text-green-500">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <p className="text-gray-600 dark:text-white">Premium support over email</p>
          </div>
        </div>

        <button className="w-full py-4 mt-4 font-semibold text-white bg-indigo-500 rounded-md">Buy Now</button>
      </div>
      <div className="absolute inset-0 transform rounded-md -rotate-3 opacity-20 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
    </div>
    <div className="relative z-10">
      <div className="relative z-10 flex flex-col p-4 mx-auto bg-white border-2 rounded-lg shadow-md card dark:bg-gray-700 border-tmk-blue dark:border-gray-700" style={{"z-index": 20}}>
        <h2 className="my-6 text-xl font-bold text-center text-gray-800 dark:text-white">Website + Application</h2>
        <p className="flex items-center justify-center my-4 mt-4 font-extrabold text-gray-800 price text-8xl dark:text-white"><span className="text-4xl">₹</span>22999</p>
        <div className="mx-auto features">
          <div className="flex flex-row items-start justify-start my-4 space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 mt-1 text-green-500">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <p className="text-gray-600 dark:text-white">Easy Deploy</p>
          </div>
          <div className="flex flex-row items-start justify-start my-4 space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 mt-1 text-green-500">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <p className="text-gray-600 dark:text-white">Free hosting for 1st quarter</p>
          </div>
          <div className="flex flex-row items-start justify-start my-4 space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 mt-1 text-green-500">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <p className="text-gray-600 dark:text-white">On call customer support</p>
          </div>
          <div className="flex flex-row items-start justify-start my-4 space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 mt-1 text-green-500">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <p className="text-gray-600 dark:text-white">Premium Support</p>
          </div>
          <div className="flex flex-row items-start justify-start my-4 space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 mt-1 text-green-500">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <p className="text-gray-600 dark:text-white">Community Access</p>
          </div>
          <div className="flex flex-row items-start justify-start my-4 space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 mt-1 text-green-500">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <p className="text-gray-600 dark:text-white">1-year premium updates</p>
          </div>
          <div className="flex flex-row items-start justify-start my-4 space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 mt-1 text-green-500">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <p className="text-gray-600 dark:text-white">Button Builders</p>
          </div>
        </div>

        <button className="w-full py-4 mt-4 font-semibold text-white bg-indigo-500 rounded-md">Buy Now</button>
      </div>
      <div className="flex justify-center">
        <div className="absolute px-2 py-2 font-semibold bg-blue-300 rounded-md -top-12 dark:text-gray-100" style={{"z-index": 20}}>
          <p>MOST POPULAR</p>
        </div>
      </div>
    </div>
    <div className="relative z-10">
      <div className="relative z-10 flex flex-col p-4 mx-auto bg-white border border-gray-100 rounded-lg shadow-md card dark:bg-gray-700 dark:border-gray-700">
        <h2 className="my-4 text-xl font-bold text-center text-gray-800 dark:text-white">Application Development</h2>
        <p className="flex items-center justify-center my-4 mt-4 font-extrabold text-gray-800 price text-8xl dark:text-white"><span className="text-4xl">₹</span>14999</p>
        <div className="features">
          <div className="flex flex-row items-start justify-start my-4 space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 mt-1 text-green-500">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <p className="text-gray-600 dark:text-white">Easy deploy</p>
          </div>
          <div className="flex flex-row items-start justify-start my-4 space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 mt-1 text-green-500">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <p className="text-gray-600 dark:text-white">Latest technology used</p>
          </div>
          <div className="flex flex-row items-start justify-start my-4 space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 mt-1 text-green-500">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <p className="text-gray-600 dark:text-white">Customer Support</p>
          </div>
          <div className="flex flex-row items-start justify-start my-4 space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 mt-1 text-green-500">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <p className="text-gray-600 dark:text-white">Free hosting for 1st quarter</p>
          </div>
          <div className="flex flex-row items-start justify-start my-4 space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 mt-1 text-green-500">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <p className="text-gray-600 dark:text-white">On call support</p>
          </div>
        </div>

        <button className="w-full py-4 mt-4 font-semibold text-white bg-indigo-500 rounded-md">Buy Now</button>
      </div>
      <div className="absolute inset-0 transform rounded-md -rotate-3 opacity-20 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Plans