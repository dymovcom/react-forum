import { forwardRef } from "react";
import {
  ComponentWithAs,
  ForwardRefWithAs,
  PropsWithAsAttributes,
} from "shared/types/PropsWithAsAttributes";

export const forwardRefWithAs = <
  Props,
  As extends keyof JSX.IntrinsicElements = "div",
>(
  render: ForwardRefWithAs<Props>,
) =>
  forwardRef<HTMLElement, PropsWithAsAttributes<Props, As>>(
    render,
  ) as unknown as ComponentWithAs<Props, As>;
