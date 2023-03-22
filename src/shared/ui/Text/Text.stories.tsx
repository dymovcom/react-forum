import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from "./Text";

export default {
  title: "shared/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof Text> = (args) => {
  return (
    <Text {...args}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus harum
      iste natus placeat porro! Doloribus, fugit inventore iste mollitia neque
      nobis optio quasi repudiandae velit voluptates!
    </Text>
  );
};

export const VariantPrimary = Template.bind({});
VariantPrimary.args = {
  variant: "primary",
};

export const VariantSecondary = Template.bind({});
VariantSecondary.args = {
  variant: "secondary",
};

export const VariantBrand = Template.bind({});
VariantBrand.args = {
  variant: "brand",
};

export const VariantGhost = Template.bind({});
VariantGhost.args = {
  variant: "ghost",
};

export const VariantLink = Template.bind({});
VariantLink.args = {
  variant: "link",
};

export const VariantLinkMinor = Template.bind({});
VariantLinkMinor.args = {
  variant: "linkMinor",
};

export const VariantAlert = Template.bind({});
VariantAlert.args = {
  variant: "alert",
};

export const VariantSuccess = Template.bind({});
VariantSuccess.args = {
  variant: "success",
};

export const VariantWarning = Template.bind({});
VariantWarning.args = {
  variant: "warning",
};

export const AlignLeft = Template.bind({});
AlignLeft.args = {};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
  align: "center",
};

export const AlignRight = Template.bind({});
AlignRight.args = {
  align: "right",
};

export const FontPrimary = Template.bind({});
FontPrimary.args = {};

export const FontMono = Template.bind({});
FontMono.args = {
  font: "mono",
};

export const CursorPointer = Template.bind({});
CursorPointer.args = {
  cursor: "pointer",
};

export const Underline = Template.bind({});
Underline.args = {
  decoration: "underline",
};

export const Size2XS = Template.bind({});
Size2XS.args = {
  size: "2xs",
};

export const SizeXS = Template.bind({});
SizeXS.args = {
  size: "xs",
};

export const SizeS = Template.bind({});
SizeS.args = {
  size: "s",
};

export const SizeM = Template.bind({});
SizeM.args = {
  size: "m",
};

export const SizeL = Template.bind({});
SizeL.args = {
  size: "l",
};

export const SizeXL = Template.bind({});
SizeXL.args = {
  size: "xl",
};

export const Size2XL = Template.bind({});
Size2XL.args = {
  size: "2xl",
};

export const Size3XL = Template.bind({});
Size3XL.args = {
  size: "3xl",
};

export const Size4XL = Template.bind({});
Size4XL.args = {
  size: "4xl",
};

export const Size5XL = Template.bind({});
Size5XL.args = {
  size: "5xl",
};

export const Size6XL = Template.bind({});
Size6XL.args = {
  size: "6xl",
};

export const SpacingXS = Template.bind({});
SpacingXS.args = {
  size: "l",
  spacing: "xs",
};

export const SpacingS = Template.bind({});
SpacingS.args = {
  size: "l",
  spacing: "s",
};

export const SpacingM = Template.bind({});
SpacingM.args = {
  size: "l",
  spacing: "m",
};

export const SpacingL = Template.bind({});
SpacingL.args = {
  size: "l",
  spacing: "l",
};

export const TypeBlockquote = Template.bind({});
TypeBlockquote.args = {
  type: "blockquote",
};

export const TypeP = Template.bind({});
TypeP.args = {
  type: "p",
};

export const TypeH3 = Template.bind({});
TypeH3.args = {
  type: "h3",
};

export const TypeH2 = Template.bind({});
TypeH2.args = {
  type: "h2",
};

export const TypeH1 = Template.bind({});
TypeH1.args = {
  type: "h1",
};

export const WeightThin = Template.bind({});
WeightThin.args = {
  weight: "thin",
};

export const WeightLight = Template.bind({});
WeightLight.args = {
  weight: "light",
};

export const WeightRegular = Template.bind({});
WeightRegular.args = {
  weight: "regular",
};

export const WeightMedium = Template.bind({});
WeightMedium.args = {
  weight: "medium",
};

export const WeightSemibold = Template.bind({});
WeightSemibold.args = {
  weight: "semibold",
};

export const WeightBold = Template.bind({});
WeightBold.args = {
  weight: "bold",
};

export const WeightBlack = Template.bind({});
WeightBlack.args = {
  weight: "black",
};

export const FontStyleItalic = Template.bind({});
FontStyleItalic.args = {
  fontStyle: "italic",
};

export const TransformUppercase = Template.bind({});
TransformUppercase.args = {
  transform: "uppercase",
};
