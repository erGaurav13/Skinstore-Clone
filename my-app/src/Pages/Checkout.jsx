import { Box,Button,Image, Container,Text,FormHelperText ,Heading,FormControl,Input,FormLabel} from "@chakra-ui/react";
import { useState } from "react";
import {Form, Link} from "react-router-dom"
export function Checkout(){
const [state,setState]=useState(false)

return <>
{state? <Box w="100%">
            <Image w="100%" src="https://assets.materialup.com/uploads/9ba2d687-d7d3-4361-8aee-7b2a3c074761/preview.gif"></Image> 
       </Box>:
       <Box w="100%" bg="gray.300" display={"flex"} p="10" alignContent={"center"}>
            
        <Container>

        <Text m="auto">Details</Text>
            Name
          <Input placeholder="Name"></Input>
          Email
          <Input placeholder="Email"></Input>
          Address
          <Input placeholder="Address"></Input>
          Pincode
          <Input placeholder="Pincode"></Input>
       
        </Container>
        <Container>
              Payment <br />
                        Card No
          <Input placeholder="1234...."></Input>
          cvv
          <Input placeholder="cvv"></Input>
          OTP
          <Input placeholder="OTP"></Input>
          <Button bg="green" onClick={()=>setState(!state)} w="100%">Pay</Button>
        </Container>
  
</Box>}
</>
}