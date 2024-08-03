import classNames from 'classnames/bind';
import React from 'react';
import style from './CardContent.module.scss';
import { Link } from 'react-router-dom';
import Image from '../Image';
import { Box } from '@mui/material';
import { CiStar } from "react-icons/ci";

const cx = classNames.bind(style);

interface CardProps {
    children?: React.ReactNode,
    display?: boolean,
    title?: string,
    oldCost?: string,
    newCost?: string,
    total?: number,
    img?: string,
    discount?: string,
    sold?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>,
    to?: string,
    href?: string,
}

const CardImage = ({ src, alt, discount }) => (
    <Box>
        <span className={cx('discount')}>{discount}</span>
        <Image src={src} alt={alt} width='100%' maxHeight='100%' className={cx('image')} onClick={undefined} to={undefined} href={undefined} />
    </Box>
);

const CardTitle = ({ title }) => (
    <Box>
        <span className={cx('title')}>{title}</span>
    </Box>
);

const CardStars = ({ sold }) => (
    <Box display='inline-flex' justifyContent='space-around' alignItems='center'
    sx={{
        '& > svg': {
            width: '15px',
            height: '15px',
            lineHeight: '1.5'
        }
    }}
    >
        {Array.from({ length: 5 }, (_, index) => (
            <CiStar key={index} />
        ))}
        <span style={{marginLeft: '8px'}}>Đã bán: {sold}</span>
    </Box>
);

const CardProgress = ({ sold, total }) => (
    <Box display='flex' flexDirection='column'>
        <progress value={sold} max={total} />
        <span>Đã bán: <span className={cx('text')} >{sold}/{total}</span> sản phẩm</span>
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
        Comp = 'a';
    }

    return (
        <Comp {...props} className={cx('wrapper')}>
            <CardImage src={img} alt='product' discount={discount} />
            <Box p='1rem 0.8rem'>
                <CardTitle title={title}  />
                <CardStars sold={sold}/>
                <Box display='inline-flex' justifyContent='space-between' >
                    <span className={cx('newCost')}>{newCost} <b>đ</b></span>
                    <sup className={cx('oldCost')}>{oldCost} <b>đ</b></sup>
                </Box>
                <CardProgress sold={sold} total={total} />
            </Box>
        </Comp>
    );
}

export default CardContent;
