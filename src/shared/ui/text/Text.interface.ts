const textPropAlign = ["left", "center", "right"] as const;
type TextPropAlign = (typeof textPropAlign)[number];

const textPropDisplay = ["block", "inlineBlock", "inline"] as const;
type TextPropDisplay = (typeof textPropDisplay)[number];

const textPropFont = ["primary", "mono"] as const;
type TextPropFont = (typeof textPropFont)[number];

const textPropCursor = ["pointer"] as const;
type TextPropCursor = (typeof textPropCursor)[number];

const textPropDecoration = ["underline"] as const;
type TextPropDecoration = (typeof textPropDecoration)[number];

const textPropLineHeight = ["2xs", "xs", "s", "m", "l"] as const;
type TextPropLineHeight = (typeof textPropLineHeight)[number];
export const textPropLineHeightDefault: TextPropLineHeight = "m";

const textPropSize = [
  "m",
  "2xs",
  "xs",
  "s",
  "l",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
] as const;
type TextPropSize = (typeof textPropSize)[number];
export const textPropSizeDefault: TextPropSize = textPropSize[0];

const textPropSpacing = ["xs", "s", "m", "l"] as const;
type TextPropSpacing = (typeof textPropSpacing)[number];

const textPropType = ["blockquote", "p", "h3", "h2", "h1"] as const;
type TextPropType = (typeof textPropType)[number];

const textPropVariant = [
  "primary",
  "alert",
  "brand",
  "ghost",
  "link",
  "linkMinor",
  "secondary",
  "success",
  "warning",
] as const;
type TextPropVariant = (typeof textPropVariant)[number];
export const textPropVariantDefault: TextPropVariant = textPropVariant[0];

const textPropWeight = [
  "thin",
  "light",
  "regular",
  "medium",
  "semibold",
  "bold",
  "black",
] as const;
type TextPropWeight = (typeof textPropWeight)[number];

const textPropFontStyle = ["italic"] as const;
type TextPropFontStyle = (typeof textPropFontStyle)[number];

const textPropTransform = ["uppercase"] as const;
type TextPropTransform = (typeof textPropTransform)[number];

const textPropWidth = ["default"] as const;
type TextPropWidth = (typeof textPropWidth)[number];

export interface TextProps {
  align?: TextPropAlign;
  cursor?: TextPropCursor;
  decoration?: TextPropDecoration;
  display?: TextPropDisplay;
  font?: TextPropFont;
  lineHeight?: TextPropLineHeight;
  size?: TextPropSize;
  spacing?: TextPropSpacing;
  fontStyle?: TextPropFontStyle;
  transform?: TextPropTransform;
  type?: TextPropType;
  variant?: TextPropVariant;
  weight?: TextPropWeight;
  width?: TextPropWidth;
  truncate?: boolean;
}
