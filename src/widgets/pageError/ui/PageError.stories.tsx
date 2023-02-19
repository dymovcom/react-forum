import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { PageError } from "./PageError";

export default {
  title: "widget/PageError",
  component: PageError,
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = () => <PageError />;
export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
