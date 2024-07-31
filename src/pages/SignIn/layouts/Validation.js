import React from "react";
import classNames from "classnames/bind";
import style from './SignIn.module.scss';

const cx = classNames.bind(style);


function Validation( values) {
    const error = {}

    const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PASSWORD_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (values.surname === '') {
        error.surname = ('Surname is required')
    }

    if (values.name === '') {
        error.name = ('Name is required')
    }

    if (values.email === '') {
        error.email = ('Email is required')
        
    } else if (!EMAIL_PATTERN.test(values.email)) {
        error.email = ('Invalid email')
    }

    if (values.password === '') {
        error.password = ('Password is required')
    } else if (!PASSWORD_PATTERN.test(values.password)) {
        error.password = ('Invalid password')
    } 

    if (values.checkPassword === '') {
        error.checkPassword = ('Password is required')
    } else if (!PASSWORD_PATTERN.test(values.checkPassword)) {
        error.checkPassword = ('Invalid password')
    }  else if (values.checkPassword !== values.password){
        error.checkPassword = ('Password does not match')
    }

    return error;
}

export default Validation;