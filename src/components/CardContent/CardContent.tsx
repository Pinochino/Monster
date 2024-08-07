import classNames from "classnames/bind";
import React, { useState } from "react";
import style from "./CardContent.module.scss";
import { Link } from "react-router-dom";
import Image from "../Image";
import { Box, Rating } from "@mui/material";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
import { hover } from "@testing-library/user-event/dist/hover";


const cx = classNames.bind(style);

interface CardProps {
    children?: React.ReactNode,
    displayCartProgress?: boolean,
    displayCartSale?: boolean,
    check?: boolean,
    title?: string;
    oldCost?: string;
    newCost?: string;
    total?: number;
    value?: number;
    img?: string;
    discount?: string;
    addrress?: string;
    sold?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    to?: string;
    href?: string;
}

const CardImage = ({ src, alt, discount, hover }) => (
    <Box display="flex" justifyContent="center">
        <span className={cx("discount", { hover: hover })}>{discount}</span>
        <Image
            scaledown
            zoomout
            src={src}
            alt={alt}
            width="160px"
            maxHeight="100%"
            className={cx("image", { hover: hover })}
            onClick={undefined}
            to={undefined}
            href={undefined}
        />
    </Box>
);

const CardTitle = ({ title, hover }) => (
    <Box>
        <span className={cx("title", { hover: hover })}>{title}</span>
    </Box>
);

const CardStars = ({ sold, hover }) => {
    const [value, setValue] = useState(2);
    return (
        <Box
            className={cx("CardStars", { hover: hover })}
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

const CardProgress = ({ sold, total, hover }) => {

    return (
        (<Box display="flex" flexDirection="column"
            sx={{ "& > *": { m: "3px 0" } }}
            className={cx("CardProgress", { hover: hover })}
        >
            <progress value={sold} max={total} />
            <span>
                Đã bán:{" "}
                <span className={cx("text")}>
                    {sold}/{total}
                </span>{" "}
                sản phẩm
            </span>
        </Box >
        )
    )
}

const CardGroup = ({ hover }) => {
    return (
        <Box
            className={cx("CardGroup", { hover: hover })}
            sx={{
                "& > svg": {
                    width: "20px",
                    height: "20px",
                    background: "#fff",
                    color: "black",
                    borderRadius: "50px",
                    p: "4px",
                    m: "2px 0",
                },
            }}
        >
            <CiHeart />
            <MdOutlineRemoveRedEye />
            <FaReact />
        </Box>
    );
};

const CardPrice = ({ hover, newCost, oldCost }) => {
    return (
        <Box
            display="inline-flex"
            justifyContent="space-between"
            className={cx("CardPrice", { hover: hover })}
        >
            <span className={cx("newCost")}>
                {newCost} <b>đ</b>
            </span>
            <sup className={cx("oldCost")}>
                {oldCost} <b>đ</b>
            </sup>
        </Box>
    );
};

const CardButton = ({ hover }) => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <button className={cx("button", { hover: hover })}>
                Thêm vào giỏ hàng
            </button>
        </Box>
    );
};

const CardSale = ({ hover, address, check, value }) => {
    return (
        <Box className={cx("CardSale", { hover: hover })}>
            {check && <BsCheckLg />}
            <span>Còn <span>{value}</span> sản phẩm </span>
            <span>{address}</span>
        </Box>
    )
};

function CardContent({
    children,
    displayCartProgress = false,
    displayCartSale = false,
    check = false,
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

    return (
        <Comp
            {...props}
            className={cx("wrapper")}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <CardImage src={img} alt="product" discount={discount} hover={hover} />
            <Box display="block">
                <CardTitle title={title} hover={hover} />
                <Box>
                    <CardStars sold={sold} hover={hover} />
                    <CardGroup hover={hover} />
                    <CardPrice hover={hover} newCost={newCost} oldCost={oldCost} />
                    {displayCartProgress ? <CardProgress sold={sold} total={total} hover={hover} /> : null}
                    {displayCartSale ? <CardSale hover={undefined} address={undefined} check={check} value={undefined} /> : null}
                    <CardButton hover={hover} />
                </Box>
            </Box>
        </Comp>
    );
}

export default CardContent;
