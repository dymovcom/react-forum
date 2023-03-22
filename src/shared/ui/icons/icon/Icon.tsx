/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef } from "react";
import { classNames } from "shared/lib/classNames";
import {
  IconComponent,
  IconProps,
  iconPropSizeDefault,
} from "./Icon.interface";
import classes from "./Icon.module.scss";

export const Icon: IconComponent = forwardRef<HTMLSpanElement, IconProps>(
  (props, ref) => {
    const {
      children,
      className,
      size = iconPropSizeDefault,
      variant,
      ...otherProps
    } = props;
    return (
      <span
        {...otherProps}
        className={classNames(
          classes.icon,
          classes[size],
          classes[variant],
          className,
        )}
        ref={ref}
      >
        {children}
      </span>
    );
  },
);
