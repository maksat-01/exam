import React,{useState} from 'react';
import {Box, Button, Stack, Container, Text,Image} from "@chakra-ui/react";
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"
import {HomeData} from "../Home/HomeData";

const Orders = () => {

    const [orders, setOrders] = useState(HomeData.map((el) => ({ ...el, quantity: 1 })));

    const incrementOrder = (index: number) => {
        const newOrders = [...orders];
        newOrders[index].quantity++;
        setOrders(newOrders);
    };

    const decrementOrder = (index: number) => {
        const newOrders = [...orders];
        newOrders[index].quantity--;
        setOrders(newOrders);
    };



    const removeOrder = (index: number) => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    }

    return (
        <section style={{background: "blue", minHeight: "100vh"}}>
            <Container>
                <Box maxW="1220px" mx="auto">
                    <Text textAlign="center" fontSize="4xl" py="5">MY ORDERS</Text>
                    {orders.map((el,index) => (
                        <Box my="20px" w="586px" h="130px" bg="#D9D9D9" borderRadius="10px" p="30px">
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Image w="186px" h="73px" src={el.img}/>
                                <Box>
                                    <Text>{el.name}</Text>
                                    <Text>{el.price}</Text>
                                </Box>
                                <Box>
                                    <Stack direction='row' spacing={4} align='center'>
                                        <Button colorScheme='red' variant='solid' onClick={() => removeOrder(index)}>
                                            delete order
                                        </Button>
                                    </Stack>
                                    <Box maxW="100px" my="20px" display="flex">
                                        <AiOutlineMinus style={{
                                            width: "40px",
                                            height: " 28px",
                                            background: " #DDAA27",
                                            borderRadius: "10px"
                                        }}
                                                        onClick={() => decrementOrder(index)}
                                        />
                                        <Text mx="10px">{el.quantity}X</Text>
                                        <AiOutlinePlus style={{
                                            width: "40px",
                                            height: " 28px",
                                            background: " #DDAA27",
                                            borderRadius: "10px"
                                        }}
                                                       onClick={() => incrementOrder(index)}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                    <Stack display="flex" justifyContent="end" alignItems="center" mt="10%" direction='row' spacing={4}
                           align='center'>
                        <Button colorScheme='green' variant='solid'>
                            to order
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </section>
    );
};

export default Orders;