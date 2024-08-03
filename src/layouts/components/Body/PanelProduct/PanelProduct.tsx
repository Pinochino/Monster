import React from "react";
import { Box } from "@mui/material";
import PanelHead from "./PanelHead";
import PanelBody from "./PanelBody";

function PanelProduct() {
    return (
        <Box bgcolor="red" width='100%' display='block'>
            <Box component="section" m="2rem 0" bgcolor="green" sx={{ boxShadow: '0 1px 2px 0 rgba(60, 64, 67, .1), 0 2px 6px 2px rgba(60, 64, 67, .15)'}}>
                <PanelHead />
            </Box>
            <Box component="section"  bgcolor="purple">
                <PanelBody />
            </Box>
        </Box>
    );
}

export default PanelProduct;