import { EventHandler, MouseEvent, ReactNode } from "react";

const buttonPropSize = ["m", "xs", "s", "l"] as const;
export type ButtonPropSize = (typeof buttonPropSize)[number];
export const buttonPropSizeDefault = buttonPropSize[0];

const buttonPropVariant = ["primary", "secondary", "ghost", "clear"] as const;
export type ButtonPropVariant = (typeof buttonPropVariant)[number];
export const buttonPropVariantDefault = buttonPropVariant[0];

const buttonPropForm = [
  "default",
  "brick",
  "round",
  "brick-round",
  "round-brick",
  "brick-default",
  "default-brick",
] as const;

export type ButtonPropForm = (typeof buttonPropForm)[number];
export const buttonPropFormDefault = buttonPropForm[0];

export interface ButtonProps {
  size?: ButtonPropSize;
  variant?: ButtonPropVariant;
  fullWidth?: boolean;
  form?: ButtonPropForm;
  tabIndex?: number;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  title?: string;
  onlyIcon?: boolean;
  children: ReactNode;
  onClick?: EventHandler<MouseEvent>;
}
