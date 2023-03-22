import { MutableRefObject, Ref, RefCallback, useMemo } from "react";
import { setRef } from "shared/lib/setRef";

export function useForkRef<T>(
  refs: (Ref<T> | undefined)[],
): RefCallback<T> | null {
  return useMemo(() => {
    if (refs.length < 1) {
      return null;
    }
    return (refValue) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const ref of refs) {
        setRef(ref as MutableRefObject<T>, refValue);
      }
    };
  }, [refs]);
}
