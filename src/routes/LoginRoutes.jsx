import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  { Login, Register } from '../pages'
import LoginImg from "../assets/images/login-img.png"

function LoginRoutes() {
  return (
    <div className='w-full flex items-center'>
      <div className="w-[50%] h-[100vh] overflow-y-hidden bg-[#2C73EB]  ">
        <img className='mx-auto py-[25%]' src={LoginImg} alt="login img" width={400} height={400} />
      </div>
      <Routes className="w-[50%] h-[100vh] overflow-y-hidden">
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />

      </Routes>
    </div>
  )
}

export default LoginRoutes
