import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";
import { Header } from "./Header";

export default {
  title: "widget/Header",
  component: Header,
  decorators: [
    StoreDecorator({
      loginForm: {
        username: "username",
        password: "password",
      },
    }),
  ],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;
export const Component = Template.bind({});
Component.args = {};
