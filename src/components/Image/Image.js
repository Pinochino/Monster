import React from "react";
import classNames from "classnames/bind";
import style from "./Image.module.scss"; // Import SCSS
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function Image({
    src,
    maxHeight,
    height = 'auto',
    width = 'auto',
    alt,
    scaledown = false,
    cover = false,
    rounded = false,
    fade = false,
    flash = false,
    shine = false,
    zoomin = false,
    zoomout = false,
    slide = false,
    children = null,
    className,
    onClick,
    to,
    href,
    ...passProps
}) {
    let Comp = "img"; // Khởi tạo Comp với kiểu img
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to; // Nếu có to, sử dụng Link
        Comp = Link;
    } else if (href) {
        props.href = href; // Nếu có href, sử dụng thẻ a
        Comp = 'a';
    }
  

    const classes = cx("wrapper", {
        scaledown,
        cover,
        rounded,
        fade,
        flash,
        shine,
        zoomin,
        zoomout,
        slide,
        [className]: !!className, // Kiểm tra className
    });


    return (
        <Comp className={classes} src={src} alt={alt} height={height} width={width} {...props}
        style={{maxHeight}}
        >
            {children}
        </Comp>
    );
}

export default Image;
