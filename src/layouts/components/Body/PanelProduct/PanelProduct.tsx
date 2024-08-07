import React from "react";
import { Box } from "@mui/material";
import PanelHead from "../../../../components/PanelHead";
import PanelBody from "./PanelBody";

function PanelProduct() {
    return (
        <Box width='100%'>
            <Box component="section" m="2rem 0"  sx={{ boxShadow: '0 1px 2px 0 rgba(60, 64, 67, .1), 0 2px 6px 2px rgba(60, 64, 67, .15)'}}
            borderRadius='6px'
            >
                <PanelHead  icon={true} title='HOT DEALS' time={true} category={false} property={false} text={undefined} />
            </Box>
            <Box component="section"  >
                <PanelBody />
            </Box>
        </Box>
    );
}

export default PanelProduct;