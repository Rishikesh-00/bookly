import {Navigate} from 'react-router-dom';
import{useSelector} from 'react-redux';
import { loggeduser } from '../Authentication/AuthSlice';
const Protected_Route=({children})=>{
    const user=useSelector(loggeduser);
    if(!user) return <Navigate to="/login"></Navigate>
    return children;
}
export default Protected_Route;