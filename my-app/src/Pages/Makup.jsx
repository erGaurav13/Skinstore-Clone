import { Text,Image,Box,SimpleGrid, Heading, Textarea, Button, Container } from '@chakra-ui/react'
import {useWindowDimensions} from "../Dimension/Dimension"
import React, { useEffect,useContext,useState } from "react"
import {CartContext} from "../AllReducer/CartContextProvider"
import {Reducer} from "../AllReducer/Reducer"
import {Add} from "../AllReducer/Action"
let data3=[{
    image:"https://static.thcdn.com/images/small/webp/widgets/121-us/06/033-TUZ058-LGM-IL-1200x1200-082706.jpg",
    title: "lllamasqua",
    detail:"Self-Care is more tan luxury in italian culture its a way of life"
},
{    image:"https://static.thcdn.com/images/small/webp/widgets/121-us/35/original-Screenshot_2022-03-07_141739-124435.png",
title: "Estee Lauder Gift ",
detail:"Receive a Mio SkinCare body Brush when you spend $50 or mmore on brand"

},
{
    image:"https://static.thcdn.com/images/small/webp/widgets/121-us/53/original-Screenshot_2022-04-08_150743-023353.png",
title: "Daniel Sandler",
detail:"Indilge in MOtion is Luxrious range of body washes body lotion,"
}

]
let data4=[
    {
    image:"https://static.thcdn.com/images/small/webp/widgets/121-us/25/Page-001-023125.png",
    title:"RETINOL"
    },
    {
        image:"https://static.thcdn.com/images/small/webp/widgets/121-us/36/Page-002-023136.png",
        title:"Hyrladunic acid"
    },

    {
        image:"https://static.thcdn.com/images/small/webp/widgets/121-us/47/Page-003-023147.png",
        title:"Ninancimide"
    },
    {
        image:"https://static.thcdn.com/images/small/webp/widgets/121-us/58/Page-004-023158.png",
        title:"Vitamin C"
    },
    {
        image:"https://static.thcdn.com/images/small/webp/widgets/121-us/07/Page-005-023207.png",
        title:"Glyoloic Acid"
    },
    {
        image:"https://static.thcdn.com/images/small/webp/widgets/121-us/17/Page-006-023217.png",
        title:"AHA"
    }

]
let data5=[
    {
    img:"https://cdn03.nnnow.com/web-images/medium/styles/GOP1YXWVZPO/1555307201332/1.jpg",
    name:"SEPHORA COLLECTION",
    description:"Rouge Lacquer Lip Stick - Rise Above",
    pop:12,
    price:610,
    cat:"Lip Stick",
    date:19,
    qty:1,
    },
    {
    img:"https://cdn11.nnnow.com/web-images/medium/styles/WLXSHXH89YV/1555307201356/1.jpg",
    name:"SEPHORA COLLECTION",
    description:"Rouge Lacquer Lip Stick - No Regrets",
    pop:16,
    price:610,
    cat:"Foundation",
    date:21,
    qty:1,
    },
    {
    img:"https://cdn15.nnnow.com/web-images/medium/styles/37KKT0R3CF6/1612524207038/1.jpg",
    name:"SEPHORA COLLECTION",
    description:"#Lipstories Lip Stick Street",
    pop:45,
    price:856,
    cat:"Lip Stick",
    date:2,
    qty:1
    },
    {
    img:"https://cdn09.nnnow.com/web-images/medium/styles/I98DWHW5MI7/1617177083567/1.jpg",
    name:"CLINIQUE",
    description:"Even Better Pop Lip Colour Foundation ",
    pop:45,
    price:2050,
    cat:"Lip Foundation",
    date:14,
    qty:1,
    },
    {
    img:"https://cdn05.nnnow.com/web-images/medium/styles/TQRGXAI5TXU/1595328042752/1.jpg",
    name:"ELIZABETH ARDEN",
    description:"Beautiful Color Bold Liquid Lip Stick Fearless",
    pop:25,
    price:2075,
    cat:"Lip Stick",
    date:26,
    qty:1,
    },
    {
    img:"https://cdn09.nnnow.com/web-images/medium/styles/I98DWHW5MI7/1617177083567/1.jpg",
    name:"SEPHORA COLLECTION",
    description:"Rouge Lacquer Lipstick 34 My Rules",
    pop:35,
    price:4226,
    cat:"Lip Stick",
    date:11,
    qty:1,
    },
    {
    img:"https://cdn04.nnnow.com/web-images/medium/styles/BNQ9TM373BF/1612524207046/1.jpg",
    name:"SEPHORA COLLECTION",
    description:"#Lipstories Lip Stick - Werk It",
    pop:50,
    price:595,
    cat:"Lip Stick",
    date:6,
    qty:1
    },
    {
    img:"https://cdn09.nnnow.com/web-images/medium/styles/I98DWHW5MI7/1617177083567/1.jpg",
    name:"SEPHORA COLLECTION",
    description:"#Lipstories Lip Stick- Sink Or Swim",
    pop:10,
    price:425,
    cat:"Lip Stick",
    date:9,
    qty:1
    },
    {
    img:"https://cdn02.nnnow.com/web-images/medium/styles/QCG568II3OE/1603970726301/1.jpg",
    name:"SEPHORA COLLECTION",
    description:"Rouge Nude Lip Stick - 04 Good To Me",
    pop:45,
    price:610,
    cat:"Lip Stick",
    date:3,
    qty:1
    },
    {
    img:"https://cdn18.nnnow.com/web-images/medium/styles/ODCPP1H32DD/1555306181795/1.jpg",
    name:"SEPHORA COLLECTION",
    description:"Rouge Satin Lip Stick Sunkissed",
    pop:30,
    price:610,
    cat:"Lip Stick",
    date:18,
    qty:1,
    },
    {
    img:"https://static.thcdn.com/images/small/webp/widgets/121-us/36/Page-002-023136.png",
    name:"STILA",
    description:"Stay All Day Liquid Lip Stick 117A Patina",
    pop:55,
    price:1680,
    cat:"Lip Stick",
    date:26,
    qty:1,
    },
    {
    img:"https://cdn02.nnnow.com/web-images/medium/styles/KO2GNHYI7VN/1539589546533/1.jpg",
    name:"SEPHORA COLLECTION",
    description:"#Lipstories Lip Stick -27 Hong Kong ",
    pop:70,
    price:450,
    cat:"Lip Stick",
    date:15,
    qty:1,
    }
 ];

function Makup(){
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
  <Image src='https://static.thcdn.com/images/xlarge/webp/widgets/121-us/28/0916-41217-SS-AH-SkinStore-Sept-Batch-THG0035127-Shot15-1180x450-030328.jpg' alt='Dan Abramov' />
   {width>=715? <Box position={"absolute"} top="260px" ml="30px" zIndex={+1} key={Date.now()}>
        <Heading>MAKEUP</Heading>
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
    export default Makup;