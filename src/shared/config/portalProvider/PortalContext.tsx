import {
  createContext,
  FC,
  ReactNode,
  RefObject,
  useContext,
  useEffect,
  useState,
} from "react";

interface IPortalContext {
  refs: RefObject<HTMLElement>[];
  addRefs?: (ref: RefObject<HTMLElement>[]) => void;
  zIndex?: number;
}

const Context = createContext<IPortalContext>({
  refs: [],
  zIndex: undefined,
});

export const usePortalContext = () => {
  return useContext<IPortalContext>(Context);
};

interface PortalProviderProps {
  zIndex?: number;
  children: ReactNode;
}

export const PortalProvider: FC<PortalProviderProps> = (props) => {
  const { children, zIndex } = props;
  const [refs, setRefs] = useState<RefObject<HTMLElement>[]>([]);
  const { addRefs: contextAddRefs } = usePortalContext();

  const addRefs = (addRef: RefObject<HTMLElement>[]) => {
    if (addRef.length > 0) {
      const newRefs = [
        ...refs.filter((item) => item.current),
        ...addRef.filter((addItem) => {
          if (!addItem.current) {
            return false;
          }
          return !refs.find((item) => item.current === addItem.current);
        }),
      ];

      setRefs(newRefs);
    }
  };

  useEffect(() => {
    if (contextAddRefs) {
      contextAddRefs(refs);
    }
  }, [contextAddRefs, refs]);

  useEffect(() => () => setRefs([]), []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <Context.Provider value={{ refs, addRefs, zIndex }}>
      {children}
    </Context.Provider>
  );
};
