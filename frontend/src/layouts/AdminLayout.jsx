import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import AdminPanel from '../pages/admin/AdminPanel'

const AdminLayout = () => {
  return (
    <div>
      <Routes>
        <Route path='/admin-panel' element={<AdminPanel />} />
        <Route path='*' element={<Navigate to="/admin-panel" />} />
      </Routes>
    </div>
  )
}

export default AdminLayout