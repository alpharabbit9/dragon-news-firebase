import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogIn = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Login with :</h2>
            <div className="space-y-3"> {/* Added spacing between buttons */}
                <button className="btn w-full flex items-center justify-center text-blue-500">
                    <FaGoogle className="mr-2" /> Log in with Google
                </button>
                <button className="btn w-full flex items-center justify-center text-gray-800">
                    <FaGithub className="mr-2" /> Log in with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogIn;
