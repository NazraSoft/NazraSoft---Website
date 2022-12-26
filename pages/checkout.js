import React,{useState,useEffect} from 'react'
import supabase from "../client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'

const checkout = () => {
  const { data: session ,status} = useSession()
  const router = useRouter();
  const [job, setJobs] = useState([]);
  const handlePress = async () => {
    const { data, error } = await supabase
        .from('cart')
        .select()
        .eq({email : session.user.email})
    
    setJobs(data);
}
console.table(job);
useEffect(() => {
  if(status==='unauthenticated') router.push("/signIn")
  else  handlePress();
},[])
  return (
    <div>
        
    </div>
  )
}

export default checkout