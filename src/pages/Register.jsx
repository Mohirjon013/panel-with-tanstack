import { Button, Input } from 'antd'
import { useFormik } from 'formik';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginSchema } from '../validation/loginSchema';
import { Context } from '../context/AuthContext';
import Loading from "../assets/images/loading.png"
import toast, { Toaster } from 'react-hot-toast';


function register() {

  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const {setRegister} = useContext(Context)

  const {values, errors, handleBlur,handleChange, handleSubmit, touched} = useFormik({
    initialValues: {
      username: "",
      useremail: '',
      password: ''
    },
    validationSchema:LoginSchema,
    onSubmit:(data) => {
      const newData = data
      setIsLoading(true)
      toast.success(`Successfully registered "${newData.username.toUpperCase()}"`)
      setTimeout(() => {
        setRegister(newData)
        navigate(-1)
        setIsLoading(false)
      }, 800);
      // console.log(data);
      
    }
  })
  // console.log(errors);
  
  




  return (
    <>
      <Toaster position="top-right" reverseOrder={false}/>
      <form onSubmit={handleSubmit} autoComplete='off' className='w-[420px] mx-auto mt-[50px]'>
        <h2 className='text-[25px] font-bold'>Account Signup</h2>
        <div className="w-[350px] mt-5 mb-[30px]">
          <p className='text-[#8692A6] text-[16px] '>Become a member and enjoy exclusive promotions.</p>
        </div>
        <div className="flex flex-col gap-[18px]">
          <label className='w-full'>
            {touched.username && errors.username ? <span className='text-red-500 text-[16px]'>{errors.username}</span> : <span className='text-[#696F79] text-[16px]'>User name</span> }
            <input value={values.username} onChange={handleChange} onBlur={handleBlur} id='username' name='username' className={` ${errors.username && touched.username ? "border-red-400 placeholder:text-red-400" : ""} border-[1px] rounded-md w-full outline-none  p-3`} size='large' type='text' placeholder='Enter your name'  />
          </label>
          <label className='w-full'>
            {touched.useremail && errors.useremail ? <span className='text-red-500 text-[16px]'>{errors.useremail}</span> : <span className='text-[#696F79] text-[16px]'>Email address</span> }
            <input value={values.useremail} onChange={handleChange} onBlur={handleBlur} id='useremail' name='useremail' className={` ${errors.useremail && touched.useremail ? "border-red-400 placeholder:text-red-400" : ""} border-[1px] rounded-md w-full outline-none  p-3`}  size='large' type='email' placeholder='Enter your email'  required />
          </label>
          <label className='w-full'>
            {touched.password && errors.password ? <span className='text-red-500 text-[16px]'>{errors.password}</span> : <span className='text-[#696F79] text-[16px]'> Password</span> }
            <input value={values.password} onChange={handleChange} onBlur={handleBlur} id='password' name='password' className={` ${errors.password && touched.password ? "border-red-400 placeholder:text-red-400" : ""} border-[1px] rounded-md w-full outline-none  p-3`}  type='password' size='large' placeholder='Enter your password'  required />
          </label>
          <Button size='large' htmlType='submit'  className='w-full text-white bg-[#2C73EB] py-4'>
          {isLoading ? <img className='mx-auto scale-[0.5]' src={Loading} alt='loading' /> : "Continue..."}

          </Button>
        </div>
        <p className='text-[#696F79] text-[16px] px-[10%] mt-[43px]'>Did you remain your account ? <button onClick={() => navigate(-1)}  className='text-[#2C73EB]' >Back to login</button> </p>
      </form>
    </>
  )
}

export default register
