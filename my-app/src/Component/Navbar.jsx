import { Link } from "react-router-dom"
import {IconButton,Wrap, Stack,WrapItem, Flex, Spacer,Box,Heading,ButtonGroup,Button,Text,Input,InputGroup,InputRightElement, Container } from '@chakra-ui/react'
import {SearchIcon } from '@chakra-ui/icons'
import {useWindowDimensions} from "../Dimension/Dimension"
import { useState, useEffect } from 'react';
import { NavbarDrawer } from "./NavbarDrawer";
import {Account, CartIcon} from "./Icon"
import { NavbarHover } from "./NavbarHover";

export const Navbar =()=>{
    //to get the HEIGHT AND WIDTH
    const { height, width } = useWindowDimensions();
    return <>
     
     <div>
      {/* width: {width} ~ height: {height} */}
    </div>
    <Box  position="sticky" w="100%" top="0px" display="block" zIndex={+6}>
   {width>=1014?
  
    <Flex    minWidth='max-content' alignItems='center' gap='2'bg="white" borderBottom={"2px"}  >
  <Box p='2' pl={"22px"}>
    <Heading  size='xl'>SkinStore</Heading>
    <Text fontSize={10}> part of the LOOKFANTASTIC group</Text>
  </Box>
  <Spacer />
  {width>=1014? <Box>
  <InputGroup size='md'>
      <Input
      
        pr='4.5rem'
        type="text"
        placeholder='Search...'
      />
      <InputRightElement width='4.5rem'>
      <IconButton
  colorScheme='blue'
  aria-label='Search database'
  icon={<SearchIcon />}
/>
      </InputRightElement>
    </InputGroup>
    </Box> :null}
    <Spacer />

  <ButtonGroup gap='2'>
    <Link to="/signup" > <Button colorScheme='teal'>Sign Up</Button></Link> 
    <Link to="/login">   <Button colorScheme='teal'>Log in</Button> </Link>
    <Button colorScheme='teal'><Link to="/cart" >Cart</Link></Button> 
  </ButtonGroup>
    </Flex>:

    <Flex  minWidth='max-content' alignItems='center' gap='2'bg="white" borderBottom={"2px"} >
 

  <Box>
  <NavbarDrawer/>
  </Box>
  <Spacer />

  <Container p='2' >
    <Heading size='xl'>SkinStore</Heading>
    <Text fontSize={10}> part of the LOOKFANTASTIC group</Text>
  </Container>
  <ButtonGroup gap='2'>
    {/* <Button colorScheme='teal'>Sign Up</Button> */}
   <Link to="/login">  <IconButton
//   variant='outline'
  icon={<Account />}
> </IconButton></Link>
    {/* <Button colorScheme='teal'>Log in</Button> */}
  <Link to="cart" >   <Button bg="white" ><IconButton  icon={<CartIcon/>}/></Button></Link>
  </ButtonGroup>
    </Flex>}
     {width>=1000?<NavbarHover  />:null}  
      </Box>

    </>
}