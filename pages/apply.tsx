import React,{useState} from 'react'
import { useRouter } from 'next/router'
import supabase from "../client"

const apply = () => {
    const router = useRouter()
    const [role,setRole] = useState('')
    const [email,setEmail] = useState('')
    const [num,setNum] = useState('')
    const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
        let file;

    if (e.target.files) {
      file = e.target.files[0];
    }

    const { data, error } = await supabase.storage
      .from("resume")
      .upload("public/" + file?.name, file as File);

    }

    const handlesubmit = async() => {
        if (role && email &&num) {
            
            await supabase
            .from('resume')
            .insert({  role: role,email: email, number: num })
            .then(() => alert("Form Submitted"))
            
        }
    }
  return ( <section className="lg:mt-16 mt-4 max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

    <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Job Role</label>
                <input id="username" value={router.query.name} onChange={(e) => {
                    e.preventDefault()
                    setRole(e.target.value)
                }} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                <input id="emailAddress" type="email" onChange={(e) => {
                    e.preventDefault()
                    setEmail(e.target.value)
                }} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Mobile Number</label>
                <input id="password" type="tel" onChange={(e) => {
                    e.preventDefault()
                    setNum
                    (e.target.value)
                }}
                min="10" max="10" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Upload Resume</label>
                <input id="passwordConfirmation" onChange={(e) => {
          handleUpload(e);
        }} type="file" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
        </div>

        <div onClick={handlesubmit} className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Apply</button>
        </div>
    </form>
</section>
  )
}

export default apply