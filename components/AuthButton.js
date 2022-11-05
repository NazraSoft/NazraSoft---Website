import { FaGithub } from "react-icons/fa"

const AuthButton = ({ provider, onPress }) => {
    return (
        <div ><button className="flex" onClick={onPress}>
            {provider.name == 'Google' ? <img className="w-9 h-9 rounded-full transform transition duration-200 hover:-translate-y-1 hover:shadow-xl" src="/google.png" /> : provider.name == 'LinkedIn' ? <img className="w-9 h-9  transform transition duration-200 hover:-translate-y-1 hover:shadow-xl" src="/linkedin.png" /> : provider.name == 'GitHub' ? <img className="w-9 h-9 rounded-full transform transition duration-200 hover:-translate-y-1 hover:shadow-xl " src="/github.png" /> : <img className="w-9 h-9  transform transition duration-200 hover:-translate-y-1 hover:shadow-xl" src="/insta.png" />}
        </button></div>
    )
}

export default AuthButton