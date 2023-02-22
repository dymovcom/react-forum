import { RefObject, useEffect } from "react";

import { useMutableRef } from "shared/hooks/useMutableRef";

export type ClickOutsideHandler = (event: MouseEvent) => void;

type UseClickOutsideProps = {
  isActive?: boolean;
  ignoreClicksInsideRefs?: ReadonlyArray<RefObject<HTMLElement>>;
  handler?: ClickOutsideHandler;
};

export const useClickOutside = ({
  isActive,
  ignoreClicksInsideRefs,
  handler,
}: UseClickOutsideProps): void => {
  const handlerRef = useMutableRef(handler);
  const ignoreClicksInsideRefsRef = useMutableRef(ignoreClicksInsideRefs);
  const isActiveRef = useMutableRef(isActive);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!isActiveRef.current) {
        return;
      }

      const target = event.target as Node;

      const shouldCallHandler = ignoreClicksInsideRefsRef.current?.every(
        (ref) => !ref.current?.contains(target),
      );

      if (shouldCallHandler) {
        handlerRef.current?.(event);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);
};
