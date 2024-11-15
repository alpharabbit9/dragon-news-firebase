import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const FindUs = () => {
    return (
        <div className="mt-3">

            <h2 className="font-bold">Find us on :</h2>
            


            <div className="join join-vertical flex bg-base-100 mt-3">
                <button className="btn join-item justify-start"><FaFacebook></FaFacebook>
                    FaceBook
                </button>
                <button className="btn join-item justify-start"><FaInstagram></FaInstagram>
                    Instagram
                </button>
                <button className="btn join-item justify-start"><FaTwitter></FaTwitter>
                    Twitter
                </button>
            </div>

        </div>
    );
};

export default FindUs;