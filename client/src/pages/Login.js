import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
    return (

        <div className='row login-style py-5'>
            <div className="d-flex justify-content-center">
                <div className="col-12 col-sm-8 col-lg-6 mx-auto">
                    <h1 className="text-center">Login <span className='symbols'>&dArr;</span></h1>
                    <form className='form-style mt-4'>
                        <div className='form-group mt-2'>
                            <h5>email</h5>
                            <input type="email" className='form-control' placeholder='Enter 
                             Your Email' required />
                        </div>

                        <div className='form-group mt-2'>
                            <h5>Password</h5>
                            <input type="password" className='form-control' placeholder='Enter 
                             Your Password' required />
                        </div>

                        <div>
                            <button className='mt-2 btn-btn'>Submit</button>
                        </div>

                        <span className='sign-up-link'>
                            If you don't an account! <Link to='/register'>SignUp</Link>
                        </span>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login

// onSubmit={loginSubmit}

