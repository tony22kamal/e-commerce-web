import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
 const [counter , setCounter] = useState(0)

 useEffect(()=>{} , [])

  return <>
  <Navbar/>
  <div className='container mx-auto py-10 my-6'>
<Outlet></Outlet>
</div>
  <Footer/>
  </>  
}

export default Layout