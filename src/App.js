import{RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import Login from "./Navigation/Login";
import Register from "./Navigation/Register";
const router= createBrowserRouter([
  {
    path:'/',
    element:(<Home></Home>)
  },
  {
    path:'/login',
    element:(<Login></Login>)
  },{
    path:'/register',
    element:(<Register></Register>)
  }
])
function App() {
  return (
   <>
    <RouterProvider router={router}/>
   </>
  );
}

export default App;
