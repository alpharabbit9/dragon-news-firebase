import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const {createNewUser,setUser} = useContext(AuthContext) ;

    const [errorMessage , setErrorMessage]  = useState('');

    const HandleRegister = (e) => {

        e.preventDefault() ;

        const name = e.target.name.value ;
        const email = e.target.email.value ; 
        const password = e.target.password.value ;
        
        console.log({name ,email, password});

        setErrorMessage('')

        createNewUser(email , password)
        .then(res => {
            const user = res.user ;
            setUser(user)
            console.log(user)
        })
        .catch(Error =>{
            console.log("ERROR",Error.message)
            setErrorMessage(Error.message);
        })



    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center py-3'> Register in your account</h2>
                <hr className='mt-3' />
                <form onSubmit={HandleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                        name='name'
                            placeholder="name"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text"
                        name='photo'
                            placeholder="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"  name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-[#403F3F]">Register</button>
                    </div>
                </form>

                {
                    errorMessage && <p className='text-red-900 mb-3'>{errorMessage}</p>
                }

                <p className='font-semibold'>Already Have an account ? <Link className='text-red-700' to={'/auth/login'}>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;