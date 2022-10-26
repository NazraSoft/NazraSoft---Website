import Link from 'next/link'
import {useNhostClient} from "@nhost/nextjs"

const signup = () => {
  const nhost = useNhostClient()
  const handleonClick1 = () => {
    nhost.auth.signUp({ provider: 'google' })
  }
  const handleonClick2 = () => {
    nhost.auth.signIn({ provider: 'github' })
  }
   return (
    <div className="">
      
          {/* <Link href="https://ndtnhstryijibhjhvsct.nhost.run/v1/auth/signin/provider/google" className="cursor-pointer">
               Create account
             
       
         </Link> */}

         {/* <Link href="https://ndtnhstryijibhjhvsct.nhost.run/v1/auth/signin/provider/github" className="cursor-pointer">
            Google
         </Link> */}

         <div className='cursor-pointer ' onClick={handleonClick1}>Log in</div>
    </div>
  )
}


export default signup

