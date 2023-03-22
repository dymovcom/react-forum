import { ComponentMeta, ComponentStory } from "@storybook/react";
import NotFoundPage from "./NotFoundPage";

export default {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />;
export const Page = Template.bind({});
Page.args = {};
