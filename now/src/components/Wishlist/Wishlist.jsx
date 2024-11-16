import React, { useContext, useEffect, useState } from 'react'
import { wishContext } from '../Context/WishlistContext'
import {cartContext} from '../Context/CartContext'
import { Hourglass } from 'react-loader-spinner';


const Wishlist = () => {
const {getLoggedUserWish , deleteWish,setProducts , products , productId}= useContext(wishContext);
const {addProductToCart} = useContext(cartContext);
 const [load , setLoad] = useState(false)

async function getWish(){
  setLoad(true)
 await getLoggedUserWish();
 setLoad(false)
}

async function deletepro(){
  await deleteWish(productId)
}

async function addCart(productId){
  await addProductToCart(productId)
}

 useEffect(()=>{getWish()} , [])


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
 <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
   <h2 className='text-3xl text-green-600 py-6 text-center'>Wishlist</h2>

   <table className="w-3/4 mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
     <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
       <tr>
         <th scope="col" className="px-16 py-3">
           <span className="sr-only">Image</span>
         </th>
         <th scope="col" className="px-6 py-3">
           Product
         </th>
         <th scope="col" className="px-6 py-3">
           Price
         </th>
         <th scope="col" className="px-6 py-3">
           Action
         </th>
       </tr>
     </thead>
     <tbody>
       {products?.map((product)=>
       <tr key={product.id}  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
       <td className="p-4">
         <img src={product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.category.name}/>
       </td>
       <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
         
       </td>
      
       <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
       <span> {product.price}  EGP</span>
       </td>
       <td className="px-6 py-4">
         <span onClick={deletepro} className="cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline text-center">
         <i class="fa-solid fa-trash-can text-red-600"></i> Remove</span>
         <span onClick={()=>addCart(product.id)} className="cursor-pointer font-medium text-green-600 dark:text-green-500 hover:underline block mt-2">
         <i class="fa-solid fa-cart-plus text-green-500"></i> Add to Cart</span>

       </td>
     </tr>)}
      
      
     
       
     </tbody>
   </table>
 </div>
 </section>
 
   </>  
}

export default Wishlist