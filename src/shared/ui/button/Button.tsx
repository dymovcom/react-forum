/* eslint-disable react/jsx-props-no-spreading */

import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames";
import classes from "./Button.module.scss";

const buttonVariant = ["clear", "primary"] as const;
type ButtonVariant = typeof buttonVariant[number];

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children, className, variant = "primary", ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(classes.Button, classes[variant], className)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
