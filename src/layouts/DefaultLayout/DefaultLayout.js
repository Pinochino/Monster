import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import { Box } from "@mui/material";



function DefaultLayout() {
    return (<Box className="wrapper">
         <Box mb='1.5rem'><Header /></Box>
         
        <Box><Body /></Box>
    </Box>);
}

export default DefaultLayout;