import { MutableRefObject, Ref, RefCallback } from "react";

export const mergeRefs = <T>(refs: Ref<T>[]): RefCallback<any> => {
  return (refValue) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(refValue);
      } else if (ref) {
        // eslint-disable-next-line no-param-reassign
        (ref as MutableRefObject<T>).current = refValue;
      }
    }
  };
};
