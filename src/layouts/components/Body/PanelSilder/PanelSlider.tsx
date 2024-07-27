import { Box } from "@mui/material";
import classNames from "classnames/bind";
import React from "react";
import styles from './PanelSlider.module.scss'

const cx = classNames.bind(styles);

function PanelSlider() {
    return (
  <Box
  display='flex'
  justifyContent='space-between'
  >
        <Box>
            <h3>Hello World</h3>
        </Box>  
        <Box>
            <h3>Hello World</h3>
        </Box>  
            <Box>
            <h3>Hello World</h3>
        </Box>  
  </Box>
    )
}

export default PanelSlider;