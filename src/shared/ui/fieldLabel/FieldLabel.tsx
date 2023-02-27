/* eslint-disable react/jsx-props-no-spreading */
import { classNames } from "shared/lib/classNames";
import { forwardRefWithAs } from "shared/lib/forwardRefWithAs";
import { Text } from "shared/ui/text";
import classes from "./FieldLabel.module.scss";

type FieldLabelPropSize = "xs" | "s" | "m" | "l";

interface FieldLabelProps {
  size?: FieldLabelPropSize;
  required?: boolean;
}

export const FieldLabel = forwardRefWithAs<FieldLabelProps>((props, ref) => {
  const { className, required, size, children, ...otherProps } = props;

  return (
    // @ts-ignore
    <Text
      {...otherProps}
      variant="secondary"
      size={size}
      className={classNames(classes["field-label"], className)}
      ref={ref}
    >
      {children}
      {required && <span className={classes["field-label-star"]}>*</span>}
    </Text>
  );
});
