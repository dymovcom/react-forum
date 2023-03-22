import { FC } from "react";
import { PropsWithHTMLAttributesAndRef } from "shared/types/PropsWithHTMLAttributes";

const iconPropSize = ["m", "s", "xs", "l"] as const;
export type IconPropSize = (typeof iconPropSize)[number];
export const iconPropSizeDefault = iconPropSize[0];

const iconPropVariant = [
  "primary",
  "alert",
  "brand",
  "ghost",
  "link",
  "secondary",
  "success",
  "warning",
  "disabled",
] as const;
type IconPropVariant = (typeof iconPropVariant)[number];

export const iconPropVariantDefault = iconPropVariant[0];

export type IconProps = PropsWithHTMLAttributesAndRef<
  {
    variant?: IconPropVariant;
    size?: IconPropSize;
  },
  HTMLSpanElement
>;

export type IconComponent = FC<IconProps>;
