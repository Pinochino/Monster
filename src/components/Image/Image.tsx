import React from "react";
import classNames from "classnames/bind";
import style from "./Image.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

interface ImageProps {
    src: string,
    maxHeight: string,
    height?: string,
    width?: string,
    alt: string,
    scaledown?: boolean,
    cover?: boolean,
    rounded?: boolean,
    fade?: boolean,
    flash?: boolean,
    shine?: boolean,
    zoomin?: boolean,
    zoomout?: boolean,
    slide?: boolean,
    className?: string,
    onClick?: () => void,
    to?: string,
    href?: string,
}

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
    className,
    onClick,
    to,
    href,
    ...passProps
}: ImageProps) {
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
        [className]: !!className,
    });

    const imgElement = (
        <img
            className={classes}
            src={src}
            alt={alt}
            height={height}
            width={width}
            onClick={onClick}
            {...passProps}
        />
    );

    if (to) {
        return (
            <Link to={to} style={{ maxHeight }}>
                {imgElement}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} style={{ maxHeight }}>
                {imgElement}
            </a>
        );
    }

    return (
        <div style={{ maxHeight }} className={classes}>
            {imgElement}
        </div>
    );
}

export default Image;
