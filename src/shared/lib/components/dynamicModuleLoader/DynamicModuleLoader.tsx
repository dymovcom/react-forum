import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import {
  ReducersList,
  StateSchemaKey,
} from "app/providers/StoreProvider/config/StateSchema";
import { FC, ReactNode, useEffect } from "react";
import { useStore } from "react-redux";
import { useAppDispatch } from "shared/hooks/useAppDispatch";

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
  children: ReactNode;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount = true } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      if (!store.getState()[name as StateSchemaKey]) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
