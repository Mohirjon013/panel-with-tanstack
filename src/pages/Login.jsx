import React, { useContext } from 'react'
import { Context } from '../context/AuthContext'
import { Input } from 'antd'

function Login() {
    // const {token, register} = useContext(Context)
    return (    
        <div className='w-[600px] mx-auto mt-6 bg-slate-200'>
            <h2>Log in</h2>
            <Input  size='large' placeholder='Enter your name' allowClear required />
            <Input  size='large' placeholder='Enter your name' allowClear required />

        </div>
    )
}

export default Login
