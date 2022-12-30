import React, { useState } from 'react'
import supabase from '../client';

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const insertData = async () => {
    if(name && email && phone && message) {

      await supabase
        .from('query')
        .insert({ name: name, email: email, phone: phone, message: message })
        .then(() => alert("Form Submitted"))
    } else alert("Please Fill the details")
  }
  return (
    <div className='md:h-[690px]'>

      <div className='mt-2 text-center rounded-md md:w-1/3 mb-6 p-2 shadow-xl'>
        <div className='text-xl font-bold'>
          Have Projects?
        </div>
        <div className='text-xs mx-2'>say hello for any query</div>
        <div className='flex mx-8'>
          <input required type="text" placeholder='Name' onChange={(e) => {
            e.preventDefault()
            setName(e.target.value)
          }} className='h-6 rounded-md text-black  w-full mx-4 mt-4 focus:border-purple-600' />
        </div>
        <div className='flex mx-8'>
          <input required type="email" placeholder='Email' onChange={(e) => {
            e.preventDefault()
            setEmail(e.target.value)
          }} className='h-6 rounded-md text-black  w-full mx-4 mt-4 focus:border-purple-600' />
        </div>
        <div className='flex mx-8'>
          <input required type="number" placeholder='Phone Number' onChange={(e) => {
            e.preventDefault()
            setPhone(e.target.value)
          }} className='h-6 rounded-md text-black  w-full mx-4 mt-4 focus:border-purple-600' />
        </div>
        <div className='flex mx-8'>
          <textarea required type="text" placeholder='Message' onChange={(e) => {
            e.preventDefault()
            setMessage(e.target.value)
          }} className='h-16 rounded-md text-black  w-full mx-4 mt-4 focus:border-purple-600' />
        </div>
        <div className='flex mx-8 mb-6'>
          <button onClick={(e) => {
            insertData();
          }
          } className='h-8 cursor-pointer border-2 w-1/3 rounded-lg shadow-md mx-4 mt-4 focus:border-purple-600 focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600  text-white leading-6'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Form