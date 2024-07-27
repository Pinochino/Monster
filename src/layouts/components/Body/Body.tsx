import { Box } from "@mui/material";
import classNames from "classnames/bind";
import React from "react";
import styles from './Body.module.scss';

import PanelSlider from "./PanelSilder";

const cx = classNames.bind(styles)

function Body() {
    return (
     <Box>
         <Box className={cx("panel-slider")}>
             <Box className={cx("panel-body")}>
                <PanelSlider />
             </Box>
         </Box>
    </Box> );
}

export default Body;