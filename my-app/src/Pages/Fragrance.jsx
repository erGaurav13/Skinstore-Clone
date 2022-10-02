import { Text,Image,Box,SimpleGrid, Heading, Textarea, Button, Container } from '@chakra-ui/react'
import {useWindowDimensions} from "../Dimension/Dimension"
import React, { useEffect,useContext } from "react"
import {CartContext} from "../AllReducer/CartContextProvider"
import {Reducer} from "../AllReducer/Reducer"
import {Add} from "../AllReducer/Action"
import { useState } from 'react'
let data3=[{
    image:"https://static.thcdn.com/images/small/webp/widgets/121-us/40/Molton_Brown_Square-103440.jpg",
    title: "Molton Brown",
    detail:"Self-Care is more tan luxury in italian culture its a way of life"
},
{    image:"https://static.thcdn.com/images/small/webp/widgets/121-us/59/original-f500d7f2-17d7-4aff-ab0e-41421eeaae8d_%286%29-034659.jpg",
title: "Chris Collins",
detail:"Receive a Mio SkinCare body Brush when you spend $50 or mmore on brand"

},
{
    image:"https://static.thcdn.com/images/small/webp/widgets/121-us/59/original-MicrosoftTeams-image-103459.png",
title: "GlassHouse Fragrance ",
detail:"Indilge in MOtion is Luxrious range of body washes body lotion,"
}

]
let data4=[
    {
    image:"https://static.thcdn.com/images/small/webp/widgets/121-us/37/Page-001-043237.png",
    title:"RETINOL"
    },
    {
        image:"https://static.thcdn.com/images/small/webp/widgets/121-us/42/Page-002-043242.png",
        title:"Hyrladunic acid"
    },

    {
        image:"https://static.thcdn.com/images/small/webp/widgets/121-us/55/Page-003-043255.png",
        title:"Ninancimide"
    },
    {
        image:"https://static.thcdn.com/images/small/webp/widgets/121-us/09/Page-004-043309.png",
        title:"Vitamin C"
    },
    {
        image:"https://static.thcdn.com/images/small/webp/widgets/121-us/19/Page-005-043319.png",
        title:"Glyoloic Acid"
    },
    {
        image:"https://static.thcdn.com/images/small/webp/widgets/121-us/26/Page-006-043326.png",
        title:"AHA"
    }

]
let data5=[
    {
    img:"https://cdn04.nnnow.com/web-images/medium/styles/E8MATF2IDYU/1605084283131/1.jpg",
    name:"ELIZABETH ARDEN",
    description:"Green Tea Scent Spray",
    pop:2,
    price:3500,
    cat:"Perfume",
    date:3,
    qty:1
    },{
    img:"https://cdn03.nnnow.com/web-images/medium/styles/P4FI87Z9XKE/1607690426098/1.jpg",
    name:"ELIZABETH ARDEN",
    description:"My Fifth Avenue Eau De Parfum",
    pop:5,
    price:5150,
    cat:"Perfume",
    date:5,
    qty:1
    },{
    img:"https://cdn15.nnnow.com/web-images/medium/styles/2SDH63OIOLM/1487241079903/1.jpg",
    name:"CALVIN KLEIN FRAGRANCES",
    description:"Be Eau De Toilette",
    pop:3,
    price:4525,
    cat:"Perfume",
    date:17,
    qty:1,
    },
    {
    img:"https://cdn06.nnnow.com/web-images/medium/styles/FEZSSY7OW5A/1632460367395/1.jpg",
    name:"DAVIDOFF",
    description:"Cool Water Eau De Parfum",
    pop:6,
    price:5050,
    cat:"Perfume",
    date:2,
    qty:1
    },
    {
    img:"https://cdn12.nnnow.com/web-images/medium/styles/4O91OGGF6Z7/1592541998240/1.jpg",
    name:"BURBERRY",
    description:"Her Eau De Parfum",
    pop:11,
    price:8250,
    cat:"Perfume",
    date:8,
    qty:1,
  },
    {
    img:"https://cdn00.nnnow.com/web-images/medium/styles/OSEF40XVRIA/1583403862430/1.jpg",
    name:"BURBERRY",
    description:"Her Blossom Eau De Toilette",
    pop:11,
    price:6800,
    cat:"Perfume",
    date:8,
    qty:1
    },
    {
    img:"https://cdn14.nnnow.com/web-images/medium/styles/SL9B2177HQZ/1487241079920/1.jpg",
    name:"CALVIN KLEIN FRAGRANCES",
    description:"CK One Eau De Toilette",
    pop:5,
    price:4750,
    cat:"Perfume",
    date:6,
    qty:1
    },
    {
    img:"https://cdn17.nnnow.com/web-images/medium/styles/R6O86CT29U7/1604582394846/1.jpg",
    name:"BURBERRY",
    description:"Burberry Classic Eau De Parfum",
    pop:7,
    price:6050,
    cat:"Perfume",
    date:6,
    qty:1
    },
    {
    img:"https://cdn00.nnnow.com/web-images/medium/styles/F6X58N6L2DM/1605083781834/1.jpg",
    name:"ELIZABETH ARDEN",
    description:"Red Door Eau De Toilette",
    pop:7,
    price:6475,
    cat:"Perfume",
    date:9,
    qty:1
    },
    {
    img:"https://cdn15.nnnow.com/web-images/medium/styles/KMD9ASCOK68/1604582394823/1.jpg",
    name:"BURBERRY",
    description:"Burberry Weekend Eau De Parfum",
    pop:6,
    price:5300,
    cat:"Perfum",
    date:19,
    qty:1,
    },
    {
    img:"https://cdn01.nnnow.com/web-images/medium/styles/APO1MI8SE9T/1604487730463/1.jpg",
    name:"HUGO BOSS",
    description:"Boss The Scent Private Accord For Her Eau De Parfum",
    pop:6,
    price:5400,
    cat:"Perfum",
    date:28,
    qty:1,
    },
    {
    img:"https://cdn14.nnnow.com/web-images/medium/styles/JNDWBL8HTUR/1605083781849/1.jpg",
    name:"ELIZABETH ARDEN",
    description:"5th Avenue Eau De Parfum",
    pop:7,
    price:5550,
    cat:"Perfum",
    date:28,
    qty:1,
    },
  ];



