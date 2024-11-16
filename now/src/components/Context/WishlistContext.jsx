import axios from "axios"
import { createContext, useContext, useEffect, useState ,  } from "react"
import toast from "react-hot-toast"


export const wishContext = createContext()
const WishContextProvider = ({children}) => {
const [productId ,setProductId] = useState(0)
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);



  let headers = {
    token: localStorage.getItem('tkn')
  }

  async function getLoggedUserWish() {
    try {
      const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{headers})
      console.log(data.data);
    
      setProductId(data._id)
      setProducts(data.data)
      setCount(data.count)
      return data;
    } catch (error) {
      console.log(error)
    }
  }

  async function addProductToWish(productId){
    try {
  const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
    productId : productId
  },{headers:headers})
  toast.success(data.message)
  setProducts(data);
  console.log(data);

  getLoggedUserWish();
  return data
    } catch (error) {
      console.log(error)
      // toast.error(data.message)
  
    } 
  }

 

   async function deleteWish(productId){
    try{const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{headers})
    console.log(data.data)
    setProducts(data.data)
    
   

    return data;
   }catch (error){
     console.log(error);
   }
  }

 
  


useEffect(()=>{
  if(localStorage.getItem("tkn") != null){
  getLoggedUserWish()}},[])
  return (
    <wishContext.Provider value={{getLoggedUserWish , addProductToWish  , deleteWish, setProducts , count, products , productId}}>
      {children}
      </wishContext.Provider>
  )
}

export default WishContextProvider