import React, { useContext, useEffect, useState } from 'react'
import logo from './../../assets/images/freshcart-logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { authContext } from '../Context/AuthContext'
import { cartContext } from '../Context/CartContext'
import { wishContext } from '../Context/WishlistContext'


const Navbar = () => {
const {count} = useContext(wishContext);
  const {numOfItems} = useContext(cartContext);
 const [counter , setCounter] = useState(0)
 const [open , setOpen] = useState(false)
 const navigate = useNavigate()

 useEffect(()=>{} , [])
 const {token , setToken} = useContext(authContext);

 function logOut () {
  localStorage.removeItem("tkn");
  setToken(null);
   navigate('/login')
 }

  return <>
  <nav className='bg-gray-100 text-center static lg:fixed top-0 left-0 right-0 z-50 '>
    <div className='container justify-between items-center mx-auto py-2 flex flex-col lg:flex-row'>
      <div className='flex flex-col lg:flex-row items-center'>
        <img src={logo} alt='' className='w-[150px]'/>

        <ul className='flex flex-col lg:flex-row items-center'>
         {token ? (<>
          <li className='py-2'><NavLink className='mx-2 text-lg text-slate-900 font-light' to=''>Home</NavLink></li>
          <li className='py-2 relative'><NavLink className='mx-2 text-lg text-slate-900 font-light' to='/cart'>Cart    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -end-1 dark:border-gray-900">{numOfItems}</div>
          </NavLink></li>
          <li className='py-2'><NavLink className='mx-2 text-lg text-slate-900 font-light' to='/products'>Products</NavLink></li>
          <li className='py-2'><NavLink className='mx-2 text-lg text-slate-900 font-light' to='/categories'>Categories</NavLink></li>
          <li className='py-2'><NavLink className='mx-2 text-lg text-slate-900 font-light' to='/brands'>Brands</NavLink></li>
         </> ): ("")}
        </ul>
      </div>
      <div>
      <ul className='flex flex-col lg:flex-row items-center'>
        {token? (<li className='py-2 relative'><NavLink className='mx-2 text-lg text-slate-900 font-light' to='/wishlist'><i className='fas fa-heart text-red-600 fa-2xl'></i>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xl font-bold text-white pe-6 border-white rounded-full -top-15 start-7 dark:border-gray-900">{count}</div>
        </NavLink></li>):("")}
        <li className='flex items-center py-2'>
      <i className='fab mx-2 fa-instagram'></i>
      <i className='fab mx-2 fa-facebook-f'></i>
      <i className='fab mx-2 fa-tiktok'></i>
      <i className='fab mx-2 fa-twitter'></i>
      <i className='fab mx-2 fa-linkedin'></i>
      <i className='fab mx-2 fa-youtube'></i>
        </li>
        {token ? (<>
          <li className='py-2'><button onClick={logOut} className='mx-2  text-lg text-slate-900 font-light' >LogOut</button></li>
        </>): (<>
        
          <li className='py-2'><NavLink className='mx-2  text-lg text-slate-900 font-light' to='/login'>Login</NavLink></li>
          <li className='py-2'><NavLink className='mx-2  text-lg text-slate-900 font-light' to='/register'>Register</NavLink></li>
        </>)}
        </ul>
      </div>
    </div>
  </nav>
  </>  
}

export default Navbar