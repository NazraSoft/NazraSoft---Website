import React from 'react'

const Form = () => {
  return (
      <div>

    <div className='mt-2 text-center  shadow-xl rounded-md w-1/3'>
        <div className='text-xl font-bold'>
            Have Projects?
        </div>
        <div className='text-xs mx-2'>say hello for any query</div>

        <div className='flex'>
        <input type="text" placeholder='Name' className='h-6 mt-4 focus:border-purple-600' />
        

        </div>
        <div>message</div>
        <div>country</div>
        <div>phone number</div>
        <div>Subject</div>
        <div>ubmit</div>
    </div>
    <img className='absolute top-0 w-full z-0' src='/s6.png'/>
    </div>
  )
}

export default Form