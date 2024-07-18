import React from "react";
import style from "./HeaderBody.module.scss";
import classNames from "classnames/bind";
import { Box, Button, Input } from "@mui/material";

import images from "~/assets/images/Image";

const cx = classNames.bind(style);
console.log(images.logo);

function HeaderBody() {
  return (
    <Box className={cx("wrapper")}>
      <Box className={cx("logo")}>
        <img
        className={cx('image-logo')}
        alt="logo"
        src={images.logo}
        />
      </Box>
      <Box className={cx("Search")}>
        <Input variant="plain" />
        <Button variant="solid">Submit</Button>
      </Box>
    </Box>
  );
}

export default HeaderBody;
