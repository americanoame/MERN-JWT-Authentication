import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Register() {

  const { register, formState: {errors}, handleSubmit,} = useForm();
  const onSubmit = (data) => console.log(data);

   const registerSubmit = async(data) => {
    if(data.password === data.cpassword) {
         const userData = {
           user : data.user,
           email: data.email,
           password : data.password
         }
         console.log(userData);
    }else{
       alert('Password does not match')
    }
   }



  return (

<div className='login-style py-5'>

<div class="form-container">
<form onSubmit={handleSubmit(onSubmit)} className='form-style mt-4'>
    <h1 className="text-center">SignUp<span className='symbols'>&#128275;</span></h1>
        <div className="mb-3">
        <h5>Name</h5>
               <input type="name" className='form-control b-ground' placeholder='Enter Name'
                 {...register('name',{required: true, minLength: 6})} />
              <error>
               {errors.name?.type && <p className='text-danger mt-1'>Name should be at least 6 characters</p>}
               </error>
        </div>
        
        <div className="mb-3">
        <h5>Email address</h5>
              <input type="email" className='form-control' placeholder='Enter email' 
               {...register('email', {required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
                <error>    
                 {errors.email?.type === 'required' && <p className='text-danger mt-1'>Email is required</p>}
                 {errors.email?.type === 'pattern' && <p className='text-danger mt-1'>Entered Email is in wrong format</p>}
              </error>
        </div>

        <div className="mb-3">
        <h5>Password</h5>
               <input type="password" className='form-control' placeholder=' 
                Password' {...register('password', {required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/
                })} />

               <error>    
                  {errors.password?.type === 'required' && <p className='text-danger mt-1'>Password must be at least 8 character </p>}
                  {errors.password?.type === 'pattern' && <p className='text-danger mt-1'>Should contain at least one uppercase, lowercase, number and special character</p>}
               </error>
             </div>

             <div className="mb-3">
               <h5>Confirm Password</h5>
               <input type="password" className='form-control' placeholder=' 
              Conform Password' {...register('cpassword', {required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/
                })} />

               <error>    
                  {errors.password?.type === 'required' && <p className='text-danger mt-1'>Password must be at least 8 character </p>}
                 {errors.password?.type === 'pattern' && <p className='text-danger mt-1'>Should contain at least one uppercase, lowercase, number and special character</p>}
               </error>
             </div>
        
             <div className="d-flex justify-content-center ">
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


    // <div className='row login-style py-5'>
    //   <div className="d-flex justify-content-center">
    //     <div className="col-12 col-sm-8 col-lg-6 mx-auto">
    //       <h1 className="text-center">SignUp <span className='symbols'>&#128511;</span></h1>
    //       <form onSubmit={handleSubmit(onSubmit)} className='form-style mt-4'>
    //         <div className='form-group mt-2'>
    //           <h5>Name</h5>
    //           <input type="name" className='form-control' placeholder='Enter Name'
    //             {...register('name',{required: true, minLength: 6})} />
    //           <error>
    //             {errors.name?.type && <p className='text-danger mt-1'>Name should be at least 6 characters</p>}
    //           </error>
    //         </div>

    //         <div className='form-group mt-4'>
    //           <h5>Email address</h5>
    //           <input type="email" className='form-control' placeholder='Enter email' 
    //           {...register('email', {required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
    //             <error>    
    //              {errors.email?.type === 'required' && <p className='text-danger mt-1'>Email is required</p>}
    //              {errors.email?.type === 'pattern' && <p className='text-danger mt-1'>Entered Email is in wrong format</p>}
    //           </error>
    //         </div>

    //         <div className='form-group mt-4'>
    //           <h5>Password</h5>
    //           <input type="password" className='form-control' placeholder=' 
    //            Password' {...register('password', {required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/
    //            })} />

    //           <error>    
    //              {errors.password?.type === 'required' && <p className='text-danger mt-1'>Password must be at least 8 character </p>}
    //              {errors.password?.type === 'pattern' && <p className='text-danger mt-1'>Should contain at least one uppercase, lowercase, number and special character</p>}
    //           </error>
    //         </div>

    //         <div className='form-group mt-4'>
    //           <h5>Confirm Password</h5>
    //           <input type="password" className='form-control' placeholder=' 
    //          Conform Password' {...register('cpassword', {required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/
    //            })} />

    //           <error>    
    //              {errors.password?.type === 'required' && <p className='text-danger mt-1'>Password must be at least 8 character </p>}
    //              {errors.password?.type === 'pattern' && <p className='text-danger mt-1'>Should contain at least one uppercase, lowercase, number and special character</p>}
    //           </error>
    //         </div>


    //         <div>
    //           <button className='mt-4 btn-btn'>Submit</button>
    //         </div>

    //         <span className='sign-up-link'>
    //           Already Signup? <Link to='/login'>Login</Link>
    //         </span>
    //       </form>
    //     </div>
    //   </div>
    // </div>









// handleSubmit on line 10

// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|
//                     (".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|
//                     (([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// {...register('user', { required: true, minLength: 6 })} />
//               {errors.user && <p className='text-danger mt-1'>Name should be of at least 6 characters</p>}


// required {...register('email',
//                 {
//                   required: true,
//                   pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

//                 })} />

//               {errors.email && <p className='text-danger mt-1'>Please enter your correct email</p>}


// {...register('password',
//                 {
//                   required: true,
//                   pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
                  
//                 })} />
//                 {errors.password && <div>
//                   <p className='text-danger mt-1'>Password should be of length 6-20</p>
//                   <p>Should contain at least one uppercase, lowercase, number and special character</p>
//                 </div>
//               }


// {...register('cpassword',
//                 {
//                   required: true,
//                   pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
                  
//                 })} />
//                 {errors.password && <div>
//                   <p className='text-danger mt-1'>Password should be of length 6-20</p>
//                   <p>Should contain at least one uppercase, lowercase, number and special character</p>
//                 </div>
//               }
