import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Button } from "./Button";

export default {
  title: "shared/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  children: "Button",
  variant: "contained",
};

export const ContainedDark = Template.bind({});
ContainedDark.args = {
  children: "Button",
  variant: "contained",
};
ContainedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
  children: "Button",
  variant: "clear",
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: "Button",
  variant: "clear",
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  children: "Button",
  variant: "outline",
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: "Button",
  variant: "outline",
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

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
