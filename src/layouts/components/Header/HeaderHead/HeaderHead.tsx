import classNames from "classnames/bind";
import style from './HeaderHead.module.scss';
import { Box, Typography } from "@mui/material";
import { List, ListItem, ListItemText } from '@mui/material';
import React from "react";

const cx = classNames.bind(style);
function HeaderHead() {
    return ( <div className={cx("wrapper")}>
        <Box>
           <Typography variant="h3">Đăng kí bán hàng cùng VVDSHOP</Typography>
           <Box>
                <List>
                    <ListItemText>Vị trí cửa hàng </ListItemText>
                    <ListItemText>Theo dõi đơn hàng</ListItemText>
                    <ListItemText>FAQs</ListItemText>
                    <ListItemText>Vietnamese</ListItemText>
                    <ListItemText>Việt Nam</ListItemText>
                </List>
           </Box>
        </Box>
    </div> );
}

export default HeaderHead;