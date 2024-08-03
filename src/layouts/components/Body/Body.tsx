import { Box } from "@mui/material";
import classNames from "classnames/bind";
import React from "react";
import styles from './Body.module.scss';

import PanelSlider from "./PanelSilder";
import PanelProduct from "./PanelProduct";

const cx = classNames.bind(styles)

function Body() {
    return (
     <Box className={cx('body')}>
         <Box className={cx("panel-slider")} mb='30px'>
             <Box className={cx("panel-body")}>
                <PanelSlider />
             </Box>
         </Box>

         <Box className={cx("panel-slider")} mb='30px'>
             <Box className={cx("panel-body")}>
                <PanelProduct />
             </Box>
         </Box>
               
    </Box> );
}

export default Body;