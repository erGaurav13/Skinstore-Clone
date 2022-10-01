
import { SimpleGrid,Box,Text } from '@chakra-ui/react'

let data=[
    {
        name:"Alchimie Forever",
    },
    {
        name:"Alpha-H",
    },
    {
        name:"Angela Caglia",
    },
    {
        name:"Dunhill",
    },
    {
        name:"Epionce",
    },
    {
        name:"Exuviance",
    },
    {
        name:"Exuviance",
    },
]

function Brand(){
return <>

<SimpleGrid columns={{base:1,md:3,lg:3,xl:4}} spacing={4} textAlign="center">
 
    {data.map((e)=>{
        return <Box  height='80px' bg="black" color="white">
                <Text fontStyle={'italic'} fontSize="28" zIndex={+3}> {e.name}</Text>
              </Box>
    })} 
 
 
</SimpleGrid>
</>
}
export default Brand;
