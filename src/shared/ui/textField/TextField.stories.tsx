import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { TextField } from "./TextField";

export default {
  title: "shared/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof TextField> = (args) => {
  const [value, setValue] = useState<string | null>("text");

  const onChange = ({ value }: { value: string | null }) => {
    setValue(value);
  };

  return (
    <TextField
      {...args}
      value={value}
      onChange={onChange}
      label="label"
      caption="caption"
      placeholder="placeholder"
    />
  );
};

export const VariantDefault = Template.bind({});
VariantDefault.args = {
  variant: "default",
};

export const VariantClear = Template.bind({});
VariantClear.args = {
  variant: "clear",
};

export const SizeXS = Template.bind({});
SizeXS.args = {
  size: "xs",
};

export const SizeS = Template.bind({});
SizeS.args = {
  size: "s",
};

export const SizeM = Template.bind({});
SizeM.args = {
  size: "m",
};

export const SizeL = Template.bind({});
SizeL.args = {
  size: "l",
};

export const FormDefault = Template.bind({});
FormDefault.args = {};

export const FormDefaultClear = Template.bind({});
FormDefaultClear.args = {
  form: "defaultClear",
};

export const FormDefaultBrick = Template.bind({});
FormDefaultBrick.args = {
  form: "defaultBrick",
};

export const FormBrick = Template.bind({});
FormBrick.args = {
  form: "brick",
};

export const FormBrickDefault = Template.bind({});
FormBrickDefault.args = {
  form: "brickDefault",
};

export const FormBrickClear = Template.bind({});
FormBrickClear.args = {
  form: "brickClear",
};

export const FormBrickRound = Template.bind({});
FormBrickRound.args = {
  form: "brickRound",
};

export const FormRound = Template.bind({});
FormRound.args = {
  form: "round",
};

export const FormRoundClear = Template.bind({});
FormRoundClear.args = {
  form: "roundClear",
};

export const FormRoundBrick = Template.bind({});
FormRoundBrick.args = {
  form: "roundBrick",
};

export const FormClearRound = Template.bind({});
FormClearRound.args = {
  form: "clearRound",
};

export const FormClearDefault = Template.bind({});
FormClearDefault.args = {
  form: "clearDefault",
};

export const FormClearBrick = Template.bind({});
FormClearBrick.args = {
  form: "clearBrick",
};

export const FormClear = Template.bind({});
FormClear.args = {
  form: "clear",
};

export const StatusAlert = Template.bind({});
StatusAlert.args = {
  status: "alert",
};

export const StatusSuccess = Template.bind({});
StatusSuccess.args = {
  status: "success",
};

export const StatusWarning = Template.bind({});
StatusWarning.args = {
  status: "warning",
};

export const LabelTop = Template.bind({});
LabelTop.args = {
  labelPosition: "top",
};

export const LabelLeft = Template.bind({});
LabelLeft.args = {
  labelPosition: "left",
};

export const LeftSide = Template.bind({});
LeftSide.args = {
  leftSide: "left",
};

export const RightSide = Template.bind({});
RightSide.args = {
  rightSide: "right",
};

export const LeftRightSide = Template.bind({});
LeftRightSide.args = {
  leftSide: "left",
  rightSide: "right",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};

export const WithClearButton = Template.bind({});
WithClearButton.args = {
  withClearButton: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  readOnly: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Required = Template.bind({});
Required.args = {
  required: true,
};

export const AutoFocus = Template.bind({});
AutoFocus.args = {
  autoFocus: true,
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
};

export const IconSizeXS = Template.bind({});
IconSizeXS.args = {
  type: "password",
  iconSize: "xs",
};

export const IconSizeS = Template.bind({});
IconSizeS.args = {
  type: "password",
  iconSize: "s",
};

export const IconSizeM = Template.bind({});
IconSizeM.args = {
  type: "password",
  iconSize: "m",
};

export const IconSizeL = Template.bind({});
IconSizeL.args = {
  type: "password",
  iconSize: "l",
};
