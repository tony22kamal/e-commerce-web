import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Hourglass } from 'react-loader-spinner';


const Brands = () => {
 const [brands , setBrands] = useState([]);
 const [load , setLoad] = useState(false);

async function getBrands() {
setLoad(true)
  try {
    const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands?limit=10`);
    console.log(data)
    setBrands(data.data)
    setLoad(false)
  } catch (error) {
    console.log(error)
    setLoad(false)
  }
}




 useEffect(()=>{
  getBrands();
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
  


  
    return <div className="row">
    {brands?.map((brand)=> <div  key={brand.id} className="lg:w-1/4 mx-auto p-4 hover:shadow-2xl hover:border-5 hover:rounded-sm hover:border-gray-400 hover:scale-110">
   <img src={brand.image} alt={brand.name} className='w-full'/>

   <h3 className='text-center text-xl text-green-500 font-medium'>{brand.name}</h3>
    </div>)}
    
  
    </div>
 
}

export default Brands