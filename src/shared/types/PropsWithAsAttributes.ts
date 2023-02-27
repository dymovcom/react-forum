import { ReactElement, Ref, RefAttributes } from "react";

export type PropsWithAsAttributes<
  Props,
  As extends keyof JSX.IntrinsicElements,
> = Props & {
  as?: As;
} & Omit<JSX.IntrinsicElements[As], keyof Props>;

export type ComponentWithAs<
  Props,
  DefaultTag extends keyof JSX.IntrinsicElements = "div",
> = <As extends keyof JSX.IntrinsicElements = DefaultTag>(
  props: PropsWithAsAttributes<Props, As> & RefAttributes<Element>,
) => ReactElement | null;

export type ForwardRefWithAs<Props> = <As extends keyof JSX.IntrinsicElements>(
  props: PropsWithAsAttributes<Props, As>,
  ref: Ref<HTMLElement>,
) => ReactElement | null;
