import { Box, Button, Checkbox, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, OutlinedInput,  Typography } from "@mui/material";
import classNames from "classnames/bind";
import React, { useState } from "react";

import style from './LoginForm.module.scss'
import {  Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import routerConfigs from "~/config/routerConfig";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Validation from "~/pages/SignIn/layouts/Validation";
import { red } from "@mui/material/colors";

const cx = classNames.bind(style);
function LoginForm() {

    const [password, setPassword] = useState(false);
    const [value, setValue] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState({})
    const [isEmailTouched, setIsEmailTouched] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (name === 'email') {
            setIsEmailTouched(true); // Đánh dấu email đã được nhập
            const validationErrors = Validation({ email: value }); // Chỉ truyền email để kiểm tra
            setError((prevErrors) => ({ ...prevErrors, email: validationErrors.email })); // Cập nhật lỗi email
        }
        setValue((values) => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(value);
        setError(Validation(value));
    }

    const handleClickShowPassword = () => {
        setPassword((show) => !show);
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const getIconColor = () => {
        if (error.email) return 'red';
        if (isEmailTouched &&  value.email && !error.email) return 'green';
        return 'black';
    }
    return (
        <Box
            position='relative'
        >
            <Box sx={{ background: 'green', }} height='50vh'>
                hello
            </Box>
            <Box component='section'
                height='auto' width='auto'
                position='absolute'
                left='50%'
                top='50%'
                sx={{ transform: 'translate(-50%, -50%)', background: '#fff', maxWidth: '1000px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)'
                 }}
                borderRadius= '8px'
                p="35px 35px 10px 35px"
                display='block'
            >
                <Box display='flex'
                    justifyContent='space-between'
                    flexDirection='column'
                    alignItems='center'
                    sx={{
                        '& > *': {
                            m: '0px 0 6px 0'
                        }
                    }}

                >
                    <Typography variant="h3" fontWeight='700' >VVD SHOP XIN CHÀO</Typography>
                    <span className={cx('text')}>Vui lòng đăng nhập</span>
                    <Box className={cx('mode')}
                    sx={{
                        '&  span > svg': {
                            height: '30px',
                            width: '30px',
                            m: '0px 10px 0 10px',
                        }
                    }}
                    >
                        <Link><span><FaFacebook  /></span></Link>
                        <Link><span><FcGoogle /></span></Link>
                    </Box>
                    <span className={cx('text', 'text-disable')}><span>Hoặc đăng nhập với</span></span>
                </Box>
                <Box>
                    <form onSubmit={handleSubmit}>
                        <Box display='flex' flexDirection='column'>
                            <Box className={cx('form-group')}
                                display='inline-flex'
                                justifyContent='space-between'
                                alignItems='center'
                            >
                                <label>Gmail: </label>
                                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Gmail</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type= 'email'
                                        sx={{position: 'relative'}}
                                        endAdornment={
                                            <InputAdornment 
                                            sx={{color: getIconColor()}}
                                            >
                                                <CheckCircleOutlineIcon sx={{position: 'absolute',  transform: 'translateX(-70%)',

                                                }}/>
                                            </InputAdornment>
                                        }
                                        label='email'
                                        name='email'
                                        value={value.email}
                                        onChange={handleChange}
                                    />
                                    {error.email && (<p>{error.email}</p>)}
                                    
                                    </FormControl>
                            </Box>

                            <Box className={cx('form-group')}
                                display='inline-flex'
                                justifyContent='space-between'
                                alignItems='center'
                            >
                                <label>Password: </label>
                                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={password ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {password ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label='password'
                                        name="password"
                                        value={value.password}
                                        onChange={handleChange}
                                    />
                                    {error.password && (<p>{error.password}</p>)}
                                    </FormControl>
                            </Box>
                        </Box>
                        <Box display='flex'
                            flexDirection='column'
                            alignItems='center'
                            sx={{
                                '& > *': {
                                    m: '5px 0 10px 0',
                                    
                                }
                            }}
                        >

                            <Box>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Lưu thông tin đăng nhập" />
                                <Link className={cx('link')}><span className="link">Quên mật khẩu</span></Link>
                            </Box>

                            <Button variant="outlined" color="success" type="submit">Đăng nhập</Button>
                            <Box className="register"
                                sx={{
                                    '& > *': {
                                        m: '0 10px 0 10px'
                                    }
                                }}
                            >
                                <span className={cx('text')}>Bạn không có tài khoản</span>
                                <Link className={cx('link')} to={routerConfigs.signin}><span >Đăng kí ngay</span></Link>
                            </Box>
                        </Box>
                    </form>
                </Box>
            </Box>
            <Box sx={{ background: 'red', }} height='50vh'>
                everyone
            </Box>

        </Box>);
}

export default LoginForm;