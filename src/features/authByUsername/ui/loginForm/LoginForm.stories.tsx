import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LoginForm } from "./LoginForm";

export default {
  title: "features/LoginForm",
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;
export const Component = Template.bind({});
Component.args = {};
