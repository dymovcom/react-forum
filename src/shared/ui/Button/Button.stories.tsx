import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "shared/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const VariantPrimary = Template.bind({});
VariantPrimary.args = {
  children: "Button",
  variant: "primary",
};

export const VariantSecondary = Template.bind({});
VariantSecondary.args = {
  children: "Button",
  variant: "secondary",
};

export const VariantClear = Template.bind({});
VariantClear.args = {
  children: "Button",
  variant: "clear",
};

export const VariantGhost = Template.bind({});
VariantGhost.args = {
  children: "Button",
  variant: "ghost",
};

export const SizeXS = Template.bind({});
SizeXS.args = {
  children: "Button",
  size: "xs",
};

export const SizeS = Template.bind({});
SizeS.args = {
  children: "Button",
  size: "s",
};

export const SizeM = Template.bind({});
SizeM.args = {
  children: "Button",
  size: "m",
};

export const SizeL = Template.bind({});
SizeL.args = {
  children: "Button",
  size: "l",
};

export const FormDefault = Template.bind({});
FormDefault.args = {
  children: "Button",
  form: "default",
};

export const FormBrick = Template.bind({});
FormBrick.args = {
  children: "Button",
  form: "brick",
};

export const FormRound = Template.bind({});
FormRound.args = {
  children: "Button",
  form: "round",
};

export const FormBrickRound = Template.bind({});
FormBrickRound.args = {
  children: "Button",
  form: "brick-round",
};

export const FormRoundBrick = Template.bind({});
FormRoundBrick.args = {
  children: "Button",
  form: "round-brick",
};

export const FormBrickDefault = Template.bind({});
FormBrickDefault.args = {
  children: "Button",
  form: "brick-default",
};
export const FormDefaultBrick = Template.bind({});
FormDefaultBrick.args = {
  children: "Button",
  form: "default-brick",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: "Button",
  size: "l",
  fullWidth: true,
};
