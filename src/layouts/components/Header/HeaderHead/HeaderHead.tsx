import classNames from "classnames/bind";
import style from "./HeaderHead.module.scss";
import { Box, Typography } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import React from "react";

const cx = classNames.bind(style);
function HeaderHead() {
  return (
    <div className={cx("wrapper")}>
      <Box
        display="inline-flex"
        width="100%"
        justifyContent="space-between"
        fontSize="18px"
        alignItems="center"
      >
        <Box>
          <Typography variant="h5">Đăng kí bán hàng cùng VVDSHOP</Typography>
        </Box>
        <Box
          flex="0.5"
          component="section"
          display="inline-flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5">Vị trí cửa hàng </Typography>
          <Typography variant="h5">FAQs</Typography>
          <Box 
          display="flex"
          justifyContent="center"
          >
            <Typography variant="h5" textAlign="center">Vietnamese
            </Typography>
              <KeyboardArrowDownRoundedIcon className={cx('icon-menu')}  />
          </Box>


          <Box 
          display="flex"
          justifyContent="center"
          >
            <Typography variant="h5" textAlign="center">Việt Nam (VND đ) 
            </Typography>
              <KeyboardArrowDownRoundedIcon className={cx('icon-menu')}  />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default HeaderHead;
