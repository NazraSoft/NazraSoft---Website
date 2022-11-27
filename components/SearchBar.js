import React from 'react'
import {FaSearch} from "react-icons/fa"
const SearchBar = () => {
  return (
    <div>
        <div  className='justify-between hidden bg-black border-black rounded-full shadow-md dark:bg-white lg:block border-1 w-80 h-9 '>
               <div className= 'flex flex-row  focus:border-blue-700 w-[97%] h-[80%] border-1 mx-1 pt-1'>
                  <input className='dark:bg-white flex w-[93%] h-[96%] border-1 bg-black mx-1 p-2' type="search" name="search" placeholder='Search Here' />
                  <FaSearch className='w-5 h-5 mt-1 dark:text-black' />
               </div>
             </div> 
       </div>
    
  )
}

export default SearchBar