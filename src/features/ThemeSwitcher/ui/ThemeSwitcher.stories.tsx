import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default {
  title: "features/ThemeSwitcher",
  component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = () => <ThemeSwitcher />;
export const Switcher = Template.bind({});
Switcher.args = {};
