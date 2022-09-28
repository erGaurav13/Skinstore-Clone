import { SimpleGrid,Box,Text, Button } from '@chakra-ui/react'

export  function Footer(){

 return <>
 
 <SimpleGrid columns={{base:1,sm:1,md:2,lg:2,'xl':2}} spacing={{base:1,sm:1,md:2,lg:2,'xl':2}}>
  <Box bg='tomato' height='80px' pt={2}>
    <Text fontSize={"12px"}>Sign up to our email list and receive 20% off your next order</Text>
    <Button  bg="black" color={"white"} size={{base:"xs",sm:"sm", md:"md" ,lg:"md"}} >Sign Up</Button>
  </Box>
  <Box bg='tomato' height='80px'></Box>

</SimpleGrid>
 
 
 </>

}