import { createContext } from "react"
import {useState,CreateContext} from "react"

export const AuthContext=createContext()

export function AuthContextProvider({children}){
  const [isAuth,setIsAuth]=useState(false);

return <AuthContext.Provider value={{isAuth,setIsAuth}}>
  {children}
</AuthContext.Provider>
}