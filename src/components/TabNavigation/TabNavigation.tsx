import { Box, Grid, Tab, Tabs } from "@mui/material";
import React from "react";
import { PanelHeadData, tabs } from "../PanelHead/PanelHeadData";
import CardContent from "../CardContent";

interface TabProps {
    children?: React.ReactNode;
    index?: number;
    value?: number;
}

function CustomTabPanel(props: TabProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

function TabNavigation() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    {tabs.map((tab, index) => (
                        <Tab label={tab} {...a11yProps(index)} />
                    ))}
                </Tabs>
            </Box>
           {Object.keys(PanelHeadData).map(data => (
            <Box>
                {PanelHeadData[data].map((product, index) => (
                  <Grid>
                      <CardContent 
                    key={index}
                    img={product.img}
                    title={product.title}
                    check={product.check}
                    oldCost={product.oldCost}
                    newCost={product.newCost}
                    value={product.value}
                    total={product.total}
                    displayCartSale={product.displayCartSale}
                    />
                  </Grid>
                ))}
            </Box>
           ))}
        </Box>
    );
}
export default TabNavigation;
