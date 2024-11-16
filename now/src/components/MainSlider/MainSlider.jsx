import React from 'react'
import Slider from "react-slick";
import mainImg from './../../assets/images/slider-image-3.jpeg'
import secImg from './../../assets/images/slider-image-1.jpeg'
import thrImg from './../../assets/images/slider-image-2.jpeg'
import groImg from './../../assets/images/grocery-banner.png'
import groImg1 from './../../assets/images/grocery-banner-2.jpeg'


const MainSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false
  };

  return <>
  
  <div className="row">
    <div className="w-3/4">
    <Slider {...settings}>
      <div>
       <img src={mainImg} className='w-full h-[400px] rounded-md' alt=''/>
      </div>
      <div>
      <img src={groImg1} className='w-full h-[400px]' alt=''/>
      </div>
      <div>
      <img src={groImg} className='w-full h-[400px]' alt=''/>
      </div>
    </Slider>
    </div>
    <div className="w-1/4">
    <img src={secImg} className='w-full h-[200px]' alt="" />
    <img src={thrImg} className='w-full h-[200px]' alt="" />
    </div>
  </div>
  </>  
}

export default MainSlider