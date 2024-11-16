import axios from 'axios';
import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { Hourglass } from 'react-loader-spinner';

const AllOrders = () => {

  const {id} = jwtDecode(localStorage.getItem('tkn'));
 const [load , setLoad] = useState(false);
 const [allOrders , setAllOrders] = useState(null);

 async function getAllOrders(){
  setLoad(true)
  try {
    const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
  console.log(data);
  
    setAllOrders(data);
    setLoad(false)
  } catch (error) {
    console.log(error);
    setLoad(false)
  }
 }

 useEffect(()=>{
  getAllOrders();
 } , [])

 if(load){
  return (
    <div className='h-screen flex flex-wrap justify-center items-center bg-slate-200'>
  <Hourglass
  visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']}
  />
    </div>
  )
 }

 return <>
   <section className='py-6'>
  <div className='w-full md:w-[80%] mx-auto'>
 {allOrders? allOrders.map((order , idx)=> <div key={idx}>

  <div className="p-5 mb-3 bg-slate-200">
 {allOrders.cartItems?.map(function(idx , item){
   return (
     <div key={idx} className='w-1/6'>
     <img src={item.product.imageCover} className='w-full' alt="" />
     </div>)}
   )
 }
    <h2>Total Order Price {order.totalOrderPrice} EGP</h2>
    <h2>Payment Method Tyep {order.paymentMethodType} </h2>
    
  </div>
 </div>):""}
  </div>
   </section>
  </>  
}

export default AllOrders