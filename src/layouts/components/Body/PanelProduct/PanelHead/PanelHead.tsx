import { Box, Typography } from "@mui/material";
import classNames from "classnames/bind";
import React from "react";
import style from './PanelHead.module.scss'

import { CiClock1 } from "react-icons/ci";
import Button from "~/components/Button";
import Icon from "~/components/Icon/Icon";

const cx = classNames.bind(style);
function PanelHead() {
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="inline-flex" 
            alignItems='center'
            p='15px 0'
            sx={{
                "& > svg": {
                    height: '25px',
                    width: '25px',
                },
                "& > *": {
                    m: '0 5px'
                }
            
            }}
            >
               <CiClock1 color="red"/>
                <Typography variant="h4">HOT DEALS</Typography>
                <Typography variant="h4">GIÁ TỐT NHẤT</Typography>
            </Box>

            <Box flex='0.5'>
                <span>Nhanh lên! Ưu đãi sẽ kết thúc sau: </span>
                <Button text>7 Ngày</Button>
                <Button text>8 Giờ</Button>
                <Button text>5 Phút</Button>
                <Button text>4 Giây</Button>
            </Box>
        </Box>
    );
}

export default PanelHead;