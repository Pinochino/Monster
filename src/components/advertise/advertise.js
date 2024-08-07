import { Box } from '@mui/material';
import React from 'react';
import images from '~/assets/images/Image';
import Image from '../Image';


function Advertise() {
    return ( 
    <Box>
        <Image src={images.advertise1} maxHeight='10rem' width='100%' ></Image>
        <Image src={images.advertise1} maxHeight='10rem' width='100%'></Image>
        <Image src={images.advertise1} maxHeight='10rem'width='100%'></Image>
    </Box> );
}

export default Advertise;