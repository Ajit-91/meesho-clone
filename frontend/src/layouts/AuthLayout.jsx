import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import LogIn from '../pages/auth/LogIn'
import Register from '../pages/auth/Register'

const AuthLayout = () => {
  return (
    <div>
      <Routes>
          <Route path='/login' element={<LogIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='*'  element={<Navigate to='/login' />} />
      </Routes>
    </div>
  )
}

export default AuthLayout