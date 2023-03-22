import {
  ChangeEvent,
  MouseEvent,
  KeyboardEvent,
  FocusEventHandler,
  Ref,
  KeyboardEventHandler,
  RefAttributes,
  ReactElement,
} from "react";
import { IconPropSize } from "shared/ui/icons/icon/Icon.interface";
import { PropsWithHTMLAttributes } from "shared/types/PropsWithHTMLAttributes";

const textFieldPropSize = ["m", "xs", "s", "l"] as const;
export type TextFieldPropSize = (typeof textFieldPropSize)[number];
export const textFieldPropSizeDefault: TextFieldPropSize = textFieldPropSize[0];

const textFieldPropVariant = ["default", "clear"] as const;
export type TextFieldPropVariant = (typeof textFieldPropVariant)[number];
export const textFieldPropVariantDefault: TextFieldPropVariant =
  textFieldPropVariant[0];

const textFieldPropForm = [
  "default",
  "defaultClear",
  "defaultBrick",
  "brick",
  "brickDefault",
  "brickClear",
  "brickRound",
  "round",
  "roundClear",
  "roundBrick",
  "clearRound",
  "clearDefault",
  "clearBrick",
  "clear",
] as const;
export type TextFieldPropForm = (typeof textFieldPropForm)[number];
export const textFieldPropFormDefault: TextFieldPropForm = textFieldPropForm[0];

const textFieldPropStatus = ["alert", "success", "warning"] as const;
export type TextFieldPropStatus = (typeof textFieldPropStatus)[number];

const textFieldPropLabelPosition = ["top", "left"] as const;
export type TextFieldPropLabelPosition =
  (typeof textFieldPropLabelPosition)[number];
export const textFieldPropLabelPositionDefault = textFieldPropLabelPosition[0];

export type TextFieldPropValue = string | null;
export type TextFieldPropName = string;
export type TextFieldPropId = string | number;

export interface TextFieldOnChangeArguments {
  event: ChangeEvent | MouseEvent | KeyboardEvent;
  id?: TextFieldPropId;
  name?: TextFieldPropName;
  value: TextFieldPropValue;
}

export type TextFieldOnChange = (args: TextFieldOnChangeArguments) => void;

export type TextFieldPropRightSide<TYPE extends string> = TYPE extends
  | "password"
  ? {
      rightSide?: never;
    }
  : {
      rightSide?: string;
    };

export type TextFieldProps<TYPE extends string> = PropsWithHTMLAttributes<
  {
    className?: string;
    value?: TextFieldPropValue;
    onChange?: TextFieldOnChange;
    id?: TextFieldPropId;
    name?: TextFieldPropName;
    type?: TYPE;
    disabled?: boolean;
    maxLength?: number;
    size?: TextFieldPropSize;
    variant?: TextFieldPropVariant;
    form?: TextFieldPropForm;
    status?: TextFieldPropStatus;
    fullWidth?: boolean;
    onFocus?: FocusEventHandler<HTMLElement>;
    onBlur?: FocusEventHandler<HTMLElement>;
    autoFocus?: boolean;
    placeholder?: string;
    leftSide?: string;
    rightSide?: string;
    withClearButton?: boolean;
    readOnly?: boolean;
    required?: boolean;
    tabIndex?: number;
    inputContainerRef?: Ref<HTMLDivElement>;
    inputRef?: Ref<HTMLTextAreaElement | HTMLInputElement>;
    ariaLabel?: string;
    iconSize?: IconPropSize;
    children?: never;
    label?: string;
    labelPosition?: TextFieldPropLabelPosition;
    caption?: string;
    focused?: boolean;
    onKeyDownCapture?: KeyboardEventHandler;
    onKeyPress?: KeyboardEventHandler;
    onKeyPressCapture?: KeyboardEventHandler;
    onKeyUp?: KeyboardEventHandler;
    onKeyUpCapture?: KeyboardEventHandler;
    onKeyDown?: KeyboardEventHandler;
  },
  HTMLDivElement
> &
  TextFieldPropRightSide<TYPE>;

export type TextFieldComponent = <TYPE extends string>(
  props: TextFieldProps<TYPE> & RefAttributes<HTMLElement>,
) => ReactElement | null;
