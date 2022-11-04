import { getProviders, signIn, getSession, getCsrfToken } from "next-auth/react";
import AuthButton from "../components/AuthButton";

function signin({ providers }) {

  const handleOnClick = (provider) => {
    signIn(provider.id)
  }
    return (
      <div className=" text-center flex-1 flex-col flex lg:ml-[40%] lg:mr-[40%] md:mx-32 mx-16 h-full my-8">
         <div className="items-center justify-center border-2 border-gray-700">

         <img src='/login.png' className="h-32 w-[100%]" alt="..."/>
         
         
        {Object.values(providers).map((provider) => {
          return (
            <div className="md:mx-16 lg:mx-8" key={provider.name}>
             <AuthButton provider={provider} onPress={() => handleOnClick(provider)} />
            </div>
          );
        })}
        </div>
      </div>
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