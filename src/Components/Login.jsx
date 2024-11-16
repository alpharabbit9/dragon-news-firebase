import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';



const Login = () => {

    const {userLogin,setUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const HandleLogin = (e) =>{

        

        e.preventDefault();

        
        const email = e.target.email.value ; 
        const password = e.target.password.value ;

        console.log(email,password);

        userLogin(email,password)
        .then(res =>{
           const user = res.user ;
            setUser(user)
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            alert(error.message)
        })



    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center py-3'>Log in your account</h2>
                <hr className='mt-3' />
                <form onSubmit={HandleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                        name='email'
                        type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                        name='password' type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-[#403F3F]">Login</button>
                    </div>
                </form>

                <p  className='font-semibold'>Don't Have an account ? <Link className='text-red-700' to={'/auth/register'}>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;