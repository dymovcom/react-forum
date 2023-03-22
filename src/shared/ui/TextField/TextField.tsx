/* eslint-disable react/jsx-props-no-spreading */
import React, {
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
  KeyboardEvent,
  memo,
  Ref,
  RefCallback,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { useFlag } from "shared/hooks/useFlag/useFlag";
import { useForkRef } from "shared/hooks/useForkRef";
import { useMutableRef } from "shared/hooks/useMutableRef";
import { IconClose } from "shared/ui/icons/iconClose";
import { IconEye } from "shared/ui/icons/iconEye";
import { IconEyeClose } from "shared/ui/icons/iconEyeClose";
import { classNames } from "shared/lib/classNames";
import { getByMap } from "shared/lib/getByMap";
import { FieldCaption } from "shared/ui/fieldCaption";
import { FieldLabel } from "shared/ui/fieldLabel";
import { sizeMap } from "shared/ui/textField/helpers";
import {
  TextFieldComponent,
  textFieldPropFormDefault,
  textFieldPropLabelPositionDefault,
  TextFieldProps,
  textFieldPropSizeDefault,
  textFieldPropVariantDefault,
} from "shared/ui/textField/TextField.interface";
import classes from "./TextField.module.scss";

const getTypeForRender = (type: string, passwordVisible: boolean) => {
  if (type !== "password") {
    return type;
  }
  if (passwordVisible) {
    return "text";
  }
  return "password";
};

const TextFieldRender = <TYPE extends string>(
  props: TextFieldProps<TYPE>,
  ref: Ref<HTMLDivElement>,
) => {
  const textFieldRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    className,
    type = "text",
    value,
    onChange,
    id,
    name,
    inputRef: inputRefProps,
    maxLength,
    disabled,
    size = textFieldPropSizeDefault,
    variant = textFieldPropVariantDefault,
    form = textFieldPropFormDefault,
    status,
    fullWidth,
    onBlur,
    onFocus,
    autoFocus = false,
    placeholder,
    leftSide,
    rightSide,
    withClearButton,
    readOnly,
    required,
    tabIndex,
    ariaLabel,
    label,
    inputContainerRef,
    labelPosition = textFieldPropLabelPositionDefault,
    caption,
    iconSize: iconSizeProp,
    focused,
    onClick,
    onKeyDown: onKeyDownProps,
    onKeyDownCapture,
    onKeyPress,
    onKeyPressCapture,
    onKeyUp,
    onKeyUpCapture,
    ...otherProps
  } = props;

  const [focus, setFocus] = useFlag(autoFocus);
  const [passwordVisible, setPasswordVisible] = useFlag(false);

  const valueRef = useMutableRef(value);
  const onClickRef = useMutableRef(onClick);
  const onChangeRef = useMutableRef(onChange);

  const iconSize = getByMap(sizeMap, size, iconSizeProp);

  const handleEyeClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.stopPropagation();
      setPasswordVisible.toggle();
      inputRef.current?.focus();
    },
    [setPasswordVisible],
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      if (!disabled && onChangeRef.current) {
        onChangeRef.current({
          event,
          id,
          name,
          value: event.target.value || null,
        });
      }
    },
    [disabled, id, name, onChangeRef],
  );

  const handleBlur: FocusEventHandler<HTMLElement> = (event) => {
    setFocus.off();
    onBlur?.(event);
  };

  const handleFocus: FocusEventHandler<HTMLElement> = (event) => {
    setFocus.on();
    onFocus?.(event);
  };

  const commonProps = {
    className: classes.input,
    value: value || "",
    onChange: handleChange,
    maxLength,
    disabled,
    onBlur: handleBlur,
    onFocus: handleFocus,
    autoFocus,
    placeholder,
    readOnly,
    tabIndex,
    name,
    onKeyDownCapture,
    onKeyPress,
    onKeyPressCapture,
    onKeyUp,
    onKeyUpCapture,
    id: id ? id.toString() : "",
    "aria-label": ariaLabel,
  };

  const Eye = passwordVisible ? IconEyeClose : IconEye;

  const onKeyDown = (event: KeyboardEvent) => {
    onKeyDownProps?.(event);
  };

  const inputProps = {
    type: getTypeForRender(type, passwordVisible),
    onKeyDown,
    ref: useForkRef([inputRef, inputRefProps]) as RefCallback<HTMLInputElement>,
  };

  const handleClear = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      onChangeRef.current?.({
        event,
        value: null,
      });
    },
    [onChangeRef],
  );

  const rootProps = {
    onClick: useCallback(
      (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        inputRef.current?.focus();
        onClickRef.current?.(event);
      },
      [onClickRef],
    ),
  };

  useEffect(() => {
    if (type === "password" && inputRef.current) {
      inputRef.current.selectionStart = valueRef.current?.length || 0;
    }
  }, [passwordVisible, type, valueRef]);

  return (
    <div
      className={classNames(
        classes["text-field"],
        {
          [classes.variant_default]: variant === "default",
          [classes.variant_clear]: variant === "clear",
          [classes["label-position_top"]]: labelPosition === "top",
          [classes["label-position_left"]]: labelPosition === "left",
          [classes.size_xs]: size === "xs",
          [classes.size_s]: size === "s",
          [classes.size_m]: size === "m",
          [classes.size_l]: size === "l",
          [classes["full-width"]]: fullWidth,
        },
        className,
      )}
      ref={useForkRef([ref, textFieldRef])}
      {...rootProps}
      {...otherProps}
    >
      {label && (
        <FieldLabel required={required} className={classes.label} size={size}>
          {label}
        </FieldLabel>
      )}
      <div className={classes.body}>
        <div
          ref={inputContainerRef}
          className={classNames(classes["input-container"], {
            [classes.variant_default]: variant === "default",
            [classes.variant_clear]: variant === "clear",
            [classes["form_default-clear"]]: form === "defaultClear",
            [classes["form_default-brick"]]: form === "defaultBrick",
            [classes.form_brick]: form === "brick",
            [classes["form_brick-default"]]: form === "brickDefault",
            [classes["form_brick-clear"]]: form === "brickClear",
            [classes["form_brick-round"]]: form === "brickRound",
            [classes.form_round]: form === "round",
            [classes["form_round-clear"]]: form === "roundClear",
            [classes["form_round-brick"]]: form === "roundBrick",
            [classes["form_clear-round"]]: form === "clearRound",
            [classes["form_clear-default"]]: form === "clearDefault",
            [classes["form_clear-brick"]]: form === "clearBrick",
            [classes.form_clear]: form === "clear",
            [classes.status_alert]: status === "alert",
            [classes.status_success]: status === "success",
            [classes.status_warning]: status === "warning",
            [classes.disabled]: disabled,
            [classes.type_number]: type === "number",
            [classes.type_textarea]: type === "textarea",
            [classes.focus]: focus || focused,
            [classes["with-value"]]: !!value,
            [classes["full-width"]]: fullWidth,
          })}
        >
          {leftSide && (
            <div
              className={classNames(classes.side, classes.side_position_left)}
              title={leftSide}
            >
              {leftSide}
            </div>
          )}

          <input {...commonProps} {...inputProps} />

          {value && withClearButton && type !== "number" && (
            <button
              type="button"
              disabled={disabled}
              onClick={handleClear}
              className={classes["clear-button"]}
            >
              <IconClose size="xs" className={classes["clear-button_icon"]} />
            </button>
          )}

          {type === "password" && value && (
            <button
              type="button"
              onClick={handleEyeClick}
              className={classes["clear-button"]}
            >
              <Eye className={classes.icon} size={iconSize} />
            </button>
          )}

          {rightSide && (
            <div
              className={classNames(classes.side, classes.side_position_right)}
              title={rightSide}
            >
              {rightSide}
            </div>
          )}
        </div>
        {caption && (
          <FieldCaption className={classes.caption} status={status}>
            {caption}
          </FieldCaption>
        )}
      </div>
    </div>
  );
};

export const TextField = memo(
  forwardRef(TextFieldRender),
) as TextFieldComponent;