function Fragrance(){
  const {state,dispatch}=useContext(CartContext)
//   console.log(state,dispatch,"dasdf")
    const { height, width } = useWindowDimensions();
   const [mapdata,setMapdata]=useState(data5)
    
   const sort1=(l,r)=>{
    let x= data5.sort((a,b)=>{
     if(a.price < b.price){ return l;}
     if(a.price > b.price){ return  r;}
       return 0;
    })
   console.log(x)
    setMapdata([...x])
   }
    
    return <>
      <div>
      {/* width: {width} ~ height: {height} */}
    </div>
    
   <Box w="100%"  >
  <Image src='https://static.thcdn.com/images/xlarge/webp/widgets/121-us/54/0830-STDCRE-40753-WC-SS-Fragrance-GWP-Assets-1180x450-053654.jpg' alt='Dan Abramov' />
   {width>=715? <Box position={"absolute"} top="260px" ml="30px" zIndex={+1} key={Date.now()}>
        <Heading>FRAGRANCE</Heading>
        <Text> Weather you are going far a natural , everyday , look or full </Text>
        <Text>on GLam we have got you Converted</Text>
        <Button mt="10px">Shop Now</Button>
        </Box>:null}     
 </Box>
 <SimpleGrid  minChildWidth='120px' spacing='40px' mt="8px" p="8px"  key={Date.now()}>
 {data3.map((e)=>{
    return  <Box textAlign={"center"}  boxShadow='xl' borderRadius='10'>
    <Image src={e.image} alt='Dan Abramov'  borderRadius='full'/>
    <Heading fontWeight={300}> {e.title}</Heading>
    <Text mb="2">{e.detail}</Text>
    <Button mb="4" bg="black" color={"white"} >Shop</Button>
    </Box>
 })}
</SimpleGrid >
<Box ml=" 38%" mt={"8px"}>
<Heading fontWeight={100} >Shop By Ingrident</Heading>
</Box>

<SimpleGrid  minChildWidth='120px' spacing='40px' mt="8px" p="8px" key={Date.now()+1} >
        
 {data4.map((e)=>{
     
    return  <Box textAlign={"center"}  boxShadow='xl'>
    <Image src={e.image} alt='Dan Abramov'  borderRadius='full'/>  
    </Box>
 })}
</SimpleGrid>
<Box ml=" 38%" mt={"8px"}>
<Heading fontWeight={100} >Best Sellers</Heading>
</Box>
<Box ml="42px" mr="40px" mb="10px">
<Button bg="red"  onClick={()=>sort1(1,-1)}>Price:High to Low</Button>
<Button bg="red" ml="10" onClick={()=>sort1(-1,1)}>Price:Low to High</Button>
<SimpleGrid columns={{base:1,md:3,lg:3,'xl':4}} spacing={2}  key={Date.now()+2} >
  
  {mapdata?.map((e)=>{
     return  <Box  boxShadow='xl' >
     <Image  margin={"auto"} src={e.img} alt='Dan Abramov' w="120px" />
     <Text textAlign={"center"} color="black">{e.description}</Text>
     <Text  textAlign={"center"} >Rs- {e.price}</Text>
   
     <Button w="100%" bg="black" color="white" onClick={()=>dispatch(Add(e))}>Add to cart</Button> 
     </Box>
  })}
        
  
</SimpleGrid>
</Box>
    </>
    }
    export default Fragrance;