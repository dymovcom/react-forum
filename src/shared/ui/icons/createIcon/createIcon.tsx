/* eslint-disable react/jsx-props-no-spreading */
import { FC, forwardRef, SVGProps } from "react";
import { Icon } from "shared/ui/icons/icon";
import { IconProps } from "shared/ui/icons/icon/Icon.interface";
import { classNames } from "shared/lib/classNames";

type SizeComponent = FC<SVGProps<SVGSVGElement>>;
interface CreateIconArgs {
  m: SizeComponent;
  s: SizeComponent;
  xs: SizeComponent;
  name: string;
}

const getSvgBySize = (
  size: IconProps["size"] | undefined,
  m: SizeComponent,
  s: SizeComponent,
  xs: SizeComponent,
) => {
  switch (size) {
    case "xs":
      return xs;
    case "s":
      return s;
    case "m":
      return m;
    default:
      return m;
  }
};

export const createIcon = ({ m, s, xs, name }: CreateIconArgs) => {
  const IconComponent = forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
    const Svg = getSvgBySize(props.size, m, s, xs);

    return (
      <Icon {...props} className={classNames(name, props.className)} ref={ref}>
        <Svg className="svg-icon" />
      </Icon>
    );
  });

  return IconComponent;
};
