/* eslint-disable react/jsx-props-no-spreading */
import { forwardRefWithAs } from "shared/lib/forwardRefWithAs";
import { Text } from "shared/ui/Text";

export type FieldCaptionPropStatus = "alert" | "warning" | "success";

interface FieldCaptionProps {
  status?: FieldCaptionPropStatus;
}

export const FieldCaption = forwardRefWithAs<FieldCaptionProps>(
  (props, ref) => {
    const { status, children, className, ...otherProps } = props;

    return (
      // @ts-ignore
      <Text
        {...otherProps}
        variant={status || "secondary"}
        className={className}
        ref={ref}
        size="xs"
        lineHeight="2xs"
      >
        {children}
      </Text>
    );
  },
);
