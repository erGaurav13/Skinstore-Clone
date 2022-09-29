import { CartContext } from "../AllReducer/CartContextProvider"
import { useContext,useState } from "react"
import { Button, Grid, GridItem ,Image,Text, VStack,HStack, Box,SimpleGrid} from '@chakra-ui/react'
export const Cart =()=>{
    const {state,dispatch}=useContext(CartContext);
    const [value,setValue]=useState(1)
    console.log(state.items,"dss")
    return <>
   
   <SimpleGrid  columns={{base:1,sm:1,md:2,lg:3,xl:3}} spacing='10px' w="70%">
    {state.items?.map((e)=>{
      return  <>
     
  <Box textAlign={"center"} >
    <Image src={e.img}></Image>
    <Text>{e.name}</Text>
    <Text>Rs-{e.price}</Text>
    <Box alignContent={"center"}>
          <Button >+</Button>
          <Button  >Qty</Button>
          <Button>-</Button>
       </Box>
  </Box>
  
      </>
    })}
        </SimpleGrid>     
       {/* <Box alignContent={"center"}>
          <Button ml="40px">+</Button>
          <Button  >Qty</Button>
          <Button>-</Button>
       </Box> */}
           
    </>
}