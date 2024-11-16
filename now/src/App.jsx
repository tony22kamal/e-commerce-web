import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Brands from "./components/Brands/Brands";
import Cart from "./components/Cart/Cart";
import Categories from "./components/Categories/Categories";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import { Toaster } from "react-hot-toast";
import AuthContextProvider from "./components/Context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Payment from "./components/Payment/Payment";
import CartContextProvider from "./components/Context/CartContext";
import AllOrders from "./components/AllOrders/AllOrders";
import Wishlist from "./components/Wishlist/Wishlist";
import WishContextProvider from "./components/Context/WishlistContext";
import Forgetpassword from "./components/forgetpassword/forgetpassword";
import Resetpassword from "./components/resetpassword/resetpassword";





let r = createBrowserRouter([
  { path: "", element: <Layout />, children: [{
     index: true, element: ( <ProtectedRoute> <Home /> </ProtectedRoute> ), },
      { path: "products", element: (<ProtectedRoute> <Products /> </ProtectedRoute> ),},
      { path: "productdetails/:id/:category", element: ( <ProtectedRoute>  <ProductDetails /> </ProtectedRoute>  ), },
      { path: "wishlist", element: (  <ProtectedRoute>  <Wishlist />  </ProtectedRoute>  ), },
      { path: "brands", element: (  <ProtectedRoute>  <Brands />  </ProtectedRoute>  ), },
      { path: "cart", element: ( <ProtectedRoute>   <Cart /> </ProtectedRoute>  ), },
      { path: "payment", element: (  <ProtectedRoute>  <Payment />  </ProtectedRoute>  ), },
      { path: "allorders", element: (  <ProtectedRoute>  <AllOrders />  </ProtectedRoute>  ), },
      { path: "categories",  element: ( <ProtectedRoute>  <Categories />   </ProtectedRoute>  ), },
      { path: "login", element: <Login /> },
      { path: "forgetpassword", element: <Forgetpassword /> },
      { path: "reset", element: <Resetpassword /> },
      { path: "register", element: <Register /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  return (
    <>
      <AuthContextProvider>
      <CartContextProvider>
        <WishContextProvider>
        <Toaster />
        <RouterProvider router={r}>
        </RouterProvider>
        </WishContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
