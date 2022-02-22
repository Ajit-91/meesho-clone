import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Home from '../pages/supplier/Home'
import Catalogs from '../pages/supplier/Catalogs'
import AddCatalog from '../pages/supplier/AddCatalog'

const SupplierLayout = () => {
  return (
    <div>
      <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/catalogs' element={<Catalogs />} />
          <Route path='/add-catalog' element={<AddCatalog />} />
          <Route path='*' element={<Navigate to="/home" />} />
      </Routes>
    </div>
  )
}

export default SupplierLayout