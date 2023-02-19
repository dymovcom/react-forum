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

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
};

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
