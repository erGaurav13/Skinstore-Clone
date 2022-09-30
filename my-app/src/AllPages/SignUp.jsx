import { Container } from '@chakra-ui/react'
import {useState,useContext,useEffect} from "react";
import {ADD_USER} from "../AllReducer/Action"
import { Reducer } from '../AllReducer/Reducer';
import { CartContext } from '../AllReducer/CartContextProvider';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,Button,
    Input,Text,Heading
  } from '@chakra-ui/react'

const obj={
    email:"",
    password:""
}

export const SignUp =()=>{
    const [form,setForm] = useState(obj) 
    const {state,dispatch}=useContext(CartContext)
    const [load,setLoad]=useState(false)
    const [data,setData]=useState()
    useEffect(()=>{
        setData([...state.user])
        console.log(state.user,"state.user")
    },[load])
  

const handelChange=(e)=>{
 const {name,value} = e.target;

 setForm({...form,[name]:value})
}
console.log(data)
const submit1=(e)=>{
    e.preventDefault()
    if(state.user){
        let x=state.user?.filter((e)=>{
            return  e.email==form.email
        })
        if(x.length!=0){
            alert("Please enter another email")
        }else{
            console.log("age bdo")
            dispatch(ADD_USER(form))
            console.log()
         setLoad(!load)
        }
    }


}
console.log(form)
    return <>
    
    <form  onSubmit={submit1}>
    <Container h="100vh" mt="30px">
           <Heading mb="10px" textAlign={"center"}>Sign-up</Heading>
    <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input name="email" value={form.email} type='email'  onChange={handelChange}/>
  <FormHelperText>We'll never share your email.</FormHelperText>
  <FormLabel>Password</FormLabel>
  <Input name="password" value={form.password}  type='password' onChange={handelChange} />
  <FormHelperText> never share your Password</FormHelperText>

 <input type="submit" name="" id="" />
</FormControl>
</Container>
</form>
    </>
}