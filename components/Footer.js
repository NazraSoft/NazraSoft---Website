const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font lg:mt-10 lg:ml-20 lg:mr-20">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <p className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">

              <img src="/logo.jpg" className="w-10 h-10" />

              <span className="ml-3 text-xl text-yellow-600"><a href="/">NazraSoft</a></span>
            </p>
            <p className="mt-2 text-sm text-gray-500">Your Need Our Passion</p>
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/2 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font  dark:text-[#fbfbf9]">Home</h2>
              <nav className="mb-10 list-none">
                <li>
                  <a href="/" className="text-black cursor-pointer dark:text-gray-600 hover:text-yellow-800 hover:underline">Home</a>
                </li>
                <li>
                  <a href="/about" className="text-black cursor-pointer dark:text-gray-600 hover:text-yellow-800 hover:underline">About-us</a>
                </li>
                <li>
                  <a href="/team" className="text-black cursor-pointer dark:text-gray-600 hover:text-yellow-800 hover:underline">Our Team</a>
                </li>
                <li>
                  <a href="/contact" className="text-black cursor-pointer dark:text-gray-600 hover:text-yellow-800 hover:underline">Contact</a>
                </li>
              </nav>
            </div>
          </div>


          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font  dark:text-[#fbfbf9]">Services</h2>
              <nav className="mb-10 list-none">
                <li>
                  <a href="/services" className="text-black cursor-pointer dark:text-gray-600 hover:text-yellow-800 hover:underline">Services</a>
                </li>
                <li>
                  <a href="/carrer" className="text-black cursor-pointer dark:text-gray-600 hover:text-yellow-800 hover:underline">Careers</a>
                </li>
                <li>
                  <a href="/pricing" className="text-black cursor-pointer dark:text-gray-600 hover:text-yellow-800 hover:underline">Pricing</a>
                </li>
              </nav>
            </div>
          </div>


          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/2 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font dark:text-[#fbfbf9]">Privacy</h2>
              <nav className="mb-10 list-none">
                <li>
                  <a href="/privacy" className="text-black cursor-pointer dark:text-gray-600 hover:text-yellow-800 hover:underline">Privacy policy</a>
                </li>
                <li>
                  <a href="/terms" className="text-black cursor-pointer dark:text-gray-600 hover:text-yellow-800 hover:underline">Terms & Condition</a>
                </li>
                
              </nav>
            </div>

            {/* <div className="w-full px-4 lg:w-1/2 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font dark:text-[#fbfbf9]">Terms and Condition</h2>
              <nav className="mb-10 list-none">
                <li>
                  <a href="/terms" className="text-black cursor-pointer dark:text-gray-600 hover:text-yellow-800 hover:underline">Terms & Condition</a>
                </li>
                
              </nav>
            </div>
          </div> */}



        </div>
        
          </div>
        <div className="text-yellow-500 ">
          <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
            <p className="text-sm text-center text-gray-500 sm:text-left">© 2022 NazraSoft —
              <a href="https://twitter.com/NazraSoft" rel="noopener noreferrer" className="ml-1 text-gray-600" target="_blank">NazraSoft</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer