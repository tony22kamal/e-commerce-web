import axios from "axios"
import { createContext, useContext, useEffect, useState ,  } from "react"
import toast from "react-hot-toast"


export const cartContext = createContext()
const CartContextProvider = ({children}) => {

    const [products, setProducts] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const [numOfItems, setNumOfItems] = useState(0);
    const [cartId , setCartId] = useState(0);




  let headers = {
    token: localStorage.getItem('tkn')
  }

  async function getLoggedUserCart() {
    try {
      const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{headers})
      console.log(data.data);
    
      setNumOfItems(data.numOfCartItems);
      setTotalPrice(data.data.totalCartPrice);
      setProducts(data.data.products); 
      setCartId(data.data._id) ;
    
      return data;
    } catch (error) {
      console.log(error)
    }
  }

  async function addProductToCart(productId){
    try {
  const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
    productId : productId
  },{headers:headers})
  toast.success(data.message)
  console.log(data);

  getLoggedUserCart();
  return data
    } catch (error) {
      console.log(error)
      // toast.error(data.message)
  
    } 
  }

  async function updateProduct(productId , count){
    try {
      const {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{count:count},{headers})
    
      setNumOfItems(data.numOfCartItems);
      setTotalPrice(data.data.totalCartPrice);
      setProducts(data.data.products);  
      setCartId(data.data._id) ;

    
      return data;
    } catch (error) {
      console.log(error)
    }
   } 

   async function deleteProduct(productId){
    try{const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{headers})
    console.log(data.data)
    setNumOfItems(data.numOfCartItems);
    setTotalPrice(data.data.totalCartPrice);
    setProducts(data.data.products); 
    setCartId(data.data._id) ;
   

    return data;
   }catch (error){
     console.log(error);
   }
  }

  async function clearCart(){
    try{const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{headers})
    console.log(data.data)

    setNumOfItems(0)
    setTotalPrice(0)
    setProducts(null);    

    return data;
      
  }catch (error){
     console.log(error);
   }
  }
  


useEffect(()=>{
  if(localStorage.getItem("tkn") != null){
  getLoggedUserCart()}},[])
  return (
    <cartContext.Provider value={{getLoggedUserCart , addProductToCart , updateProduct , deleteProduct , clearCart , products ,totalPrice, numOfItems , cartId , setProducts, setNumOfItems,setTotalPrice}}>
      {children}
      </cartContext.Provider>
  )
}

export default CartContextProvider