import { ComponentMeta, ComponentStory } from "@storybook/react";
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

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};
