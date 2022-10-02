import { Text,Image,Box,SimpleGrid, Heading, Textarea, Button, Container } from '@chakra-ui/react'
import {useWindowDimensions} from "../Dimension/Dimension"
import React, { useEffect,useContext ,useState} from "react"
import {CartContext} from "../AllReducer/CartContextProvider"
import {Reducer} from "../AllReducer/Reducer"
import {Add} from "../AllReducer/Action"
let data3=[{
    image:"https://static.thcdn.com/images/small/webp/widgets/121-us/39/1224-STDCRE-28425-WC-SS-SkinStore-January-Photography-2022-BATCHING_Shot17-600x600-053341-095839.jpg",
    title: "Skin Gift",
    detail:"Receive 2 SkinCeuticals Triple Lipid Restore 2:4:2 Sample when you spend $150 orSkinCeuticals Triple Lipid Restore  more on the brand. "
},
{    image:"https://static.thcdn.com/images/small/webp/widgets/121-us/27/Anti_age_discoloration_sq-062227.jpg",
title: "SkinVectin",
detail:"With Strivectin you can have confidence that their skincare products |will provide results thanks to their clinically proven certification."

},
{
    image:"https://static.thcdn.com/images/small/webp/widgets/121-us/32/185fe02e-c10d-42bf-8e01-ec7eb2687d7c-045932.jpg",
title: "Brands Of Month",
detail:"Sunday Riley isn'tjust the brand founder, she's the brand formulator.Each product reflects her belief thatinorder for results tocount,"
}

]
let data4=[
    {
    image:"https://static.thcdn.com/images/small/webp/widgets/121-us/10/Page-001-095910.png",
    title:"RETINOL"
    },
    {
        image:"https://static.thcdn.com/images/small/webp/widgets/121-us/02/original-Page-002-095102.png",
        title:"Hyrladunic acid"
    },

    {
        image:"https://static.thcdn.com/images/small/webp/widgets/121-us/00/original-Page-003-095100.png",
        title:"Ninancimide"
    },
    {
        image:"https://static.thcdn.com/images/small/webp/widgets/121-us/56/Page-004-095856.png",
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
    img:"https://cdn13.nnnow.com/web-images/large/styles/310JKV5TVRG/1604477899670/1.jpg",       
    name:"SEPHORA COLLECTION", 
    description:"Face Mask - Grapefruit",
    pop:20,
    cat:"Moisturizer",
    price:360,
    date:2,
    qty:1,       },
    {
    img:"https://cdn07.nnnow.com/web-images/large/styles/BGOHZI41RY6/1604477899661/1.jpg", 
    name:"SEPHORA COLLECTION", 
    description:"Face Mask - Lychee",
    pop:19,
    cat:"Moisturizer",
    price:360,
    date:2,
    qty:1,        },
    {
    img:"https://cdn00.nnnow.com/web-images/large/styles/I8UUFDY6LA6/1633524342165/1.jpg", 
    name:"CLINIQUE", 
    description:"Clinique Smart Clinical Repair ",
    pop:55,
    cat:"Face Wash & Cleansers",
    price:1900,
    date:12,
    qty:1,
        },
    {
    img:"https://cdn12.nnnow.com/web-images/large/styles/YZCFJWPBXKS/1593757556347/1.jpg", 
    name:"SHISEIDO", 
    description:"Refreshig Cleansing",
    pop:42,
    cat:"Face Wash & Cleansers",
    price:1600,
    date:1,
    qty:1,        },
    {
    img:"https://cdn17.nnnow.com/web-images/medium/styles/K3VYOYGWCJY/1604478015053/1.jpg", 
    name:"SEPHORA COLLECTION", 
    description:"Face Mask - pineapple", 
    pop:12,
    cat:"Masks",
    price:360,
    date:9,
    qty:1 
  },
    {
    img:"https://cdn01.nnnow.com/web-images/large/styles/C7BKD0ZNJFB/1604477899681/1.jpg", 
    name:"SEPHORA COLLECTION", 
    description:"Face Mask - Matcha Tea", 
    pop:78,
    cat:"Moisturizer",
    price:360,
    date:12,
    qty:1,
        },
    {
    img:"https://cdn11.nnnow.com/web-images/large/styles/7I89U5NMD9A/1605083609928/1.jpg", 
    name:"ELIZABETH ARDEN", 
    description:"Ceramide Lift And Firm Day Cream SPF 30",
    pop:9,
    cat:"Moisturizer",
    price:5800,
    date:7,
    qty:1,    },
    {
    img:"https://cdn03.nnnow.com/web-images/large/styles/VT08PHB19BE/1605170807418/1.jpg", 
    name:" SEPHORA COLLECTION", 
    description:"Eye Mask - Pomegranate",
    pop:53,
    cat:"Moisturizer",
    price:270,
    date:13,
    qty:1,
        },
    {
    img:"https://cdn06.nnnow.com/web-images/large/styles/97M9BKJ157C/1604477892823/1.jpg", 
    name:"SEPHORA COLLECT", 
    description:"Eye Mask - Cucumber",
    pop:11,
    cat:"Face Wash & Cleansers",
    price:270,
    date:17,
    qty:1,
       },
    {
    img:"https://cdn17.nnnow.com/web-images/large/styles/87UJ86VNS8T/1604477892815/1.jpg", 
    name:"SEPHORA COLLECTION", 
    description:"Charcoal Nose Strip",
    pop:19,
    cat:"Masks",
    price:240,
    date:30,
    qty:1,
        },
    {
    img:"https://cdn00.nnnow.com/web-images/large/styles/1A3TQTNQVMH/1535611149327/1.jpg", 
    name:"SHISEIDO", 
    description:"Waso Color-Smart Day Time Moisturizer",
    pop:99,
    cat:"Moisturizer",
    price:2700,
    date:5,
    qty:1,    },
    {
    img:"https://cdn19.nnnow.com/web-images/large/styles/JTB5OSW7GL1/1604037714353/1.jpg", 
    name:"SEPHORA COLLECTION", 
    description:"Eye Mask - Watermelon",
    pop:88,
    cat:"Moisturizer",
    price:270,
    date:22,
    qty:1,
        },
  ];

function Skincare(){
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
  <Image src='https://static.thcdn.com/images/xlarge/webp/widgets/121-us/11/0916-41217-SS-AH-SkinStore-Sept-Batch-THG0035127-Shot12-1180x450-025611.jpg' alt='Dan Abramov' />
   {width>=715? <Box position={"absolute"} top="260px" ml="30px" zIndex={+1} key={Date.now()}>
        <Heading>SkinCare</Heading>
        <Text>Revamp Your SkinCare Routine this Session </Text>
        <Text>Weather you Are looking ?</Text>
        <Button mt="10px">Shop Now</Button>
        </Box>:null}     
 </Box>
 <SimpleGrid  minChildWidth='120px' spacing='40px' mt="8px" p="8px"  key={Date.now()}>
 {data3.map((e)=>{
    return  <Box textAlign={"center"}  boxShadow='xl'>
    <Image src={e.image} alt='Dan Abramov'  borderRadius='full'/>
    <Heading fontWeight={300}> {e.title}</Heading>
    <Text>{e.detail}</Text>
    <Button bg="black" color={"white"} >Shop</Button>
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
    export default Skincare;