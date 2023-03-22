/* eslint-disable react/jsx-props-no-spreading */

import { FC, memo, MouseEvent } from "react";
import { classNames } from "shared/lib/classNames";
import { forwardRefWithAs } from "shared/lib/forwardRefWithAs";
import { Loader } from "shared/ui/Loader";
import {
  buttonPropFormDefault,
  ButtonProps,
  buttonPropSizeDefault,
  buttonPropVariantDefault,
} from "./Button.interface";
import classes from "./Button.module.scss";

const ButtonComponent: FC<ButtonProps> = forwardRefWithAs<
  ButtonProps,
  "button"
>((props, ref) => {
  const {
    variant = buttonPropVariantDefault,
    form = buttonPropFormDefault,
    size = buttonPropSizeDefault,
    as = "button",
    className,
    loading,
    disabled,
    fullWidth,
    title,
    tabIndex,
    onlyIcon,
    children,
    onClick,
    ...otherProps
  } = props;

  const onClickHandler = (event: MouseEvent<HTMLElement>) => {
    if (!disabled && !loading && onClick) {
      onClick(event);
    }
  };

  const Tag = as as string;

  return (
    <Tag
      {...otherProps}
      className={classNames(
        classes.button,
        classes[variant],
        classes[size],
        classes[form],
        {
          [classes["full-width"]]: fullWidth,
          [classes["only-icon"]]: onlyIcon,
          [classes.disabled]: disabled,
          [classes.loading]: loading,
        },
        className,
      )}
      type="button"
      tabIndex={tabIndex}
      title={title}
      ref={ref}
      {...(Tag === "button" ? { disabled: disabled || loading } : {})}
      onClick={onClickHandler}
    >
      {children}
      {loading && <Loader className={classes.loader} size="s" />}
    </Tag>
  );
});

export const Button = memo(ButtonComponent);
