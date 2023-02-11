/* eslint-disable react/jsx-props-no-spreading */

import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import classes from "./AppLink.module.scss";

const appLinkVariants = ["primary", "secondary"] as const;
type AppLinkVariant = (typeof appLinkVariants)[number];

interface AppLinkProps extends LinkProps {
  children: ReactNode;
  variant?: AppLinkVariant;
}

export const AppLink = (props: AppLinkProps): JSX.Element => {
  const {
    children, to, className, variant = "primary", ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(classes.appLink, className, classes[variant])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
