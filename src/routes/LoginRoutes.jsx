import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'

function LoginRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default LoginRoutes
