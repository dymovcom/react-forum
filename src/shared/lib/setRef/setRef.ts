import { MutableRefObject, RefCallback } from "react";

type Ref<T> = RefCallback<T> | MutableRefObject<T> | undefined;

export function setRef<T>(ref: Ref<T>, value: T): void {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    // eslint-disable-next-line no-param-reassign
    ref.current = value;
  }
}
