import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { cartContext } from '../Context/CartContext'
import { wishContext } from '../Context/WishlistContext';
import { Hourglass } from 'react-loader-spinner'






const RecentProduct = () => {
  const {addProductToWish , productId}= useContext(wishContext);
  const {addProductToCart} = useContext(cartContext)
  const [loading , setLoading] = useState(false)
  const [load , setLoad] = useState(false)

 const [recentProduct , setRecentProduct] = useState([])

async function getRecentProduct(){
setLoad(true)
   try {
    const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    console.log({data})
    setRecentProduct(data.data)
    setLoad(false)
   } catch (error) {
    console.log(error)
    setLoad(false)
     
   }
 }

 async function addProduct(id){
  setLoading(true)
const res =  await addProductToCart(id);

  if(res){
    setLoading(false)
  }else{
    setLoading(false)
  }
}

async function addWish(id){
    const data = await addProductToWish(id);
    console.log(data);
}


 useEffect(()=>{getRecentProduct()} , [])


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
  <div className='row'>
    {recentProduct.map((product)=> <div key={product.id} className="lg:w-1/6 px-4">
    <div className="product py-4 relative hover:border-2 hover:border-green-600 p-2 hover:rounded-lg">
      <i className='fas fa-heart hover:text-red-600 text-2xl absolute -top-0 end-1 ' onClick={()=>addWish(product.id)} ></i>
      <Link to={`/productdetails/${product.id}/${product.category.name}`}>

  <img className='w-full' src={product.imageCover} alt={product.title.split(" ").slice(0, 3).join(" ")}/>

  <span className='block text-green-600 font-light'>{product.category.name}</span>
  <h3 className='text-lg text-gray-600 mb-6'>{product.title.split(" ").slice(0, 3).join(" ")}</h3>

  <div className="flex justify-between items-center">
    <span>{product.price} EGP</span>
    <span>{product.ratingsAverage} <i className='fas fa-star text-yellow-400'></i></span>
  </div>
</Link>
   <button onClick={()=>addProduct(product.id)} className='btn'>{loading? <i className='fas fa-spin fa-spinner text-white'></i> :'add to Cart'}</button>

    </div>
    </div>)}
    
  </div>
  </>  
}

export default RecentProduct