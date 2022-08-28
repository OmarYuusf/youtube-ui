import React from 'react'
import Navbar from '../navbar/navbar'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
    </div>
  )
}
export default Layout
