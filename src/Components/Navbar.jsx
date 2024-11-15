import { Link } from "react-router-dom";
import user from '../assets/user.png'


const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="empty"></div>
            <div className="nav space-x-3 text-gray-500">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className="login flex items-center gap-3">
                <img src={user} alt="" />
                <Link to={'/login'} className="bg-black text-white rounded-none py-2 px-5 ">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;