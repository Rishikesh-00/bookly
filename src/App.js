import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./Navigation/Login";
import Register from "./Navigation/Register";
import { UserAuthContextProvider } from "./context/userAuthContext"; // Import UserAuthContextProvider
import Products from "./components/Products";
import Books from "./components/Books";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import ProtectedRoute from "./Navigation/Protected_Route";

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
    path:'/products',
    element:(<Products></Products>)
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
    element:(<ProtectedRoute><Profile></Profile></ProtectedRoute>)
  },
]);

function App() {
  return (
    <UserAuthContextProvider> 
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  );
}

export default App;
