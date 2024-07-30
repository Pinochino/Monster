import React from "react";
import { Link } from "react-router-dom";


function Icon({
    children= null,
    height= 'auto',
    width= 'auto',
    to,
    href,
    onClick,
    color,
    ...passProps
}) {
    let Comp = 'svg'
    const props = {
        onClick,
        ...passProps,
    }    

    if (to) {
        props.to = to; // Nếu có to, sử dụng Link
        Comp = Link;
    } else if (href) {
        props.href = href; // Nếu có href, sử dụng thẻ a
        Comp = 'a';
    }

    return ( 
        <Comp
        height={height}
        width={width}
        style={{color}}
        {...props}
        >
            {children}
        </Comp>
     );
}

export default Icon;