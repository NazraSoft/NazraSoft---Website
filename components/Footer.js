import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <footer class="text-gray-600 body-font lg:mt-10 lg:ml-20 lg:mr-20">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
              <img src="/logo.png" className="w-10 h-10"/>
             
        <span class="ml-3 text-yellow-600 text-xl">Art Life</span>
      </a>
      <p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <Link href="/" class="text-gray-600 hover:text-yellow-800">Home</Link>
          </li>
          <li>
            <Link href="/about" class="text-gray-600 hover:text-yellow-800">About us</Link>
          </li>
          <li>
            <Link href="/contact" class="text-gray-600 hover:text-yellow-800">Contact us</Link>
          </li>
          <li>
            <Link href="/services" class="text-gray-600 hover:text-yellow-800">Services</Link>
          </li>
          <li>
            <Link href="/blog" class="text-gray-600 hover:text-yellow-800">Blogs</Link>
          </li>
        </nav>
      </div>
      
    </div>
  </div>
  <div class="bg-gray-900 text-yellow-500">
  <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2022 ArtLife —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a>
      </p>
      </div>
  </div>
</footer>
    </>
  )
}

export default Footer