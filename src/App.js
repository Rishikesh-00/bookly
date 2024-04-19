import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./Navigation/Login";
import Register from "./Navigation/Register";
import { UserAuthContextProvider } from "./context/userAuthContext"; 
import Featured from "./components/Featured";
import Books from "./components/Books";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import ProtectedRoute from "./Navigation/Protected_Route";
import Product_details from "./Small_Components/Product_details";

const router = createBrowserRouter([
  {
    path: '/',
    element: (<Home />)
  },
  {
    path: '/login',
    element: (<Login />)
  },
  {
    path: '/register',
    element: (<Register />)
  },
  // {
  //   path:'/featured',
  //   element:(<Product_details/>)
  // },
  {
    path:'/books',
    element:(<Books></Books>)
  },
  {
    path:'/cart',
    // element:(<ProtectedRoute><Cart></Cart></ProtectedRoute>)
    element:(<Cart/>)
  },
  {
    path:'/profile',
    element:(<Profile></Profile>)
  },
  {
    path:'/product-details',
    element:(<Product_details/>)
  }
]);

function App() {
  return (
    <UserAuthContextProvider> 
      <RouterProvider router={router} />
    </UserAuthContextProvider>
    
  );
}

export default App;
