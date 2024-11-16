import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import { authContext } from '../Context/AuthContext'

const Login = () => {
  const {setToken} = useContext(authContext)
 const [isLoading , setIsLoading] = useState(false)



let navigate = useNavigate(); 

async function handelLogin(formValues){
setIsLoading(true)
try {
 const res =  await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin` , formValues)
  console.log(res.data.message)
  toast.success(res.data.message)
  setIsLoading(false)
  navigate('/')

  setToken(res.data.token);
  localStorage.setItem("tkn" , res.data.token);
  

} catch (error) {
  console.log(error);
  toast.error(error.response.data.message)

  setIsLoading(false)
  
}
}

const validation = Yup.object().shape({
    email: Yup.string()
    .required("Email is required")
    .email("Enter valid Email"),
    password: Yup.string()
    .required("password is required")
    .matches(/^[A-Z][a-z0-9]{3,10}$/ , "password must be start uppercase")
  });

 let formik = useFormik({
  initialValues:{
    email:'',
    password:''
  },
  validationSchema : validation ,
  onSubmit:handelLogin ,
 });
  return <>
  <div className='py-6 mx-auto max-w-lg'>
    <h1 className='text-4xl text-green-600 font-bold mb-6'>Login Now :</h1>
  <form onSubmit={formik.handleSubmit}>
 

  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "/>
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email address :</label>
  </div>

  {formik.errors.email && formik.touched.email ? (<div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">Error!</span> {formik.errors.email}
</div>) : ("") }

  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "/>
      <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Password :</label>
  </div>

  {formik.errors.password && formik.touched.password ? (<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">Error!</span> {formik.errors.password}
</div>) : ("") }



  <button  type="submit" className="mb-5 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
    {isLoading ? <i className='fa-solid fa-spinner fa-spin text-white'></i> : 'Login'}</button>
  </form>
  <Link className='text-xl mt-5 hover:text-green-700 hover:underline' to='/forgetpassword'>Forget Password ?</Link>
  </div>
  </>  
}

export default Login