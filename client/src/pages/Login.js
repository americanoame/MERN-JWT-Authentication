import { Link } from 'react-router-dom'
// import {useForm} from 'react-hook-form'

function Login() {

    // const onSubmit = () => {

    // }

    return (
        <div className='login-style py-5'>
            <div className="form-container">
                <form className='form-style mt-4'>
                <h1 className="text-center">Login<span className='symbols'>&#128275;</span></h1>
                    <div className="mb-3">
                        <h5>Email</h5>
                        <input type="email" className='form-control b-ground' placeholder='Enter 
                     Your Email' />
                    </div>
                    <div className="mb-3">
                        <h5>Password</h5>
                        <input type="password" className='form-control' placeholder='Enter 
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

        </div>
        
    )
}

export default Login





        


