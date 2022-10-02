import { Text,Image,Box,SimpleGrid, Heading, Textarea, Button, Container } from '@chakra-ui/react'
import {useWindowDimensions} from "../Dimension/Dimension"
import React, { useEffect,useContext,useState } from "react"
import {CartContext} from "../AllReducer/CartContextProvider"
import {Reducer} from "../AllReducer/Reducer"
import {Add} from "../AllReducer/Action"
let data3=[{
    image:"https://static.thcdn.com/images/small/webp/widgets/121-us/51/original-0224-STDCRE-32153-SS-BME-Skinstore-March-2022-Photography-Batching-Shot_15-500x500-074151.jpg",
    title: "TriPolar",
    detail:"Self-Care is more tan luxury in italian culture its a way of life"
},
{    image:"https://static.thcdn.com/images/small/webp/widgets/121-us/26/Screenshot_2022-03-07_152314-082326.png",
title: "BeautyOra",
detail:"Receive a Mio SkinCare body Brush when you spend $50 or mmore on brand"

},
{
    image:"https://static.thcdn.com/images/small/webp/widgets/121-us/46/original-Hydration-SkinStore_%281%29-021034-101546.jpg",
title: "MZ skin ",
detail:"Indilge in MOtion is Luxrious range of body washes body lotion,"
}

]
let data4=[
    {
    image:"https://static.thcdn.com/images/small/webp/widgets/121-us/53/Page-001-024853.png",
    title:"RETINOL"
    },
    {
        image:"https://static.thcdn.com/images/small/webp/widgets/121-us/09/Page-002-024909.png",
        title:"Hyrladunic acid"
    },

    {
        image:"https://static.thcdn.com/images/small/webp/widgets/121-us/16/Page-003-024916.png",
        title:"Ninancimide"
    },
    {
        image:"https://static.thcdn.com/images/small/webp/widgets/121-us/25/Page-004-024925.png",
        title:"Vitamin C"
    },
    {
        image:"https://static.thcdn.com/images/small/webp/widgets/121-us/34/Page-005-024934.png",
        title:"Glyoloic Acid"
    },
    {
        image:"https://static.thcdn.com/images/small/webp/widgets/121-us/41/Page-006-024941.png",
        title:"AHA"
    }

]
let data5=[
  
    {
    img:"https://cdn01.nnnow.com/web-images/medium/styles/1O7T64B0PJ9/1583391378166/1.jpg",
    name:"SEPHORA COLLECTION",
    description:"4-Step Buffer",
    price:380,
    qty:1,
    pop:2,
    cat: "Eye Brushes",
    date:4,
    },
    {
    img:"https://cdn03.nnnow.com/web-images/medium/styles/2I790D9UT7O/1652089065578/1.jpg",
    name:"SEPHORA COLLECTION",
    description:"Cuticle Nipper",
    price:2400,
    qty:1,
    pop:4,
    cat: "Face Brushes",
    date:4,
    },
    {
    img:"https://cdn03.nnnow.com/web-images/medium/styles/A05XEE6C8EP/1633933976478/1.jpg",
    name:"FOREO",
    description:"LUNATM mini 3 Midnight",
    price:1590,
    qty:1,
    pop:7,
    cat: "Sponge",
    date:9,
    },
    {
    img:"https://cdn03.nnnow.com/web-images/medium/styles/VTDCZ7YJD7V/1495780516953/1.jpg",
    name:"FOREO",
    description:"LUNATM Mini 2 Facial Cleansing Device All Skin Types",
    price:1349,
    qty:1,
    pop:1,
    cat: "Brush Cleaner",
    date:6,
    },
    {
    img:"https://cdn18.nnnow.com/web-images/medium/styles/PXOHLMXF9VP/1650558360800/1.jpg",
    name:"FOREO",
    description:"UFO Smart Face Treatment - Pearl Pink",
    price:1890,
    qty:1,
    pop:5,
    cat: "Eye Brushes",
    date:3,
    },
    {
    img:"https://cdn16.nnnow.com/web-images/medium/styles/1XXYANS1HCO/1580451959408/1.jpg",
    name:"FOREO",
    description:"Luna Mini 3",
    price:1600,
    qty:1,
    pop:8,
    cat: "Sponge",
    date:7,
    },
    {
    img:"https://cdn01.nnnow.com/web-images/medium/styles/AV44YHJPXLF/1650557954967/1.jpg",
    name:"FOREO",
    description:"UFO Mini Smart Face Treatment Fuchsia",
    price:9600,
    qty:1,
    pop:2,
    cat: "Face Brushes",
    date:6,
    },
    {
    img:"https://cdn10.nnnow.com/web-images/medium/styles/RU1UWVX0TTA/1636383743531/1.jpg",
    name:"FOREO",
    description:"LUNA 3 for Combination Skin",
    price:1890,
    qty:1,
    pop:5,
    cat: "Eye Brushes",
    date:9,
    },
    {
    img:"https://cdn05.nnnow.com/web-images/medium/styles/QD9NC7HMDQE/1491888383498/1.jpg",
    name:"FOREO",
    description:"IRISTM Iluminating Eye Massager",
    price:1290,
    qty:1,
    pop:9,
    cat: "Face Brushes",
    date:6,
    },
    {
    img:"https://cdn08.nnnow.com/web-images/medium/styles/53YADCMD2BT/1636383743565/1.jpg",
    name:"FOREO",
    description:"Luna 3 for Normal Skin",
    price:1890,
    qty:1,
    pop:5,
    cat: "Eye Brushes",
    date:8,
    },
    {
    img:"https://cdn18.nnnow.com/web-images/medium/styles/IEJJUB51XOU/1650558067798/1.jpg",
    name:"FOREO",
    description:"UFO Mini Smart Face Treatment - Pearl Pink",
    price:9600,
    qty:1,
    pop:4,
    cat: "Sponge Brushes",
    date:6,
    },
    {
    img:"https://cdn06.nnnow.com/web-images/medium/styles/DGJDTF7SUO9/1650558075716/1.jpg",
    name:"FOREO",
    description:"UFO Mini Smart Face Treatment Mint",
    price:9600,
    qty:1,
    pop:9,
    cat: "Face Brushes",
    date:1,
    },
    {
    img:"https://cdn03.nnnow.com/web-images/medium/styles/FHLKJOGYT7Z/1635850597463/1.jpg",
    name:"FOREO",
    description:"ESPADATM Blue Light Acne Treatment Cobalt Blue",
    price:1390,
    qty:1,
    pop:2,
    cat: "Brush Cleaner",
    date:3,
    },
    {
    img:"https://cdn04.nnnow.com/web-images/medium/styles/PZXLHXYYCU0/1635851563878/1.jpg",
    name:"FOREO",
    description:"ESPADATM Blue Light Acne Treatment Magenta",
    price:1390,
    qty:1,
    pop:6,
    cat: "Eye Brushes",
    date:6,
    },
  ];

function ToolBrushes(){
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
  <Image src='https://static.thcdn.com/images/xlarge/webp/widgets/121-us/08/0916-41217-SS-AH-SkinStore-Sept-Batch-THG0035127-Shot14-1180x450-030108.jpg' alt='Dan Abramov' />
   {width>=715? <Box position={"absolute"} top="260px" ml="30px" zIndex={+1} key={Date.now()}>
        <Heading>TOOLS</Heading>
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
    export default ToolBrushes;