import React from "react";
import classNames from "classnames/bind";
import styles from './HeaderBottom.module.scss';
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function ContentToggle() {
    return ( 
    <Box className={cx('wrapper')}>
        <Link to={'/#'}>Iphone</Link>
        <Link to={'/#'}>Laptop</Link>
        <Link to={'/#'}>Book</Link>
        <Link to={'/#'}>Cast</Link>
        <Link to={'/#'}>Iphone</Link>
    </Box> )
    ;
}

export default ContentToggle;