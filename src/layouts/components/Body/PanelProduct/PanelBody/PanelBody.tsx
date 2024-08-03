import { Box, Typography } from "@mui/material";
import classNames from "classnames/bind";
import React from "react";
import style from './PanelBody.module.scss';

const cx = classNames.bind(style);
function PanelBody() {
    return ( 
    <Box display="block">
        <Typography variant="h2">Hello World</Typography>
    </Box> 
    );
}

export default PanelBody;