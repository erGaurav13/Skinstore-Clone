import { useReducer } from "react"
import {reducer,useState,createContext} from "react"
import {Reducer} from "./Reducer"
const init={
 items:[]

}

export const CartContext=createContext()

export  function CartContextProvider({children}){
const [state,dispatch]=useReducer(Reducer,init)
return <CartContext.Provider value={{state,dispatch}}>
    {children}
</CartContext.Provider>
}