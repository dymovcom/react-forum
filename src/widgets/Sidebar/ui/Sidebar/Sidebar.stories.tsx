import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Sidebar } from "./Sidebar";

export default {
  title: "widget/Sidebar",
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => <Sidebar />;
export const Component = Template.bind({});
Component.args = {};
