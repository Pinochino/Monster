import React from "react";
import style from "./Button.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import PropTypes from 'prop-types'

const cx = classNames.bind(style);

interface ButtonProps {
  to?: string;
  href?: string;
  primary?: boolean;
  outlined?: boolean;
  small?: boolean;
  large?: boolean;
  text?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  children?: React.ReactNode;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

function Button({
  to,
  href,
  primary = false,
  outlined = false,
  small = false,
  large = false,
  text = false,
  disabled = false,
  rounded = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}: ButtonProps) {
  let Comp: React.ElementType = 'button'; // Default to 'button' type
  const props: any = {
    onClick,
    ...passProps,
  };

  // Remove event handlers when btn is disabled
  if (disabled) {
    Object.keys(props).forEach(key => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    primary,
    outlined,
    small,
    large,
    text,
    disabled,
    rounded,
    [className || '']: className,
  });

  return (
    <Comp className={classes} {...props}>
      {children}
    </Comp>
  );
}

  Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
  }

export default Button;
