import {Text, Box, Container, Input,Heading,useToast,Button ,Spacer} from "@chakra-ui/react"
import React from "react"
import { useEffect } from "react"
import { Link, Navigate } from "react-router-dom"
import {useState,useContext} from "react"
import {CartContext} from "../AllReducer/CartContextProvider"
import {AuthContext } from "../PrivateRoute/AuthContext"

let obj={
    email:"",
    password:""

}
export function ToastExample() {
    const toast = useToast()
    return (
      <Button
        onClick={() =>
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    )
  }

 


  

export const Login =()=>{
    const [form,setForm]=useState(obj)
    const {state,dispatch}=useContext(CartContext)
    const [data,setData]=useState([])
    const [load,setLoad]=useState(false)

  const {isAuth,setIsAuth}=useContext(AuthContext)
  console.log(isAuth)



    const handelchange=(e)=>{
       
         const {name,value}=e.target;
         setForm({...form,[name]:value})
         setLoad(!load)
    }
    useEffect(()=>{
setData([...state.user])
    },[load])

    const submit1=(e)=>{
        e.preventDefault()
        let flag=false
      data.forEach((e)=>{
          if(e.email==form.email && e.password==form.password){
            flag=true
           
          }else{
 flag=false

          }

      })
      if(flag==true){
       
        alert("succes")
        setIsAuth(!isAuth)
      
      }else{
        alert("Check credential")
      }
    }

    return <>
     <Box w="100%" p="10" bg="gray.300">
<Container h="60vh" mb="20px" mt="50px" textAlign={"center"} bg="white" p="10" boxShadow='md' borderRadius="20" >
    <Heading mb="20px">Login</Heading>
<form onSubmit={submit1}>
 <Input placeholder="Email..." type="email" onChange={handelchange} name="email" bg="white" mb="6" ></Input>


 <Input type="password" onChange={handelchange} bg="white"  name="password" placeholder="Password..."></Input>
 
  <Input mt="20px" bg="green.400"  borderRadius="20" boxShadow='md' type="submit"></Input>
 </form>
 <Container>
  OR <br />
  Create new account <Link to="/signup"  ><Text color="blue">Signup</Text> </Link>
 </Container>
</Container>
 
</Box>
    </>
}