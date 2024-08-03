import React from "react";
import { Link } from "react-router-dom";

function Icon({
    children = null,
    height = 'auto',
    width = 'auto',
    to,
    href,
    onClick,
    color,
    className,
    ...passProps
}) {
    let Comp = 'svg'; // Default to an SVG element
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to; // If "to" prop is provided, use Link
        Comp = Link;
    } else if (href) {
        props.href = href; // If "href" prop is provided, use anchor tag
        Comp = 'a';
    }

    return (
        <Comp
            height={height}
            width={width}
            className={className}
            style={{ color }}
            {...props}
        >
            {children}
        </Comp>
    );
}

export default Icon;
