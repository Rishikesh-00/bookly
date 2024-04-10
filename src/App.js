import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./Navigation/Login";
import Register from "./Navigation/Register";
import { UserAuthContextProvider } from "./context/userAuthContext"; // Import UserAuthContextProvider
import Featured from "./components/Featured";
import Books from "./components/Books";
import Profile from "./components/Profile";
import Cart from "./Small_Components/Product_details";
// import Cart from "./components/Featured";
import ProtectedRoute from "./Navigation/Protected_Route";
import Product_details from "./Small_Components/Product_details";
// import Test from "./components/Test";

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
  {
    path:'/featured',
    element:(<Product_details/>)
  },
  {
    path:'/books',
    element:(<Books></Books>)
  },
  {
    path:'/cart',
    element:(<ProtectedRoute><Cart></Cart></ProtectedRoute>)
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
    // <>
    //   <Test/>
    // </>
  );
}

export default App;
