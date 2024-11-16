import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { cartContext } from '../Context/CartContext'

const Payment = () => {
 const [isLoading , setIsLoading] = useState(false)
 const [city , setCity] = useState("")
 const [phone , setPhone] = useState("")
 const [details , setDetails] = useState("")

const {cartId , setProducts,setNumOfItems,setTotalPrice} = useContext(cartContext)

 let headers = {
  token: localStorage.getItem('tkn')
}

async function cashPayment(){
  
  const x={
   
      shippingAddress:{
          details,
          phone,
          city,
          },
  };

  try {
    
 const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}` ,x,{headers})
setNumOfItems(0);
setTotalPrice(0);
setProducts([]);
toast.success(data.status);
console.log(data);

  } catch (error) {
    console.log(error);
    toast.error("error cash payment")
    
  }
  
  }


async function onlinePayment(){
  const x={
   
    shippingAddress:{
        details,
        phone,
        city,
        },
};

try {
  const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://http://localhost:5173`,x,{headers})
 window.open(data.session.url);
 toast.success(data.status);
 console.log(data);
 
   } catch (error) {
     console.log(error);
     toast.error("error cash payment")
     
   }
}


 useEffect(()=>{} , [])

  return <>
   <section className='py-2'>
  <div className="row">
    <h2 className=' text-green-600  mx-auto text-3xl font-semibold'>Payment</h2>
  </div>
   <div className="w-full md:w-[70%] mx-auto">
  <div className="relative z-0 w-full mb-5 group">
      <input onChange={(e)=> setCity(e.target.value)} type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "/>
      <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your city :</label>
  </div>
  
  <div className="relative z-0 w-full mb-5 group">
      <input onChange={(e)=> setPhone(e.target.value)} type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "/>
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your phone :</label>
  </div>


  
<div>
  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Details</label>
  <textarea onChange={(e)=> setDetails(e.target.value)} id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Write your thoughts here..." defaultValue={""}/>
</div>

<button 
onClick={cashPayment}
className="mt-6 me-3 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
{isLoading ? <i className='fa-solid fa-spinner fa-spin text-white'></i> : 'Cash Payment'}</button>
 
<button 
onClick={onlinePayment}
className="mt-6 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
{isLoading ? <i className='fa-solid fa-spinner fa-spin text-white'></i> : 'Online Payment'}</button>
  </div>
   </section>
  </>  
}

export default Payment