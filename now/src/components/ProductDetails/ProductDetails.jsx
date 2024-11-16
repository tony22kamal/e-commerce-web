import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Slider from "react-slick";
import { cartContext } from '../Context/CartContext';
import toast from 'react-hot-toast';
import { wishContext } from '../Context/WishlistContext';
import { data } from 'autoprefixer';


const ProductDetails = () => {
  const {addProductToWish}= useContext(wishContext);

  const {addProductToCart} =useContext(cartContext);

  const [loading , setLoading] = useState(false);

async function addWish(){
  const {data} = await addProductToWish(id);
  console.log(data);
  
}

  async function addProduct(){
    setLoading(true)
  const res =  await addProductToCart(id);

    if(res){
      setLoading(false)
    }else{
      setLoading(false)
    }
  }

 const [productDetails , setProductDetails] = useState(null);
 const [relatedCategory , setRelatedCategory] = useState([]);

let {id , category} = useParams();

async function getProductDetails(id){
   try {
    const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

    setProductDetails(data.data)
   } catch (error) {
    
   }
}

async function getRelatedCategory(category){
  try {
   const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  let allProduct = data.data
  let related =  allProduct.filter((product)=> product.category.name == category)
  setRelatedCategory(related)
  } catch (error) {
   
  }
}





 useEffect(()=>{getProductDetails(id);
     getRelatedCategory(category);

 } , [id , category])


 var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

var settings2 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows:true,
  autoplay:true,
};

  return <>
   <div className="row">
    <div className="w-1/4 ">
    <Slider {...settings}>
     {productDetails?.images.map((src)=> <img key={productDetails.id} className='w-full' src={src} alt={productDetails?.title}/>
 )}
    </Slider>
    </div>
    <div className="w-3/4 p-6 relative">
    <i className='fas fa-heart hover:text-red-600 text-3xl absolute -top-10 end-10 ' onClick={addWish}></i>
    <h1 className='text-gray-900 text-lg'>{productDetails?.title.split(" ").slice(0, 3).join(" ")}</h1>
    <p className='mt-4 text-gray-400'>{productDetails?.description}</p>

    <div className="flex justify-between items-center my-5">
    <span>{productDetails?.price} EGP</span>
    <span>{productDetails?.ratingsAverage} <i className='fas fa-star text-yellow-400'></i></span>

  </div>
  <button 
  onClick={addProduct}
  className='btn'>
    {loading? <i className='fas fa-spin fa-spinner text-white'></i>:'add to Cart'}
  </button>
    </div>
   </div>

  <div className="row">
    <div className="w-full">
    <Slider {...settings2}>
    {relatedCategory.map((product)=>
     <div key={product.id} className="w-1/4 px-4">
     <div className="product py-4">
       <Link to='/productdetails/${product.id}/${product.category.name}'>
   <img className='w-full' src={product.imageCover} alt={product.title.split(' ').slice(0,2).join(' ')}/>
   <span className='block text-green-600 font-light'>{product.category.name}</span>
   <h3 className='text-lg text-gray-600 mb-6'>{product.title}</h3>
 
   <div className="flex justify-between items-center">
     <span>{product.price} EGP</span>
     <span>{product.ratingAvrage} <i className='fas fa-star text-yellow-400'></i></span>
   </div>
   <button className='btn'>add to Cart</button>
 </Link>
     </div>
     </div>
    )}
    </Slider>
    </div>
  </div>
  </>  
  }

export default ProductDetails