import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function Register() {

  const { register, formState: { errors }, handleSubmit, } = useForm();
  // const onSubmit = (data) => console.log(data);

  const registerSubmit = async (data) => {
    console.log(data);
    if (data.password === data.cpassword) {
      const userData = {
        user: data.name,
        email: data.email,
        password: data.password
      }
      console.log(userData);
      await axios.post('auth/register', userData)
        .then(log => {
          if (log.data.success) {
            alert('User registered successfully')

          } else {

            alert('Something went wrong')
          }
        })
        .catch(error => {
          alert(error)
        })
    } else {
      alert('Password does not match')
    }
  }

  return (

    <div className='login-style py-5'>

      <div className="form-container">
        <form onSubmit={handleSubmit(registerSubmit)} className='form-style mt-4'>
          <h1 className="text-center">SignUp<span className='symbols'>&#128275;</span></h1>
          <div className="mb-3">
            <h5>Name</h5>
            <input type="name" className='form-control b-ground' placeholder='Enter Name'
              {...register('name', { required: true, minLength: 6 })} />
            <div>
              {errors.name?.type && <p className='text-danger mt-1'>Name should be at least 6 characters</p>}
            </div>
          </div>

          <div className="mb-3">
            <h5>Email address</h5>
            <input type="email" className='form-control' placeholder='Enter email'
              {...register('email', { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
            <div>
              {errors.email?.type === 'required' && <p className='text-danger mt-1'>Email is required</p>}
              {errors.email?.type === 'pattern' && <p className='text-danger mt-1'>Entered Email is in wrong format</p>}
            </div>
          </div>

          <div className="mb-3">
            <h5>Password</h5>
            <input type="password" className='form-control' placeholder=' 
                Password' {...register('password', {
              required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/
            })} />

            <div className='text-danger mt-1'>
              {errors.password?.type === 'required' && <p>Password must be at least 8 character </p>}
              {errors.password?.type === 'pattern' && <p>Should contain at least one uppercase, lowercase, number and special character</p>}
            </div>
          </div>

          <div className="mb-3">
            <h5>Confirm Password</h5>
            <input type="password" className='form-control' placeholder=' 
              Conform Password' {...register('cpassword', {
              required: true, validate: (value, formValues) => value === formValues.password
            })} />

            <div className='text-danger mt-1'>
              {errors.cpassword?.type === 'validate' && <p >Password must match with the previous one </p>}
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button className='mt-2 btn-btn'>Submit</button>
          </div>

          <span className='sign-up-link'>
            Already Signup? <Link to='/login'>Login</Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Register;























