import { Link } from 'react-router-dom'

function Signup() {

 const handleSubmit = () => {

 }

  return (
    <div className='row login-style py-5'>
      <div className="d-flex justify-content-center">
        <div className="col-12 col-sm-8 col-lg-6 mx-auto">
          <h1 className="text-center">SignUp <span className='symbols'>&#128511;</span></h1>
          <form className='form-style mt-4'>
            <div className='form-group mt-2'>
              <h5>Name</h5>
              <input type="email" className='form-control' placeholder='Enter Name'
                required />
            </div>

            <div className='form-group mt-4'>
              <h5>Email address</h5>
              <input type="password" className='form-control' placeholder='Enter 
                 email' required />
            </div>

            <div className='form-group mt-4'>
              <h5>Password</h5>
              <input type="password" className='form-control' placeholder=' 
               Password' required />
            </div>

            <div className='form-group mt-4'>
              <h5>Confirm Password</h5>
              <input type="password" className='form-control' placeholder=' 
               Conform Password' required />
            </div>

            <div>
              <button className='mt-4 btn-btn'>Submit</button>
            </div>

            <span className='sign-up-link'>
              Already Signup? <Link to='/login'>Login</Link>
            </span>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Signup;


// handleSubmit on line 10