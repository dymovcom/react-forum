/* eslint-disable react/jsx-props-no-spreading */

import { forwardRef } from "react";
import { classNames } from "shared/lib/classNames";
import { LoaderProps, loaderPropSizeDefault } from "./Loader.interface";
import classes from "./Loader.module.scss";

export const Loader = forwardRef<HTMLDivElement, LoaderProps>((props, ref) => {
  const { className, size = loaderPropSizeDefault, ...otherProps } = props;
  return (
    <div
      {...otherProps}
      ref={ref}
      className={classNames(classes.loader, classes[size], className)}
    >
      <div className={classes.dot} />
    </div>
  );
});
