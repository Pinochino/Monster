import { Box } from "@mui/material";
import classNames from "classnames/bind";
import React from "react";
import styles from './Body.module.scss';

import PanelSlider from "./PanelSilder";
import PanelProduct from "./PanelProduct";
import PanelSale from "./PanelSale";
import images from "~/assets/images/Image";
import Image from "~/components/Image";
import PanelHot from "./PanelHot";

const cx = classNames.bind(styles)

function Body() {
    return (
     <Box className={cx('body')}>
         <Box className={cx("panel-slider")} mb='30px'>
             <Box className={cx("panel-body")}>
                <PanelSlider />
             </Box>
         </Box>

         <Box className={cx("panel-product")} mb='30px'>
             <Box className={cx("panel-body")}>
                <PanelProduct />
             </Box>
         </Box>
               
         <Box className={cx("panel-product")} mb='30px'>
             <Box className={cx("panel-body")}>
                <PanelSale />
             </Box>
         </Box>
         <Box className={cx("panel-product")} mb='30px'>
             <Box className={cx("panel-image")}>
             <Image src={images.img1} alt="Advertise" maxHeight='5rem' width="100%" className={undefined} onClick={undefined} to={undefined} href={undefined} cover></Image>
             </Box>
         </Box>

         <Box className={cx("panel-product")} mb='30px'>
             <Box className={cx("panel-body")}>
               <PanelHot />
             </Box>
         </Box>
        
         
    </Box> );
}

export default Body;