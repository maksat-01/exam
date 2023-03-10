import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Admin from "./pages/Admin";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/admin" element={<Admin/>}/>
    </Routes>
  </ChakraProvider>
)
