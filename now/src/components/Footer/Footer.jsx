import amazon from '../../assets/images/Amazon_Pay_logo.svg-CDI7XK2P.png'
import express from '../../assets/images/American-Express-Color-BA04NtD8.png'
import master from '../../assets/images/MasterCard_Logo.svg-BcAmGZUm.png'
import paypal from '../../assets/images/PayPal.svg-DDSMWMUN.png'
import apple from '../../assets/images/apple-D35FP_AE.webp'
import google from '../../assets/images/en_badge_web_generic-BAXiFmDF.png'

const Footer = () => {


  return <>
  <footer className='bg-gray-200 py-9  static  left-0 right-0 bottom-0 mt-20'>
    <div className="w-full md:w-[80%]">
    <div className='lg:ps-6 ps-3'>
    <h1  className='text-4xl'>Get The Fresh Cart App</h1>
    <p className='text-gray-500 font-light py-2 '>We Will Send You a link, open it on your phone to download the app</p>
    </div>
  
    <div className="flex justify-around flex-col gap-5 lg:flex-row items-center m-10 ">
    <input type="email" id="email" class="lg:p-2.5 lg:me-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full md:w-[82%] lg:ps-10   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Email" required />
    <button className="w-full md:w-[15%] lg:px-4  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm  sm:w-auto  py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Share App Link </button>
    </div>
    <div className="flex justify-around flex-col items-center gap-20 mb-9 lg:flex-row ">
      <div  className="flex justify-around flex-col items-center lg:flex-row">
        <p  className='text-2xl mb-4 me-15 px-8  font-semibold'>PaymentPartners</p>
        <img className='w-[100px] px-1' src={amazon} alt="amazon payment" />
        <img className='w-[100px] px-1' src={express} alt="american express payment" />
        <img className='w-[100px] px-1' src={master} alt="master card payment" />
        <img className='w-[100px] px-1' src={paypal} alt="paypal payment" />
      </div>
    <div  className="flex justify-around flex-col items-center lg:ps-20 lg:ms-20 lg:flex-row ">
      <p className='text-2xl  font-semibold'>GetDeliveriesWithFreshCart</p>
      <img className='w-[100px] px-1' src={apple} alt="apple store" />
      <img className='w-[100px] px-1' src={google} alt="google play" />
    </div>
    </div>
    </div>
    </footer>
  </>  
}

export default Footer