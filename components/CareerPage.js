import React, { useState,useEffect } from 'react'
import Link from 'next/link';
import supabase from "../client"
import { useRouter } from 'next/router'

const CareerPage = () => {
    const router = useRouter()
    const [state, setState] = useState('')
    const [job, setJobs] = useState([]);
    const handlePress = async () => {
        const { data, error } = await supabase
            .from('jobs')
            .select()
            .eq('location', 'India')
            console.table(job)
        
        setJobs(data);
    }

    useEffect(() => {
        handlePress();
    },[])
    return (
        <div>
            <div className='bg-black '>
                <div className='flex items-center align-center '>
                    <div className='lg:ml-16 ml-4  lg:mt-20 mt-10  text-white  dark:text-white  '>
                        <div className='text-4xl font-bold'>
                            Welcome to Careers
                        </div>
                        <div className='left-0  text-4xl font-bold '>
                            at NazraSoft
                        </div>
                        <div className='mt-5 text-xl '>Choose your impact</div>
                        <div className='lg:mr-80 mr mt-5 text-md w-3/2'>
                            Are you ready to apply your knowledge and background toexciting new challenges? From learning to leadership, this is your chance to take your career to the next level. Search and apply for a job today.
                        </div>
                    </div>
                    <div className='hidden lg:block right-5 mr-16 lg:mt-20 mt-10 dark:text-white'>
                        <img src='/career.png' className='' />
                    </div>
                </div>
                <div className='lg:hidden dark:text-white'>
                    <img src='/career.png' className='w-full mt-5' />
                </div>
            </div>

            <div className='lg:flex text-center'>
                <div className='font-bold text-3xl ml-4 mt-10 '>
                    Let's Connect
                    <div className='mt-6 text-gray-700  text-lg font-bold '><Link href="/contact">Get in touch</Link></div>
                    <div className='mt-6 text-gray-700  text-lg font-bold '><Link href="/careers">Explore Careers</Link></div>
                    <div className='mt-6 text-gray-700  text-lg font-bold '><Link href="/https://www.linkedin.com/company/nazrasoft">Linkedin</Link></div>
                    <div className='mt-6 text-gray-700  text-lg font-bold '><Link href='/about'>Learn about NazraSoft</Link></div>
                </div>

                <div className='flex-1 '>

                    <div className='text-center text-xl mt-10 font-bold '>
                        Job Search
                    </div>

                    <div className='lg:ml-80 lg:mr-80 mx-6  mt-4 '>
                        To learn more about working within a specific NazraSoft, enter your country of interest in the text below. Please note:if the country is not listed in the search,please check the country's local site from the main site selector in the upper right-hand corner of this page.
                        <div className='flex text-center items-center justify-center mt-10 '>
                            <input onChange={(e) => {
                                e.preventDefault();
                                setState(e.target.value);
                            }} type={'text'} className='bg-gray-600 text-white h-7 p-2' placeholder='Enter text here ' />
                            {
                                state != '' && <button onClick={handlePress} className='hover:text-white hover:bg-gray-700 border-2 border-gray-500 w-16 ml-2 '>Next</button>
                            }
                        </div>
                    </div>
                    {/* Show Jobs here */}
                    { <div>
                        {job.map(items => (
                            <div key={items} className="mt-10 text-left ">
                                 <div className='lg:w-2/3 lg:ml-56 border-2 lg:border-gray-200 '>
                                    <div className='text-2xl text-blue-900  mx-4 mt-2 hover:text-blue-500 cursor-pointer hover:underline ' onClick={(e) => {
                                        e.preventDefault()
                                        if (confirm("Are you Sure ?")) {
                                            
                                            router.push({
                                                pathname: '/apply',
                                                query: { name: items.title },
                                              })
                                        }
                                        
                                    }}>{items.title}</div>
                                    <div className='text-sm mx-4 mt-1'>Location : <span>{items.location}</span></div>
                                    <div className='text-sm mx-4 mt-1'>Salary : {items.salary === 0 ? "Not disclosed yet" : items.salary}</div>
                                    <div className='text-sm mx-4 mt-1' >Experience : 0 - {items.exp} years</div> 
                                    <div className='text-sm mx-4 mt-1'>Requirements : {items.req}</div>
                                    <div className='mb-6 text-sm mx-4 mt-1'>Description : {items.desp}</div>
                                 </div>

                            </div>
                        )) }
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default CareerPage