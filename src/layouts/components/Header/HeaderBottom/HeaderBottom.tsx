import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./HeaderBottom.module.scss";
import { Box, Typography } from "@mui/material";

import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import { RiMenu2Line } from "react-icons/ri";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function HeaderBottom() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleShow();
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box
      className={cx("wrapper")}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      fontSize="14"
      fontWeight="500"
    >
      <Box
        className={cx("Menu")}
        display="inline-flex"
        justifyContent="space-between"
      >
        <Button onClick={handleShow}>
          <FormatAlignLeftIcon />
        </Button>
        {show && (
          <Box display='flex'
          flexDirection='column'
          >
            <Typography variant="h5">Trang chủ</Typography>
            <Typography variant="h5">Danh mục</Typography>
            <Typography variant="h5">Bài viết</Typography>
            <Typography variant="h5">Hỗ trợ</Typography>
            <Typography variant="h5" color="rebeccapurple">
              Đăng kí bán hàng
            </Typography>
          </Box>
        )}
        <Typography variant="h5">Danh mục sản phẩm</Typography>
      </Box>

      <Box
        className={cx("title")}
        display="inline-flex"
        justifyContent="space-between"
        flex="0.5"
      >
        <Typography variant="h5">Trang chủ</Typography>
        <Typography variant="h5">Danh mục</Typography>
        <Typography variant="h5">Bài viết</Typography>
        <Typography variant="h5">Hỗ trợ</Typography>
        <Typography variant="h5" color="rebeccapurple">
          Đăng kí bán hàng
        </Typography>
      </Box>

      <Box
        className={cx("advertise")}
        display="flex"
        justifyContent="space-between"
      >
        <span>
          <RiMenu2Line />
        </span>
        <Typography variant="h5" color="yellow">
          Khuyến mãi 20% cho đơn hàng đầu tiên
        </Typography>
      </Box>
    </Box>
  );
}

export default HeaderBottom;
