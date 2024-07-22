import React from 'react';
import style  from './Header.module.scss';
import classNames from 'classnames/bind';
import { Box } from '@mui/material';
import HeaderHead from './HeaderHead';
import HeaderBody from './HeaderBody';


const cx = classNames.bind(style);

function Header() {
    return (
   <div className={cx('header')}>
       <Box className={cx("wrapper-head")} >
          <Box className={cx("panel-head")}>
             <HeaderHead />
          </Box>
       </Box>
         <Box className={cx("wrapper-body")}>
             <Box className={cx("panel-body")}>
                <HeaderBody />
             </Box>
         </Box>
   </div>
    );
}

export default Header;