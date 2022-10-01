import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,Input
  } from '@chakra-ui/react'
  import {HamburgerIcon  } from '@chakra-ui/icons'
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} color='black' onClick={onOpen}>
          <HamburgerIcon/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          
        >
          <DrawerOverlay color="blue" />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
  
            <DrawerBody>
              <Link to="/skincare" >Skincare</Link>
            </DrawerBody>
            <DrawerBody>
              <Link to="/fragrance" >Fragrance</Link>
            </DrawerBody>
            <DrawerBody>
              <Link to="/hairCare" >HairCare`</Link>
            </DrawerBody>
            <DrawerBody>
              <Link to="/toolsBrushes" >Tool ANd Brushes</Link>
            </DrawerBody>
           
            <DrawerBody>
              <Link to="/brands" >Brand</Link>
            </DrawerBody>
            <DrawerBody>
              <Link to="/login" >Login</Link>
            </DrawerBody>
            <DrawerBody>
              <Link to="/signup" >Signup</Link>
            </DrawerBody>
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }




export function NavbarDrawer(){
return <>
  <DrawerExample/>
</>

}