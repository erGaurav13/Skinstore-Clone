import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
export function PrivateRoute({children}){

const {isAuth,setIsAuth} =useContext(AuthContext);

 if(!isAuth){
    return <Navigate to="/login" />
 }

return children

}