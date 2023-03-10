import React from 'react';
import {Container,Box, Text,Image,Grid,GridItem,Button,Stack,Flex} from "@chakra-ui/react";
import {HomeData} from "./HomeData";
import {Link} from "react-router-dom"
const Home = () => {


    return (
        <section style={{background:"blue" , minHeight: "100vh"}}>
            <Container>
                <Box maxW="1220px" mx="auto">
                    <Text textAlign="center" fontSize="4xl" py="5">Menu</Text>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                     <Grid ml="-50%" templateColumns='repeat(3, 1fr)' gap={10}>
                         {HomeData.map(el => (
                             <GridItem p="20px" w="337px" bg="#D9D9D9" borderRadius="16px" h="276px" >
                                 <Image src={el.img}/>
                                 <Flex justifyContent="space-between" alignItems="center">
                                     <Box>
                                         <Text>{el.name}</Text>
                                         <Text>{el.price}</Text>
                                     </Box>
                                     <Stack direction='row' spacing={4} align='center'>
                                    <Link to="/orders">
                                        <Button type="submit" mt="10" colorScheme='teal' variant='solid'>
                                            to order
                                        </Button>
                                    </Link>
                                     </Stack>
                                 </Flex>
                             </GridItem>
                         ))}
                     </Grid>
                 </Box>
                </Box>
            </Container>

        </section>
    );
};

export default Home;



