import { useCallback, useState } from "react";

type Flag = [
  boolean,
  {
    on: () => void;
    off: () => void;
    toggle: () => void;
  },
];

const not = (state: boolean) => !state;

export const useFlag = (initial = false): Flag => {
  const [state, setState] = useState(initial);

  const on = useCallback(() => setState(true), []);
  const off = useCallback(() => setState(false), []);
  const toggle = useCallback(() => setState(not), []);

  return [
    state,
    {
      on,
      off,
      toggle,
    },
  ];
};
