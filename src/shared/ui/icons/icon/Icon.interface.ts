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
type IconPropView = (typeof iconPropVariant)[number];

export type IconProps = PropsWithHTMLAttributesAndRef<
  {
    variant?: IconPropView;
    size?: IconPropSize;
  },
  HTMLSpanElement
>;

export type IconComponent = FC<IconProps>;
