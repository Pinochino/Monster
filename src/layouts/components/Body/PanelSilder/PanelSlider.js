import { Box } from "@mui/material";
import React from "react";
import Menu from "~/components/Menu";
import Slider from "~/components/Slider";




function PanelSlider() {
    return (
        <Box
            display='flex'
            justifyContent='space-between'
        >
            <Box 
                minWidth='250px'
            >
                <Menu />
            </Box>
            <Box sx={{ background: 'red' }}
            maxWidth='795px'>
                <Slider />
            </Box>
            <Box sx={{ background: 'yellow' }}
            minWidth='300px'
            >

            </Box>
        </Box>
    )
}

export default PanelSlider;