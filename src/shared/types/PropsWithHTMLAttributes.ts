import { HTMLAttributes, PropsWithoutRef, RefAttributes } from "react";

export type PropsWithHTMLAttributes<Props, HTMLElement> = Props &
  Omit<HTMLAttributes<HTMLElement>, keyof Props | "css">;

export type PropsWithHTMLAttributesAndRef<Props, HTMLElement> =
  PropsWithHTMLAttributes<PropsWithoutRef<Props>, HTMLElement> &
    RefAttributes<HTMLElement>;
