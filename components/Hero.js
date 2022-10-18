import React from 'react'

const Hero = () => {
  return (
    <>
    <section class="text-gray-600 body-font md:flex md:flex-row relative md:mt-10 md:ml-20 md:mr-20">
        {/* Text Container */}
        <div class="lg:w-1/2 md:w-1/2 bg-white md:flex flex-1 flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      Ranjan
    </div>

    {/* Image container */}
    <div class="lg:w-1/2 md:w-1/2 bg-green-500 md:flex flex-1 flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      Ritik
    </div>
</section>
    </>
  )
}

export default Hero