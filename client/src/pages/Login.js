import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email, password
        }

        try {
            axios.post('/auth/login', userData)
                .then(log => {
                    if (log.data.success) {
                        toast.success(log.data.msg, {
                            position: "top-right",
                            autoClose: 3001,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        // console.log(userData);
                    } else {
                        toast.error(log.data.msg, {
                            position: "top-right",
                            autoClose: 3001,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='login-style py-5'>
            <div className="form-container">
                <form onSubmit={loginSubmit} className='form-style mt-4'>
                    <h1 className="text-center">Login<span className='symbols'>&#128275;</span></h1>
                    <div className="mb-3">
                        <h5>Email</h5>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control b-ground' placeholder='Enter 
                     Your Email' />
                    </div>
                    <div className="mb-3">
                        <h5>Password</h5>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' placeholder='Enter 
                     Your Password' />
                    </div>

                    <div className="d-flex justify-content-center">
                        <button className='mt-2 btn-btn'>Submit</button>
                    </div>

                    <span className='login-link sign-up-link'>
                        If you don't an account! <Link to='/register'>SignUp</Link>
                    </span>
                </form>
            </div>
            <ToastContainer />
        </div>

    )
}

export default Login








