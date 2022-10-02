import { CartContext } from "../AllReducer/CartContextProvider"
import { useContext,useEffect,useState } from "react"
import { Link } from "react-router-dom"
import { PLUS,MINUS ,REMOVE} from "../AllReducer/Action"
import { Reducer } from "../AllReducer/Reducer"
import { Button,Heading, Grid, GridItem ,Image,Text, VStack,HStack, Box,SimpleGrid} from '@chakra-ui/react'
export const Cart =()=>{
    const {state,dispatch}=useContext(CartContext);
    const [total,setTotal]=useState(0)
    const [data,setData]=useState([])
    // console.log(data,"d")
    
    const [value,setValue]=useState(1)
    console.log(state.items,"dss")
    let sum=0;
    useEffect(()=>{

        setData(state.items)
          data?.map((e)=>{
          sum+=e.price*Number(e.qty)
          })
          setTotal(sum) 
    },[data])
     
const filteritem=(id1)=>{

    let x=state.items?.filter((e)=>{
        if(e.id!=id1){
            return e
        }
    })
    dispatch(REMOVE(x))
    setData([...state.items])

}
const inc=(id)=>{
 let x=state.items?.map((e)=> e.id==id ? {...e,qty:e.qty++} : e )
 dispatch(PLUS(x))
 setData([...state.items])
setValue(value+1)
}
const dec=(id)=>{
    let x=state.items?.map((e)=> e.id==id ? {...e,qty:e.qty--} : e )
    dispatch(MINUS(x))
    setData([...state.items])
  
   setValue(value+1)
     }
return <Box display={"flex"} >
   
   <SimpleGrid  columns={{base:1,sm:1,md:2,lg:3,xl:3}} p="10" spacing='10px' w="70%"  >
    {data.length!=0?data?.map((e)=>{
      return  <>
     
  <Box textAlign={"center"} boxShadow='xl' >
    <Image w="200px" m="auto" src={e.img}></Image>
    <Text>{e.name}</Text>
    <Text>Rs-{e.price}</Text>
    <Button mb="2px" bg="red.500"  color={"white"} onClick={()=>filteritem(e.id)}>Remove</Button>
    <Box alignContent={"center"} p="4" >
          <Button bg="green.400" disabled={e.qty>=3} onClick={()=>inc(e.id)} >+</Button>
          <Button  >{e.qty}</Button>
          <Button bg="pink.400" disabled={e.qty<=1} onClick={()=>dec(e.id)}>-</Button>
       </Box>
  </Box>
  
      </>
    }):<Box w="450%" zIndex={+2} bg="tan"> <Image  src="https://inampro.nic.in/writereaddata/images/emptycart2.png"></Image></Box>}
        </SimpleGrid>     
       <Box  alignContent={"center"} mb="20px" ml="10px" textAlign={"center"}  boxShadow='xl'  bg="white" mt="20px" w="25%" h="300px">
            <Heading size="sm" textAlign={"center"}>Order Summary</Heading>
             <Text color="purple"> Order-Numbaer : {Date.now()}</Text>     
              <Text> Delivery   : 3 Days</Text>
              <Text color="">Cart Total    -{total}</Text>
             <Link to="checkout">  <Button margin="auto">Checkout</Button> </Link>
       </Box>
       
      
           
    </Box>
}