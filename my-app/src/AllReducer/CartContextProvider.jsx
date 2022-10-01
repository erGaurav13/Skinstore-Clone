import { useReducer } from "react"
import {reducer,useState,createContext} from "react"
import {Reducer} from "./Reducer"
const init={
 items:[],
 user:[{email:"gauravgk1313@gmail.com",password:"123"}]

}

export const CartContext=createContext()

export  function CartContextProvider({children}){
const [state,dispatch]=useReducer(Reducer,init)
return <CartContext.Provider value={{state,dispatch}}>
    {children}
</CartContext.Provider>
}