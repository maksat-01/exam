import React from 'react';
import {Container, Image, Box, Flex, Text, } from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import logo from "../../assets/img/logo.svg"
const Header = () => {
    return (
        <Container>
            <Box maxW="1220px" mx="auto" >
                <Flex justifyContent="space-between" alignItems="center">
                    <Box>
                        <Image src={logo} textAlign="center"/>
                    </Box>
                       <Flex >
                           <NavLink to="/">
                               <Text
                                   fontStyle="normal"
                                   color="black"
                                   fontFamily="Montserrat, sans-serif"
                                   fontWeight="500"
                                   fontSize="24px"
                                   _hover={{
                                       color: "#BD1D1D",
                                   }}
                               >Menu</Text>
                           </NavLink>
                           <NavLink to="/orders">
                               <Text
                                   fontStyle="normal"
                                   color="black"
                                   fontFamily="Montserrat, sans-serif"
                                   fontWeight="500"
                                   fontSize="24px"
                                   mx="20px"
                                   _hover={{
                                       color: "#BD1D1D",}}
                               >Orders</Text>
                           </NavLink>
                           <NavLink to="admin">
                               <Text
                                   fontStyle="normal"
                                   color="black"
                                   fontFamily="Montserrat, sans-serif"
                                   fontWeight="500"
                                   fontSize="24px"
                                   _hover={{
                                       color: "#BD1D1D",}}
                               >Admin</Text>
                           </NavLink>
                       </Flex>
                </Flex>
            </Box>
        </Container>
    );
};

export default Header;