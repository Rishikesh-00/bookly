import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./Navigation/Login";
import Register from "./Navigation/Register";
import { UserAuthContextProvider } from "./context/userAuthContext"; // Import UserAuthContextProvider

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
  }
]);

function App() {
  return (
    <UserAuthContextProvider> {/* Wrap your router setup within UserAuthContextProvider */}
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  );
}

export default App;
