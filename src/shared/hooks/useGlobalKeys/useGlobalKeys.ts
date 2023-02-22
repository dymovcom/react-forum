import { useEffect, useRef } from "react";
import { KeyCode } from "shared/types/KeyCode";

type KeyHandlers = Partial<Record<KeyCode, (e: KeyboardEvent) => void>> & {
  [key: string]: (e: KeyboardEvent) => void;
};

type EventType = "keyup" | "keydown";

export const useGlobalKeys = (
  keyHandlers: KeyHandlers,
  eventType: EventType = "keyup",
) => {
  const ketHandlerRef = useRef<KeyHandlers>({});

  useEffect(() => {
    ketHandlerRef.current = keyHandlers;
  }, [keyHandlers]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const { current } = ketHandlerRef;

      const userHandler =
        current[e.code as KeyCode] || current[e.key as KeyCode];

      if (userHandler) {
        userHandler(e);
      }
    };

    document.addEventListener(eventType, handler);

    return () => {
      document.removeEventListener(eventType, handler);
    };
  });
};
