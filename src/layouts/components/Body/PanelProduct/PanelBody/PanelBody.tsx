import { Box, Card} from "@mui/material";
import classNames from "classnames/bind";
import React from "react";
import style from './PanelBody.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation } from "swiper/modules";
import image from "~/assets/images/Product/image";
import CardContent from "~/components/CardContent";

const cx = classNames.bind(style);
function PanelBody() {

    const card = (
        <React.Fragment>
            <CardContent
            img={image.img1}
            display={true}
            title="Acer Chromebook Plus 514 Laptop - 14 WUXGA 1920..."
            sold="2"
            newCost='32.038.000'
            oldCost="32.050.000"
            total={55}
            discount="10%"
            />
        </React.Fragment>
    )

    return ( 
    <Box display="block">
        <Swiper className={cx('mySwiper3')}
        modules={[Navigation, Autoplay, Keyboard]}
        slidesPerView={6}
        spaceBetween={50}
        loop={true}
        navigation={true}
        keyboard={{enabled: true}}
        >
            <SwiperSlide>
                <Card variant="outlined">{card}</Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card variant="outlined">{card}</Card>
            </SwiperSlide>  
            <SwiperSlide>
                <Card variant="outlined">{card}</Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card variant="outlined">{card}</Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card variant="outlined">{card}</Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card variant="outlined">{card}</Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card variant="outlined">{card}</Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card variant="outlined">{card}</Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card variant="outlined">{card}</Card>
            </SwiperSlide>
        </Swiper>
    </Box> 
    );
}

export default PanelBody;