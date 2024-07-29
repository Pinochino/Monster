import { Box } from "@mui/material";
import classNames from "classnames/bind";
import React from "react";
import styles from './PanelSlider.module.scss'
import Menu from "~/components/Menu";
import images from "~/assets/images/Image";
import Slider from "~/components/Slider";



const cx = classNames.bind(styles);

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