import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { AppLink } from "./AppLink";

export default {
  title: "shared/AppLink",
  component: AppLink,
  args: {
    to: "/",
    children: "AppLink",
  },
} as ComponentMeta<typeof AppLink>;

/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  variant: "primary",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  variant: "secondary",
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
