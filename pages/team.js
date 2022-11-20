import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from 'next/link';

const team = () => {
  const data = [
    {
      
        "pos":"CEO",
        "imgUrl" : "https://avatars.githubusercontent.com/u/77575489?v=4",
        "name": "Tassawar Hasib",
        "detail" : "",
        "github": "https://github.com/tassawarhasib",
        "linkedin":  "/",
        "insta" : "/"
    },
    {
      "pos":"CTO",
        "imgUrl" : "https://avatars.githubusercontent.com/u/75849689?v=4",
        "name": "Ritik Ranjan",
        "detail" : "",
        "github": "https://github.com/ritikranjan12",
        "linkedin":  "/",
        "insta" : "/"
    },
    {
      "pos":"CFO",
        "imgUrl" : "https://media-exp1.licdn.com/dms/image/C4D03AQGJ6bfiUFMFOg/profile-displayphoto-shrink_400_400/0/1667936904182?e=1674691200&v=beta&t=SRHnGM1NffTjtVbGvJRX_iKU5wAybA7WItk0BalwnxU",
        "name": "Raees Ahmad",
        "detail" : "",
        "github": "www.github.com/ritikranjan12",
        "linkedin":  "/",
        "insta" : "/"
    },
    {
      "pos":"CMO",
        "imgUrl" : "https://media-exp1.licdn.com/dms/image/C4D03AQEwK5a7V2nJxA/profile-displayphoto-shrink_400_400/0/1651919754622?e=1672876800&v=beta&t=y1JBTedkW3nZN2HxUU6h_MZgAl0nCNLaf7KBumYEmXY",
        "name": "Pintu Yadav",
        "detail" : "",
        "github": "/",
        "linkedin":  "/",
        "insta" : "/"
    }
    
  ]
  return (
    <div>

      <Navbar />


      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 dark:text-gray-200 text-lg text-center font-normal pb-3">NazraSoft Team</p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 dark:text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Professional Hands behind the foundation of this Organization</h1>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4  divide-x-4    divide-orange-600'>
        {data.map((item) => {
      return <div key={item.pos} className="px-6 mt-16 ">
        <div  className="w-full flex justify-center pt-5 pb-5">
          <img src= {item.imgUrl} className="w-32 h-32 rounded-full"/>
          </div>
      <h1 className="font-bold dark:text-white text-3xl text-center mb-1">{item.name}</h1>
      <p className="text-gray-800 dark:text-white text-sm text-center">{item.pos}</p>
      <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">{item.detail}</p>
      <div className="w-full flex justify-center pt-5 pb-5">
      <Link href={item.github} className="mx-5">
                                                <div aria-label="Github" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                                                </div>
                                            </Link>
                                            <a href={item.linkedin} className="mx-5">
                                                <div aria-label="Twitter" role="img">
                                                    <img src="https://tse2.mm.bing.net/th?id=OIP.458_lNnmOvMb2f3LNi-G8wHaHv&pid=Api&P=0" className='h-6 w-8' alt="linkedin" />
                                                </div>
                                            </a>
                                            <a href={item.insta} className="mx-5">
                                                <div aria-label="Instagram" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                                                </div>
                                            </a>
      </div>
    </div>
      
       })} 
       </div>
      <Footer />
    </div>
  )
}

export default team