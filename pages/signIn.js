import { getProviders, signIn, getSession, getCsrfToken } from "next-auth/react";
import AuthButton from "../components/AuthButton";
import Head from 'next/head'
import Link from 'next/link'

function signin({ providers }) {
  
  const handleOnClick = (provider) => {
    signIn(provider.id)
  }
    return (
      <>
      <Head>
    <title>Sign In - NazraSoft Solutions</title>
    <meta name="description" content="Software Solutions" />
    <link rel="icon" href="/logo.jpg" />

  </Head>
      <div className=" text-center flex-1 flex-col flex lg:mx-[462px] md:mx-32 mx-2 h-full my-8 lg:mt-[74px] md:mt-[214px]">
         <div className="items-center justify-center">

         {/* <img src='/login.png' className="h-32 w-[100%]" alt="..."/> */}
         <div className="text-6xl mt-4 mb-4 ">Sign In</div>
         
         <div className="text-md">Sign in and start easy access to all the pages</div>

         {/* <div className="mx-4 h-8 mb-6 p-1">
         <input className="bg-[#030e4a] md:w-[50%] w-[70%] h-8 my-4 p-2 rounded-lg text-white border-blue-600 " type="text" placeholder="Login"></input>
          </div>
          <div className="mx-4 h-8 mb-6 p-1">
         <input className="bg-[#030e4a] md:w-[50%] w-[70%] h-8 my-4 p-2 rounded-lg text-white border-blue-600 " type="password" placeholder="Password"></input>
          </div>

          <div className="md:flex-row md:flex">
          <div className="h-8 mb-2 mt-2 md:relative lg:left-[165px] md:left-[150px]">
         <input className="bg-white p-2 rounded-lg text-white border-blue-600 " type="checkbox"></input>         
          <label className="h-8 my-6 ml-2">Remember me</label>
          </div>
          <div className="h-8 mb-2 mt-2 mx-3 md:relative lg:left-[190px] md:left-[150px]">
              Forgot Password?
          </div>
          </div> */}

          <div>
            <button>
              <Link href="/api/auth0/login">
              <img  src="/sign.png" className="transition duration-200 hover:-translate-y-1 mt-10 h-16"/>
              </Link>
            </button>
          </div>
<div className="flex flex-row items-center justify-center mt-4">


        {Object.values(providers).map((provider) => {
          return (
            <div className="mx-2" key={provider.name}>
              
             <AuthButton provider={provider} onPress={() => handleOnClick(provider)} />
            </div>
          );
        })}
        </div>
        </div>
        
      </div>
      <img src="/Vectors.png" className="w-full h-[111px] md:fixed bottom-0 hidden md:block"/>
      </>
    );
  }

 
export async function getServerSideProps(context) {
    const { req } = context;
    const session = await getSession({ req });
  
    if (session) {
      return {
        redirect: { destination: "/" },
      };
    }
  
    return {
      props: {
        providers: await getProviders(context),
        csrfToken: await getCsrfToken(context),
      },
    };
  }

  
  export default signin;