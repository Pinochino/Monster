import { Box, Card } from "@mui/material";
import classNames from "classnames/bind";
import React from "react";
import style from './PanelBody.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation } from "swiper/modules";

import CardContent from "~/components/CardContent";
import products from "./products";

const cx = classNames.bind(style);


function PanelBody() {
    return (
        <Box display="block" sx={{
            '& .swiper-button-next, .swiper-button-prev': {
                alignItems: 'center',
                background: '#fff',
                boxShadow: '0 0 4px 0 rgba(0, 0, 0, .2)',
                display: 'flex',
                fontSize: '1.8rem',
                height: '60px',
                justifyContent: 'center',
                opacity: '.8',
                outline: 'none',
                top: '50%',
                transition: '.3s',
                width: '30px',
            },
            '& .swiper-button-next::after, .swiper-button-prev::after': {
                color: '#3a3a3a',
                fontSize: '24px',
                fontWeight: '600',
            },
            '&  .swiper-button-prev': {
                borderRadius: '0 100px 100px 0',
                left: '0',
                paddingRight: '10px',
            },
            '&  .swiper-button-next': {
                borderRadius: '100px 0 0 100px',
                paddingLeft: '10px',
                right: '0',
            },
            mb: '3rem'

        }}>
            <Swiper
                className={cx('mySwiper3')}
                modules={[Navigation, Autoplay, Keyboard]}
                slidesPerView={6}
                spaceBetween={10}
                loop={true}
                navigation={true}
                keyboard={{ enabled: true }}
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <Card variant="outlined" sx={{ p: '10px' }}>
                            <CardContent
                                img={product.img}
                                displayCartProgress={true}
                                title={product.title}
                                sold={product.sold}
                                newCost={product.newCost}
                                oldCost={product.oldCost}
                                total={product.total}
                                discount={product.discount}
                                
                            />
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}

export default PanelBody;
