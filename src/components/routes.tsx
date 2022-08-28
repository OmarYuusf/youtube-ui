import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/home'

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={'search'} />} />
      <Route path="/search" element={<Home />} />
      <Route
        path="*"
        element={
          <div>
            <h2>404 Page not found</h2>
          </div>
        }
      />
    </Routes>
  )
}

export default RoutesComponent
