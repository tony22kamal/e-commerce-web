import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Slider from "react-slick";


const CategorySlider = () => {
 const [categoriesSlider , setCategoriesSlider] = useState([])

 async function getCategoriesSlider(){

  try {
   const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
   console.log({data})
   setCategoriesSlider(data.data)
  } catch (error) {
   console.log(error)
    
  }
}

 useEffect(()=>{
  getCategoriesSlider();
 } , [])

 var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 3,
  autoplay:true
};

  return <>
  <div className='p-5'>
    <h2 className='text-xl font-medium text-gray-600 py-4'>Shop Category Popular</h2>
   <Slider {...settings}>
  {categoriesSlider.map((category)=> <div key={category._id}>
    <img className='w-full category-img' src={category.image} alt={category.name}/>
    <h3 className='text-center mt-2 font-light'>{category.name}</h3>
  </div>)}
    </Slider>
    </div>
  </>  
}

export default CategorySlider