import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import React from 'react'


const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>

        <div className="context min-h-screen">
            {children}
        </div>

        <Footer/>
    </div>
  )
}

export default Layout