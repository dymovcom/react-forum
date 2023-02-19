import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default {
  title: "features/ThemeSwitcher",
  component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = () => <ThemeSwitcher />;
export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
