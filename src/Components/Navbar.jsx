import { Link } from "react-router-dom";
import demUser from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {

    const { user, userLogOut } = useContext(AuthContext);

    const HandleSignOUt = () => {
        userLogOut()
            .then(res => {
                console.log('User Logged out successfully');
            })
            .catch(error => {
                console.log("ERROR", error.message);
            })
    }
    return (
        <div className="flex justify-between items-center">
            <div className="empty">
                {user && user?.email}
            </div>
            <div className="nav space-x-3 text-gray-500 ml-5">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className="login flex items-center gap-3">
                {
                    user && user?.email ?
                        <>
                            <img src={demUser} alt="" />
                            <button className="bg-black text-white rounded-none py-2 px-5 " onClick={HandleSignOUt}>Log Out</button>
                        </>
                        :

                        <Link to={'/auth/login'} className="bg-black text-white rounded-none py-2 px-5 ">Login</Link>
                }


            </div>
        </div>
    );
};

export default Navbar;