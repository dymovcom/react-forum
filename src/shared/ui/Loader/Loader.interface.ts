import { PropsWithHTMLAttributes } from "shared/types/PropsWithHTMLAttributes";

const loaderPropSize = ["m", "s"] as const;
export type LoaderPropSize = (typeof loaderPropSize)[number];
export const loaderPropSizeDefault: LoaderPropSize = loaderPropSize[0];

interface Props {
  size?: LoaderPropSize;
  children?: never;
}

export type LoaderProps = PropsWithHTMLAttributes<Props, HTMLDivElement>;
