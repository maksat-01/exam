import React from 'react';
import {Box, Button, Container, Stack, Text, Input} from "@chakra-ui/react";

const Admin = () => {
    return (
        <section style={{background: "blue", minHeight: "100vh"}}>
            <Container>
                <Box maxW="1420px" mx="auto">
                    <Text textAlign="center" fontSize="4xl" py="5">CREATE PRODUCT</Text>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box mx="20px">
                            <Stack spacing={3}>
                                <Input placeholder='choose file' w="200px" bg="#D9D9D9" h="67px"/>
                                <Input placeholder='food name' w="300px" bg="#D9D9D9" h="67px"/>
                                <Input placeholder='price' w="300px" bg="#D9D9D9" h="67px"/>
                            </Stack>
                        </Box>
                        <Box w="477px" h="189px" bg="#D9D9D9"
                             display="flex"
                             justifyContent="center"
                             alignItems="center"
                             color="black" borderRadius="10px">place for a photo</Box>
                    </Box>
                    <Stack mt="10%" direction='row' spacing={4} align='center'>
                        <Button colorScheme='green' variant='solid'>
                            to order
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </section>
    );
};

export default Admin;













