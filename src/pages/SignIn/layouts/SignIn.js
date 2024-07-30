import React, { useState } from "react";
import { Avatar, Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import classNames from "classnames/bind";
import style from './SignIn.module.scss';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import images from "~/assets/images/Image";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function SignIn() {

    const [openPassword, setOpenPassword] = useState(false);

    const handleClickShowPassword = () => {
        setOpenPassword((show) => !show);
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const [state, setState] = useState({
        image: '',
        surname: '',
        name: '',
        email: '',
        password: '',
        checkPassword: '',
    })

    const handleRequestInformation = (e) =>{
        const {name, value} = e.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    };
    
    return (
        <Box
            display='flex'

        >
            <Box sx={{ background: 'red' }} width='50%' height='100vh'>
                <h3>Hello</h3>
            </Box>
            <Box sx={{ background: 'green' }} width='50%' height='100vh'
                position='relative'

            >
                <Box
                    position='absolute'
                    top='50%'
                    left='50%'
                    sx={{
                        background: '#fff', transform: 'translate(-50%, -50%)',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)',
                        p: '30px'
                    }}
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                    flexDirection='column'
                >
                    <Box>
                        <Typography variant="h3" textAlign='center'>Registration Form</Typography>
                        <Box className={cx('use-image')}
                            justifyContent='space-between'
                            display='flex'
                            flexDirection='column'
                            alignItems='center'
                            textAlign='center'
                        >
                            <Avatar alt="image" src={images.user} sx={{height: '55px', width: '55px', marginBottom: '8px'}}></Avatar>
                            <input type="file" style={{maxWidth: '172px'}} 
                            value={state.image}
                            />
                        </Box>
                    </Box>

                    <Box component='section'
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='space-between'
                    mt='5px'
                    >
                        <form onSubmit='get'>
                            <Box display='flex' flexDirection='column'>
                                <Box className={cx('form-group')}
                                display='inline-flex'
                                justifyContent='space-between'
                                mb='10px'
                                sx={{
                                    '& > *:first-of-type':{
                                        marginRight: '4px!important',
                                    }
                                }}
                                >
                                    <TextField
                                        margin='dense'
                                        placeholder="Trần Đình"
                                        label='Họ đệm'
                                        variant="outlined"
                                        value={state.surname}
                                    ></TextField>
                                    <TextField
                                        margin='dense'
                                        placeholder="Hùng"
                                        label='Tên'
                                        variant="outlined"
                                        value={state.name}
                                    ></TextField>
                                </Box>

                                <Box className={cx('form-group')}
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                >
                                       <FormControl sx={{ width: '100%', m: 'auto' }} variant="outlined">
                                        <TextField
                                            variant="outlined"
                                            margin='dense'
                                            type="email"
                                            placeholder="email"
                                            label='email'
                                            value={state.email}
                                        />
                                    </FormControl>
                                </Box>


                                <Box className={cx('forn-group')}
                                display='flex'
                                flexDirection='column'
                                alignItems='center'
                                >
                                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput
                                            margin='dense'
                                            id="outlined-adornment-password"
                                            placeholder="password"
                                            type={openPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {openPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            value={state.password}
                                            label='mật khẩu'
                                        />
                                    </FormControl>

                                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput
                                    margin='dense'

                                            id="outlined-adornment-password"
                                            type={openPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {openPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            value={state.checkPassword}
                                            label='Xác nhận mật khẩu'
                                            placeholder="Nhập lại mật khẩu"
                                        />
                                    </FormControl>
                                </Box>

                                <Box
                                display='flex'
                                flexDirection='column'
                                alignItems='center'
                                sx={{
                                    '& > *': {
                                        margin: '10px 0 10px 0',
                                    }
                                }}
                                >
                                    <span>Bạn đã có tài khoản <Link style={{textDecoration: 'none', color: '#0866FF'}}>Đăng nhập</Link></span>
                                    <Button type="submit" variant="outlined" color='info'
                                    onClick={handleRequestInformation}
                                    sx={{width: '90%'}}
                                    >Đăng kí</Button>
                                </Box>
                            </Box>
                        </form>
                    </Box>


                </Box>
            </Box>
        </Box>

    );
}

export default SignIn;