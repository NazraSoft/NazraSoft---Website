import React from 'react'
import Link from "next/link"
import {FaMoon,FaSun} from "react-icons/fa"
import {GiHamburgerMenu} from "react-icons/gi"
import {useTheme} from "next-themes";
import { useSession, signIn, signOut } from "next-auth/react"
import SearchBar from "../components/SearchBar"

import {
    Text,
    Button,
    Flex,
    useDisclosure,
    Drawer,   
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'



const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
  const { data: session ,status} = useSession()
  
    const {systemTheme , theme, setTheme} = useTheme ();
    const renderThemeChanger= () => {
  
      const currentTheme = theme === "system" ? systemTheme : theme ;
  
      if(currentTheme === "dark"){
        return (
          <div>

            <FaSun className="w-10 h-6 text-yellow-600 border-l-2 border-red-600 " role="button" onClick={() => setTheme('light')} />
          </div>
        )
      }
      else {
        return (
          <div>
            <FaMoon className="w-10 h-6 text-gray-900 border-l-2 border-red-600 " role="button" onClick={() => setTheme('dark')} />
            </div>
        )
      }
   };

  return (
    <>
    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay  className='bg-gradient-to-r from-[#536976] to-[#292E49] flex'/>
        <DrawerContent className='flex-col'>
          {/* <DrawerCloseButton /> */}
          <DrawerHeader className='mx-4 my-4 '><DrawerCloseButton /></DrawerHeader>
          <DrawerHeader className='mx-4 my-4 text-center'><a href="/" className="font-semibold text-gray-500 transition duration-100 md:hidden hover:underline dark:text-gray-200"><Text>Home</Text></a></DrawerHeader>
          <DrawerHeader className='mx-4 my-4 text-center'><a href="/about" className="font-semibold text-gray-500 transition duration-100 md:hidden hover:underline dark:text-gray-200"><Text>About us</Text></a></DrawerHeader>
          <DrawerHeader className='mx-4 my-4 text-center'><a href="/services" className="font-semibold text-gray-500 transition duration-100 md:hidden hover:underline dark:text-gray-200"><Text>Services</Text></a></DrawerHeader>
          <DrawerHeader className='mx-4 my-4 text-center'><a href="/pricing" className="font-semibold text-gray-500 transition duration-100 md:hidden hover:underline dark:text-gray-200"><Text>Pricing</Text></a></DrawerHeader>
          <DrawerHeader className='mx-4 my-4 text-center'><a href="/contact" className="font-semibold text-gray-500 transition duration-100 md:hidden hover:underline dark:text-gray-200"><Text>Contact</Text></a></DrawerHeader>
          <DrawerHeader className='mx-4 my-4 text-center'><a href="/team" className="font-semibold text-gray-500 transition duration-100 md:hidden hover:underline dark:text-gray-200"><Text>Our Team</Text></a></DrawerHeader>
          <DrawerHeader className='mx-4 my-4 text-center'><a href="/carrer" className="font-semibold text-gray-500 transition duration-100 md:hidden hover:underline dark:text-gray-200"><Text>Carrer</Text></a></DrawerHeader>
        

            <DrawerHeader className='mx-4 my-4 text-center'>
            {status === "unauthenticated" && 
       <div onClick={() => signIn()} className="relative px-8 py-2 bg-white border border-gray-800 cursor-pointer rounded-3xl dark:border-gray-50 hover:bg-gray-300 transition duration-100 transform hover:text-green-500 hover:-translate-y-2 hover:-translate-x-1">
         <p className="relative font-light text-gray-700 ">Login</p>
       </div>}
       {status === "authenticated" && <div className='flex flex-1 flex-row space-x-2 justify-between'>
       <Link href="/account"><img  src={session.user.image} className="hidden lg:block relative cursor-pointer w-12 h-12 rounded-full " /></Link>
       <button className=" lg:block relative px-8 py-2 bg-white border border-gray-800 cursor-pointer rounded-3xl dark:border-gray-50 hover:bg-gray-300 transition duration-100 transform hover:text-green-500 hover:-translate-y-2 hover:-translate-x-1">
       <p className="relative font-light text-gray-700" onClick={() => signOut()}>Sign Out</p>  </button>
       </div>}
            </DrawerHeader>
            
        </DrawerContent>
      </Drawer>
    
    <Flex>
      
        <main className="w-full antialiased bg-white dark:bg-[#25292A] z-0 overflow-hidden">
   <div className="text-gray-100 lg:block -left-40 -top-40 dark:text-gray-600" style={{"zIndex": -40}}>
   </div>
   <nav className="flex items-center justify-between px-4 py-10 lg:px-20">
     
     <div className=" flex items-center space-x-1">
         
     <img src="/logo.jpg" className="w-10 h-10" /> <div><h1 className="pl-3 text-2xl italic font-bold text-gray-700 dark:text-gray-50"><Link href="/">NazraSoft</Link></h1></div>           
      
     {renderThemeChanger()} 
     </div>
     <div className="flex items-center space-x-8">
       <a href="/" className="hidden font-semibold text-gray-500 transition duration-100 lg:block hover:underline dark:text-gray-200">Home</a>
       <a href="/team" className="hidden font-semibold text-gray-500 transition duration-100 lg:block hover:underline dark:text-gray-200">Our Team</a>
       <a href="/pricing" className="hidden font-semibold text-gray-500 transition duration-100 lg:block hover:underline dark:text-gray-200">Plans</a>
       <a href="/about" className="hidden font-semibold text-gray-500 transition duration-100 lg:block hover:underline dark:text-gray-200">About us</a>
       <div className=" justify-between hidden font-semibold text-gray-500 transition duration-100 lg:block hover:text-green-500 dark:text-gray-200">
         {/* Search BAR */}
         <SearchBar/> 
       </div>
       {status === "unauthenticated" && 
       <div onClick={() => signIn()} className="relative hidden lg:block px-8 py-2 bg-white border border-gray-800 cursor-pointer rounded-3xl dark:border-gray-50 hover:bg-gray-300 transition duration-100 transform hover:text-green-500 hover:-translate-y-2 hover:-translate-x-1">
         <p className="relative  font-light text-gray-700 ">Login</p>
       </div>}
       <GiHamburgerMenu className='relative font-light lg:hidden w-10 h-10' ref={btnRef} onClick={onOpen}/>
        
       {status === "authenticated" && <div className='flex flex-1 flex-row space-x-2 justify-between'>
       <Link href="/account"><img  src={session.user.image} className="relative cursor-pointer w-12 h-12 rounded-full " /></Link>
       <button className="hidden lg:block relative px-8 py-2 bg-white border border-gray-800 cursor-pointer rounded-3xl dark:border-gray-50 hover:bg-gray-300 transition duration-100 transform hover:text-green-500 hover:-translate-y-2 hover:-translate-x-1">
       <p className="relative font-light text-gray-700" onClick={() => signOut()}>Sign Out</p>  </button>
       </div>}
       
     </div>
    <div>
        


       </div>
    
   </nav>

  
  
 </main>

      </Flex>
      </>
    
  )
}

export default Navbar
