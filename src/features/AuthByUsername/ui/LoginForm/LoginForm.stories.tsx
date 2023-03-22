import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";
import LoginForm from "./LoginForm";

export default {
  title: "features/LoginForm",
  component: LoginForm,
  decorators: [
    StoreDecorator({
      loginForm: {
        username: "username",
        password: "password",
      },
    }),
  ],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => (
  <LoginForm onSuccess={() => {}} />
);
export const Component = Template.bind({});
Component.args = {};
