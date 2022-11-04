import { FaGithub } from "react-icons/fa"

const AuthButton = ({ provider, onPress }) => {
    return (
        <div><button onClick={onPress}>
            {console.log(provider.name)}
            {provider.name == 'Google' ? <img className="rounded-full transform transition duration-200 hover:-translate-y-1 hover:shadow-xl" src="/google.png" /> : provider.name == 'GitHub' ? (
                <div className="flex flex-1 dark:border-white border-black flex-row border-2 rounded-full mb-3 transform transition duration-200 hover:-translate-y-1 hover:shadow-xl">
                    <div className=" border-r-2 border-black dark:border-white mx-1 my-2">
                        <FaGithub className="w-8 h-6 " />
                    </div>
                    <div className="ml-1 mx-1 my-2">
                        Sign in with {provider.name}
                    </div>

                </div>
            ) : <img className="rounded-full transform transition duration-200 hover:-translate-y-1 hover:shadow-xl w-[200px]" src="/linkedin.png" /> }
        </button></div>
    )
}

export default AuthButton