/* eslint-disable react/jsx-props-no-spreading */
import { classNames } from "shared/lib/classNames";
import { forwardRefWithAs } from "shared/lib/forwardRefWithAs";
import {
  textPropLineHeightDefault,
  TextProps,
  textPropSizeDefault,
  textPropVariantDefault,
} from "./Text.interface";
import classes from "./Text.module.scss";

export const Text = forwardRefWithAs<TextProps>((props, ref) => {
  const {
    as = "div",
    align,
    cursor,
    decoration,
    display,
    font,
    lineHeight = textPropLineHeightDefault,
    size = textPropSizeDefault,
    spacing,
    fontStyle,
    transform,
    type,
    variant = textPropVariantDefault,
    weight,
    width,
    className: classNameProps,
    children,
    truncate = false,
    ...otherProps
  } = props;

  const Tag = as as string;

  const className = classNames(
    classes.text,
    {
      [classes.align_center]: align === "center",
      [classes.align_left]: align === "left",
      [classes.align_right]: align === "right",
      [classes.pointer]: cursor === "pointer",
      [classes.decoration_underline]: decoration === "underline",
      [classes.display_block]: display === "block",
      [classes["display_inline-block"]]: display === "inlineBlock",
      [classes.display_inline]: display === "inline",
      [classes.font_primary]: font === "primary",
      [classes.font_mono]: font === "mono",
      [classes["line-height_xs"]]: lineHeight === "xs",
      [classes["line-height_2xs"]]: lineHeight === "2xs",
      [classes["line-height_s"]]: lineHeight === "s",
      [classes["line-height_m"]]: lineHeight === "m",
      [classes["line-height_l"]]: lineHeight === "l",
      [classes.size_2xs]: size === "2xs",
      [classes.size_xs]: size === "xs",
      [classes.size_s]: size === "s",
      [classes.size_m]: size === "m",
      [classes.size_l]: size === "l",
      [classes.size_xl]: size === "xl",
      [classes.size_2xl]: size === "2xl",
      [classes.size_3xl]: size === "3xl",
      [classes.size_4xl]: size === "4xl",
      [classes.size_5xl]: size === "5xl",
      [classes.size_6xl]: size === "6xl",
      [classes.spacing_xs]: spacing === "xs",
      [classes.spacing_s]: spacing === "s",
      [classes.spacing_m]: spacing === "m",
      [classes.spacing_l]: spacing === "l",
      [classes["font-style_italic"]]: fontStyle === "italic",
      [classes.transform_uppercase]: transform === "uppercase",
      [classes.type_blockquote]: type === "blockquote",
      [classes.type_h1]: type === "h1",
      [classes.type_h2]: type === "h2",
      [classes.type_h3]: type === "h3",
      [classes.type_p]: type === "p",
      [classes.variant_alert]: variant === "alert",
      [classes.variant_brand]: variant === "brand",
      [classes.variant_ghost]: variant === "ghost",
      [classes.variant_link]: variant === "link",
      [classes["variant_link-minor"]]: variant === "linkMinor",
      [classes.variant_primary]: variant === "primary",
      [classes.variant_secondary]: variant === "secondary",
      [classes.variant_success]: variant === "success",
      [classes.variant_warning]: variant === "warning",
      [classes.weight_thin]: weight === "thin",
      [classes.weight_light]: weight === "light",
      [classes.weight_regular]: weight === "regular",
      [classes.weight_medium]: weight === "medium",
      [classes.weight_semibold]: weight === "semibold",
      [classes.weight_bold]: weight === "bold",
      [classes.weight_black]: weight === "black",
      [classes.width_default]: width === "default",
      [classes.truncate]: truncate,
    },
    classNameProps,
  );

  return (
    <Tag {...otherProps} className={className} ref={ref}>
      {children}
    </Tag>
  );
});
