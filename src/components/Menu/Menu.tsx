import React, { useState } from "react";
import { Box, Fade, Paper, Popper, Typography, useTheme } from "@mui/material";
import classNames from "classnames/bind";
import style from "./Menu.module.scss";

import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { tokens } from "~/theme";

const cx = classNames.bind(style);

function Menu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
  return (
    <Box
      display="block"
      boxShadow="0 1px 2px 0 rgba(60, 64, 67, .1), 0 2px 6px 2px rgba(60, 64, 67, .15)"
    >
      <Popper
        sx={{ zIndex: 1200 }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>

      <Box className={cx("wrapper")} p="30px 25px 30px 38px">
        <Box
          component="section"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          {" "}
          <Typography variant="h5">Máy tính & Laptop </Typography>
          <BiChevronRight
            size="20px"
            color= {colors.grey[300]}
            onClick={handleClick("right-start")}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {" "}
          <Typography variant="h5">Thời trang nam</Typography>
          <BiChevronRight size="20px"   color= {colors.grey[300]} />
        </Box>
        <Box
          sx={{
            "& .MuiTypography-h5": {
              fontSize: "15px",
              padding: "5px 0",
              borderBottom: "1px solid  #e9e9e9 !important",
            },
            "> *": {
              textDecoration: "none",
              fontWeight: 500,
              fontFamily: "Roboto",
              color: "#333",
            },
          }}
        >
          <Link to="/#">
            {" "}
            <Typography variant="h5">Đồng hồ</Typography>
          </Link>
          <Link to="/#">
            <Typography variant="h5">Thời trang nữ</Typography>
          </Link>
          <Link to="/#">
            {" "}
            <Typography variant="h5">Mẹ & bé</Typography>
          </Link>
          <Link to="/#">
            <Typography variant="h5">Nhà cửa & đời sống</Typography>{" "}
          </Link>
          <Link to="/#">
            {" "}
            <Typography variant="h5">Sắc đẹp</Typography>
          </Link>
          <Link to="/#">
            <Typography variant="h5">Sức khỏe</Typography>{" "}
          </Link>
          <Link to="/#">
            {" "}
            <Typography variant="h5">Giày dép nữ</Typography>
          </Link>
          <Link to="/#">
            <Typography variant="h5">Thiết bị điện tử</Typography>{" "}
          </Link>
          <Link to="/#">
            <Typography variant="h5">Máy ảnh & máy quay phim</Typography>{" "}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Menu;
