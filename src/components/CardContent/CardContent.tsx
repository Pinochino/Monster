import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import style from "./CardContent.module.scss";
import { Link } from "react-router-dom";
import Image from "../Image";
import { Box,Rating } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Button from "../Button";

const cx = classNames.bind(style);

interface CardProps {
    children?: React.ReactNode;
    display?: boolean;
    title?: string;
    oldCost?: string;
    newCost?: string;
    total?: number;
    value?: number;
    img?: string;
    discount?: string;
    sold?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    to?: string;
    href?: string;
}

const CardImage = ({ src, alt, discount }) => (
    <Box display="flex" justifyContent="center">
        <span className={cx("discount")}>{discount}</span>
        <Image
            src={src}
            alt={alt}
            width="160px"
            maxHeight="100%"
            className={cx("image")}
            onClick={undefined}
            to={undefined}
            href={undefined}
        />
    </Box>
);

const CardTitle = ({ title }) => (
    <Box>
        <span className={cx("title")}>{title}</span>
    </Box>
);

const CardStars = ({ sold }) => {
    const [value, setValue] = useState(2);

    return (
        <Box
            display="inline-flex"
            justifyContent="space-around"
            alignItems="center"
            sx={{
                "& > svg": {
                    width: "15px",
                    height: "15px",
                    lineHeight: "1.5",
                    fill: "#f59e0b",
                },
            }}
        >
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <span style={{ marginLeft: "8px" }}>Đã bán: {sold}</span>
        </Box>
    );
};

const CardProgress = ({ sold, total }) => (
    <Box display="flex" flexDirection="column" sx={{ "& > *": { m: "3px 0" } }}>
        <progress value={sold} max={total} />
        <span>
            Đã bán:{" "}
            <span className={cx("text")}>
                {sold}/{total}
            </span>{" "}
            sản phẩm
        </span>
    </Box>
);

function CardContent({
    children,
    display = false,
    title,
    oldCost,
    newCost,
    total,
    img,
    discount,
    sold,
    onClick,
    to,
    href,
    ...passProps
}: CardProps) {
    let Comp: React.ElementType = "div";
    const props: any = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = "a";
    }

    const [hover, setHover] = useState(false);
    useEffect(() => {
        setInterval(() => {
            setHover(true)
        }, 8000)
    })
    
    return (
        <Comp {...props} className={cx("wrapper")}
        
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
            <CardImage src={img} alt="product" discount={discount} />
            <Box display="block">
                <CardTitle title={title} />
                <Box>
                    <CardStars sold={sold} />
                    <Box display="inline-flex" justifyContent="space-between">
                        <span className={cx("newCost")}>
                            {newCost} <b>đ</b>
                        </span>
                        <sup className={cx("oldCost")}>
                            {oldCost} <b>đ</b>
                        </sup>
                    </Box>
                    <CardProgress sold={sold} total={total} />
                    {hover ? <Button primary >Hello</Button> : null}
                </Box>
            </Box>
        </Comp>
    );
}

export default CardContent;


// = 'hover' ? <visible button> : <invisible></invisible>
