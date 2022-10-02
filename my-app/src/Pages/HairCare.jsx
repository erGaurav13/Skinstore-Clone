import { Text,Image,Box,SimpleGrid, Heading, Textarea, Button, Container } from '@chakra-ui/react'
import {useWindowDimensions} from "../Dimension/Dimension"
import React, { useEffect,useContext,useState } from "react"
import {CartContext} from "../AllReducer/CartContextProvider"
import {Reducer} from "../AllReducer/Reducer"
import {Add} from "../AllReducer/Action"
let data3=[{
    image:"https://static.thcdn.com/images/small/webp/widgets/121-us/06/original-SkinStore-Range-SerumsTreatments-044006.jpg",
    title: "Borghese",
    detail:"Self-Care is more tan luxury in italian culture its a way of life"
},
{    image:"https://static.thcdn.com/images/small/webp/widgets/121-us/11/original-original-Untitled_design_-_2021-02-25T124905.942-035737-094111.png",
title: "Mio Skincare Gift ",
detail:"Receive a Mio SkinCare body Brush when you spend $50 or mmore on brand"

},
{
    image:"https://static.thcdn.com/images/small/webp/widgets/121-us/54/Molton_Brown_Square-085254.jpg",
title: "Molton Brownh",
detail:"Indilge in MOtion is Luxrious range of body washes body lotion,"
}

]
let data4=[
    {
    image:"https://static.thcdn.com/images/small/webp/widgets/121-us/11/Page-001-035911.png",
    title:"RETINOL"
    },
    {
        image:"https://static.thcdn.com/images/small/webp/widgets/121-us/14/Page-002-035914.png",
        title:"Hyrladunic acid"
    },

    {
        image:"https://static.thcdn.com/images/small/webp/widgets/121-us/27/Page-003-035927.png",
        title:"Ninancimide"
    },
    {
        image:"https://static.thcdn.com/images/small/webp/widgets/121-us/47/Page-005-035947.png",
        title:"Vitamin C"
    },
    {
        image:"https://static.thcdn.com/images/small/webp/widgets/121-us/06/original-Page-005-095106.png",
        title:"Glyoloic Acid"
    },
    {
        image:"https://static.thcdn.com/images/small/webp/widgets/121-us/17/original-Page-006-095117.png",
        title:"AHA"
    }

]
let data5=[
  {
  img:"https://cdn09.nnnow.com/web-images/medium/styles/NAG35MWAZB5/1603956012732/1.jpg",
  name:"OLAPLEX",
  description:"N°4 Bond Maintenance Shampoo",
  pop:30,
  price:2950,
  cat:"Shampoo",
    qty:1,date:10,

  },
  {
  img:"https://cdn00.nnnow.com/web-images/medium/styles/RB2GD0T4W14/1603859985717/1.jpg",
  name:"OLAPLEX",
  description:"N°5 Bond Maintenance Conditioner",
  pop:32,
  price:1395,
  cat:"Conditioner",
  date:3,
  qty:1,
},
  {
  img:"https://cdn09.nnnow.com/web-images/medium/styles/626PU93RNYO/1652252610567/1.jpg",
  name:"OUAI",
  description:"Leave In Conditioner",
  pop:30,
  price:2200,
  cat:"Conditioner",
  date:5,
  qty:1,
},
  {
  img:"https://cdn13.nnnow.com/web-images/medium/styles/FCNE5T2TV5T/1634887143628/1.jpg",
  name:"MOROCCANOIL",
  description:"Moisture Repair Shampoo",
  pop:80,
  price:1890,
  cat:"Shampoo",
  date:4,
  qty:1,
},
  {
  img:"https://cdn13.nnnow.com/web-images/medium/styles/FCNE5T2TV5T/1634887143628/1.jpg",
  name:"MOROCCANOIL",
  description:"Hydrating Shampoo",
  pop:60,
  price:2160,
  cat:"Shampoo",
  date:9,
  qty:1,
},
  {
  img:"https://cdn13.nnnow.com/web-images/medium/styles/FCNE5T2TV5T/1634887143628/1.jpg",
  name:"MOROCCANOIL",
  description:"Extra Volume Shampoo",
  pop:42,
  price:2160,
  cat:"Shampoo",
  date:4,
  qty:1,
},
  {
  img:"https://cdn10.nnnow.com/web-images/medium/styles/SE57NC8WB0K/1634887017703/1.jpg",
  name:"MOROCCANOIL",
  description:"Extra Volume Conditioner",
  pop:21,
  price:2160,
  cat:"Conditioner",
  date:2,
  qty:1,
},
  {
  img:"https://cdn18.nnnow.com/web-images/medium/styles/ROAP1AH5IAH/1634887017734/1.jpg",
  name:"MOROCCANOIL",
  description:"Moisture Repair Conditioner",
  pop:55,
  price:1890,
  cat:"Conditioner",
    qty:1,date:13,

  },
  {
  img:"https://cdn11.nnnow.com/web-images/medium/styles/KR54NI5C40N/1652252614163/1.jpg",
  name:"OUAI",
  description:"Detox Shampoo",
  pop:48,
  price:3200,
  cat:"Shampoo",
    qty:1,date:25,

  },
  {
  img:"https://cdn18.nnnow.com/web-images/medium/styles/E4PUAGOMU8E/1653375921600/1.jpg",
  name:"MOROCCANOIL",
  description:"All In One Leave In Conditioner",
  pop:22,
  price:1125,
  cat:"Conditioner",
    qty:1,date:16,

  },
  {
  img:"https://cdn18.nnnow.com/web-images/medium/styles/9BHLC320FI7/1634888036622/1.jpg",
  name:"MOROCCANOIL",
  description:"Hydrating Conditioner",
  pop:66,
  price:2160,
  cat:"Conditioner",
    qty:1,date:18,

  },
  {
  img:"https://cdn13.nnnow.com/web-images/medium/styles/ZWAHDO65HEF/1634886962142/1.jpg",
  name:"MOROCCANOIL",
  description:"Smoothing Shampoo",
  pop:56,
  price:2160,
  cat:"Shampoo",
  date:5,
  qty:1,
},
];

function HairCare(){
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
  <Image src='https://static.thcdn.com/images/xlarge/webp/widgets/121-us/39/0916-41217-SS-AH-SkinStore-Sept-Batch-THG0035127-Shot17-1180x450-030739.jpg' alt='Dan Abramov' />
   {width>=715? <Box position={"absolute"} top="260px" ml="30px" zIndex={+1} key={Date.now()}>
        <Heading>Bath & BODY</Heading>
        <Text> Boost body confidence and spol your skin with our </Text>
        <Text>extencive range of luxrious body lotion ?</Text>
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
    export default HairCare;