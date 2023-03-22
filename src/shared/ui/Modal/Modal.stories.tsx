import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { Button } from "shared/ui/button";
import { Modal } from "./Modal";

export default {
  title: "shared/Modal",
  component: Modal,
  args: {
    children: "Это модальное окно",
  },
} as ComponentMeta<typeof Modal>;

/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      <Modal
        {...args}
        style={{ padding: 16 }}
        isOpen={isOpen}
        onClickOutside={() => setIsOpen(false)}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
