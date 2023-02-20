/* eslint-disable react/jsx-props-no-spreading */

import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames";
import classes from "./Button.module.scss";

const buttonVariant = ["clear", "contained", "outline"] as const;
type ButtonVariant = (typeof buttonVariant)[number];

const buttonSize = ["s", "m", "l"] as const;
type ButtonSize = (typeof buttonSize)[number];

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    variant = "contained",
    size = "m",
    fullWidth,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(
        classes.button,
        classes[variant],
        classes[size],
        {
          [classes["full-width"]]: fullWidth,
        },
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};
