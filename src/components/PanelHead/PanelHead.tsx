import { Box, List, ListItemText, ToggleButton, Typography } from "@mui/material";
import classNames from "classnames/bind";
import React, {  useState } from "react";
import style from "./PanelHead.module.scss";

import { BsChevronDoubleRight } from "react-icons/bs";
import { CiClock1 } from "react-icons/ci";
import { tabs } from "./PanelHeadData";


const cx = classNames.bind(style);
interface PanelHead {
  title?: string;
  text?: string;
  property?: boolean;
  icon?: boolean;
  time?: boolean;
  category?: boolean;
}

const PanelTime = () => {
  return (
    <Box
      flex="0.5"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
    >
      <span>Nhanh lên! Ưu đãi sẽ kết thúc sau: </span>
      <Box
        className={cx("time")}
        display="flex"
        justifyContent="space-between"
        flex="0.7"
      >
        <span>7 Ngày</span>
        <span>8 Giờ</span>
        <span>5 Phút</span>
        <span>4 Giây</span>
      </Box>
    </Box>
  );
};

const PanelCategory = () => {
  return (
    <Box
      display='inline-flex'
      alignItems='center'
      justifyContent='space-around'
      flex='0.1'
    >
      <Typography variant="h5">Xem tất cả</Typography>
      <BsChevronDoubleRight />
    </Box>
  )
}


const PanelProperty = () => {
  return (
    <Box flex='0.8'>
      <List sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', flex:'0.6' }} className={cx('properties')}>
        {tabs.map((tab, index) => (
          <ListItemText key={index}><button>{tab}</button></ListItemText>
        ))}
       
      </List>

    </Box>
  )
}


function PanelHead({
  title,
  text,
  time = false,
  category = false,
  property = false,
  icon = false,
}) {

 
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p='0 1.4rem'>
      <Box
        display="inline-flex"
        alignItems="center"
        p="15px 0"
        sx={{
          "& > svg": {
            height: "25px",
            width: "25px",
            // ml: "10px",
          },
          "& > h4": {
            m: "0 8px !important",
            fontSize: "14px !important",
          },
        }}
      >
        {icon ? <CiClock1 color="red" /> : null}
        <Typography variant="h4" color="red">
          {title}
        </Typography>
        <Typography variant="h4" color="#888888">
          {" "}
          {text}
        </Typography>
      </Box>
      {time ? <PanelTime /> : null}
      {category ? <PanelCategory /> : null}
      {property ? <PanelProperty /> : null}
    </Box>
  );
}

export default PanelHead;
