import React, { useEffect, useState } from 'react'
import RecentProduct from './../RecentProduct/RecentProduct'
import CategorySlider from '../CategorySlider/CategorySlider'
import MainSlider from '../MainSlider/MainSlider'

const Home = () => {
 const [counter , setCounter] = useState(0)

 useEffect(()=>{} , [])

  return <>
  <MainSlider/>
  <CategorySlider/>
  <RecentProduct />
  </>  
}

export default Home