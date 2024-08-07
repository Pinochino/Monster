import React from "react";
import style from "./HeaderBody.module.scss";
import classNames from "classnames/bind";
import { Box, Drawer, List, Typography, Button } from "@mui/material";
import images from "~/assets/images/Image";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { CiSearch, CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { TiTag } from "react-icons/ti";
import { Link } from "react-router-dom";
import routerConfigs from "~/config/routerConfig";

const cx = classNames.bind(style);

function HeaderBody() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const DrawerList = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Typography variant="h5">Hello World</Typography>
      </List>
    </Box>
  );

  return (
    <Box
      className={cx("wrapper")}
      display="flex"
      justifyContent="space-between"
    >
      <Box className={cx("logo")} display="inline-flex" alignItems="center">
        <img className={cx("image-logo")} alt="logo" src={images.logo1} />
        <img className={cx("image-logo")} alt="logo" src={images.logo2} />
      </Box>

      <Box
        className={cx("Search")}
        display="inline-flex"
        alignItems="center"
        flex="0.7"
      >
        <Box
          border="1px solid #e7e7e7"
          width="75%"
          display="flex"
          alignItems="center"
          height="40%"
          borderRadius="5px 0px 0px 5px"
          lineHeight="0"
        >
          <span>Tất cả danh mục</span>
          <span>
            <KeyboardArrowDownRoundedIcon className={cx("icon-menu")} />
          </span>
          <input placeholder="Tìm kiếm sản phẩm..." />
        </Box>
        <Button size="medium" variant="contained" color="success">
          <CiSearch />
        </Button>
      </Box>

      <Box
        className={cx("mode")}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box className={cx("login")} display="flex" alignItems="center">
          <span className={cx("mode-logo")}>
           <Link to={routerConfigs.login}> <CiUser cursor="pointer" /></Link>
          </span>
          <Box className={cx("login-title")}>
            <Typography variant="h6" fontWeight="400">
              login
            </Typography>
            <Typography variant="h6" fontSize="15px" fontWeight="600">
              Account
            </Typography>
          </Box>
        </Box>

        <Box>
          <span className={cx("mode-logo")}>
            <CiHeart cursor="pointer" />
          </span>
        </Box>

        <Box className={cx("cart")} display="flex" alignItems="center">
          {["left", "right", "top", "bottom"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Drawer
                anchor={'right'}
                open={state[anchor]}
                onClose={toggleDrawer('right', false)}
              >
                {DrawerList('right')}
              </Drawer>
            </React.Fragment>
          ))}
              <span className={cx("mode-logo")}>
                <CiShoppingCart
                  cursor="pointer"
                  to={"/#"}
                  onClick={toggleDrawer('right', true)}
                />
              </span>
          <Box className={cx("cart-title")}>
            <Typography variant="h6" fontWeight="400">
              Giỏ hàng <TiTag cursor="pointer" />
            </Typography>
            <Typography
              variant="h6"
              fontSize="15px"
              fontWeight="600"
              textAlign="center"
            >
              0 đ
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HeaderBody;
