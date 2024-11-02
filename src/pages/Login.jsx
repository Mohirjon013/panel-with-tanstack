import React, { useContext, useState } from 'react'
import { Context } from '../context/AuthContext'
import { Button, Input } from 'antd'
import { Link } from 'react-router-dom'
import Loading from "../assets/images/loading.png"
import toast, { Toaster } from 'react-hot-toast'


function Login() {
    const [isLoading, setIsLoading] = useState(false)
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {register, setToken} = useContext(Context)


    function handleSubmit(e){
        e.preventDefault()
        const data = {
            email:e.target.email.value.trim(),
            password:e.target.password.value.trim()
        }
        if(register){
            if(data.email == register.useremail && data.password == register.password){
                setIsLoading(true)
                toast.success("Welcome to Dashboard")
                setTimeout(() => {
                    setIsLoading(false)
                    setToken(data)
                }, 800);
            }
            else{
                setIsLoading(true)
                setTimeout(() => {
                    toast.error("Invalid email or password")
                    setIsLoading(false)
                    setEmail("")
                    setPassword("")
                }, 800);     
            }
        }
        else{
            if(data.email == "mohirjon@gmail.com" && data.password == "1234"){
                setIsLoading(true)
                toast.success("Welcome to Dashboard")
                setTimeout(() => {
                    setIsLoading(false)
                    setToken(data)
                }, 800);
            }
            else{
                setIsLoading(true)
                setTimeout(() => {
                    toast.error("Invalid email or password")
                    setIsLoading(false)
                    setEmail("")
                    setPassword("")
                }, 800);            
            }
        }

        
    }
    return (   
        <>
            <Toaster position="top-right" reverseOrder={false}/>
            <form onSubmit={handleSubmit} autoComplete='off' className='w-[420px] mx-auto mt-[50px]'>
                <h2 className='text-[25px] font-bold'>Account Login</h2>
                <div className="w-[350px] mt-5 mb-[30px]">
                    <p className='text-[#8692A6] text-[16px] '>If you are already a member you can login with your email address and password.</p>
                </div>
                <div className="flex flex-col gap-[18px]">
                    <label className='w-full'>
                        <span className='text-[#696F79] text-[16px]'>Email address</span>
                        <Input className='py-3' value={email} onChange={(e) => setEmail(e.target.value)} name='email' size='large' type='text' placeholder='Enter your email' allowClear required />
                    </label>
                    <label className='w-full'>
                        <span className='text-[#696F79] text-[16px]'>Password</span>
                        <Input className='py-3' value={password} onChange={(e) => setPassword(e.target.value)} name='password' type='password' size='large' placeholder='Enter your password' allowClear required />
                    </label>
                    <Button size='large' htmlType='submit'  className='w-full text-white bg-[#2C73EB] py-4'>
                        {isLoading ? <img className='mx-auto scale-[0.5]' src={Loading} alt='loading' /> : "Register Account"}
                    </Button>
                </div>
                <p className='text-[#696F79] text-[16px] px-[18%] mt-[43px]'>Dont have an account ? <Link to={"/register"} className='text-[#2C73EB]' >Sign up here</Link> </p>
            </form>
            
        </> 
    )
}

export default Login
