import React from 'react';
import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classNames from 'classnames/bind';
import style from './Slider.module.scss'
import Image from '../Image';
import images from '~/assets/images/Image';
import { Box } from '@mui/material';



const cx = classNames.bind(style);
function Slider() {


    return (
        <Box sx={{
            '> *:not(:first-of-type)': {
                margin: '0 15px 0 15px',
            },
            '.MuiBox-root.css-1fla0u8': {
                marginBottom: '15px',
            }
        }}>
            <Box
                component='section'
                mb='30px'
                sx={{
                    '& .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active': {
                        width: '23px!important',
                        height: '8px',
                        opacity: 1,
                        borderRadius: '10px',
                        transition: '0.56s ease-in',
                    },
                    '& .swiper-button-prev:after, .swiper-button-next:after': {
                        fontSize: '20px',
                        color: '#888888',

                    }
                }}
            >
                <Swiper
                    className={cx('mySwiper')}
                    modules={[Navigation, Pagination, Autoplay, Keyboard]}
                    slidesPerView={1}
                    spaceBetween={50}
                    keyboard={{ enabled: true }}
                    loop={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                // autoplay={{
                //     delay: 1000,
                //     disableOnInteraction: false,
                // }}

                >
                    <SwiperSlide><Image src={images.slider1} alt="slider" maxHeight='300px' width='100%' cover className={cx('image')} onClick={() => console.log("choose image")} to={undefined} href={undefined} /></SwiperSlide>
                    <SwiperSlide><Image src={images.slider1} alt="slider" maxHeight='300px' width='100%' cover className={cx('image')} onClick={() => console.log("choose image")} to={undefined} href={undefined} /></SwiperSlide>
                    <SwiperSlide><Image src={images.slider1} alt="slider" maxHeight='300px' width='100%' cover className={cx('image')} onClick={() => console.log("choose image")} to={undefined} href={undefined} /></SwiperSlide>
                </Swiper>
            </Box>
            <Box 
                sx={{
                    '.swiper-slide > img': {
                        minHeight: '120px', 
                    },
                    '.swiper  .swiper-slide > *': {
                        marginRight: '0px'
                    },
                }}
            >

                <Swiper
                    className={cx('mySwiper2')}
                    modules={[ Autoplay, Keyboard]}
                    slidesPerView={5}
                    spaceBetween={1}
                    keyboard={{ enabled: true }}
                    loop={true}
                    // autoplay={{
                    //     delay: 1500,
                    //     disableOnInteraction: true,
                    // }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                >
                    <SwiperSlide><Image src={images.slider1} alt="slider" maxHeight='300px' width='100%' cover className={cx('image')} onClick={() => console.log("choose image")} to={undefined} href={undefined} /></SwiperSlide>
                    <SwiperSlide><Image src={images.slider1} alt="slider" maxHeight='300px' width='100%' cover className={cx('image')} onClick={() => console.log("choose image")} to={undefined} href={undefined} /></SwiperSlide>
                    <SwiperSlide><Image src={images.slider1} alt="slider" maxHeight='300px' width='100%' cover className={cx('image')} onClick={() => console.log("choose image")} to={undefined} href={undefined} /></SwiperSlide>
                    <SwiperSlide><Image src={images.slider1} alt="slider" maxHeight='300px' width='100%' cover className={cx('image')} onClick={() => console.log("choose image")} to={undefined} href={undefined} /></SwiperSlide>
                    <SwiperSlide><Image src={images.slider1} alt="slider" maxHeight='300px' width='100%' cover className={cx('image')} onClick={() => console.log("choose image")} to={undefined} href={undefined} /></SwiperSlide>
                    <SwiperSlide><Image src={images.slider1} alt="slider" maxHeight='300px' width='100%' cover className={cx('image')} onClick={() => console.log("choose image")} to={undefined} href={undefined} /></SwiperSlide>
                    <SwiperSlide><Image src={images.slider1} alt="slider" maxHeight='300px' width='100%' cover className={cx('image')} onClick={() => console.log("choose image")} to={undefined} href={undefined} /></SwiperSlide>
                    <SwiperSlide><Image src={images.slider1} alt="slider" maxHeight='300px' width='100%' cover className={cx('image')} onClick={() => console.log("choose image")} to={undefined} href={undefined} /></SwiperSlide>
                    <SwiperSlide><Image src={images.slider1} alt="slider" maxHeight='300px' width='100%' cover className={cx('image')} onClick={() => console.log("choose image")} to={undefined} href={undefined} /></SwiperSlide>
                    <SwiperSlide><Image src={images.slider1} alt="slider" maxHeight='300px' width='100%' cover className={cx('image')} onClick={() => console.log("choose image")} to={undefined} href={undefined} /></SwiperSlide>
                    <SwiperSlide><Image src={images.slider1} alt="slider" maxHeight='300px' width='100%' cover className={cx('image')} onClick={() => console.log("choose image")} to={undefined} href={undefined} /></SwiperSlide>
                </Swiper>
            </Box>
        </Box>
    );
};

export default Slider;
