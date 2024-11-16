import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../Context/CartContext';
import { Hourglass } from 'react-loader-spinner';




const Cart = () => {

  const { products , totalPrice , getLoggedUserCart , updateProduct , deleteProduct , clearCart}= useContext(cartContext);
  
  const [load , setLoad] = useState(false)

 
async function getCart() {
  setLoad(true)
  await getLoggedUserCart();
  setLoad(false)
}



useEffect(()=> {getCart()},[])


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
 

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <h2 className='text-3xl text-green-600 py-5 text-center'>Shop Cart</h2>
  <h3 className='text-lg font-semibold  text-center text-slate-600 mb-8'>Total Cart Price: {totalPrice} EGP</h3>
 
  <Link 
  to='/payment'
 className='text-white text-center bg-sky-700 cursor-pointer w-1/12  py-1 rounded-lg absolute top-10 start-10'>Payment </Link>
 
 <button 
 onClick={clearCart}
 className='text-white bg-red-700 cursor-pointer w-1/12  py-1 rounded-lg absolute top-10 end-10'> <i className="fa-solid text-white px-1 fa-trash-can"></i> Clear Cart</button>
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
          Qty
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
      <tr key={product.product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4">
        <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.product.title} />
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
         {product.product.title}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <button onClick={()=> updateProduct(product.product.id , product.count - 1)}
          disabled = {product.count == 0 ? true :""}
          className={`${product.count == 0 ? 'disabled:opacity-25' : ''}    inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`} type="button">
            <span className="sr-only">Quantity button</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
            </svg>
          </button>
          <div>
            <span>{product.count}</span>
          </div>
          <button onClick={()=> updateProduct(product.product.id , product.count + 1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
            <span className="sr-only">Quantity button</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
            </svg>
          </button>
        </div>
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
      <span>  {product.price} EGP</span>
      </td>
      <td className="px-6 py-4">
        <span onClick={()=> deleteProduct(product.product.id)} className="cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline">Remove</span>
      </td>
    </tr>
      )}
      
    </tbody>
  </table>
</div>


  </>  
}

export default Cart