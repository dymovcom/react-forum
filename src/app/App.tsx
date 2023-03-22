import { userActions } from "entities/User";
import { Suspense, useEffect } from "react";
import { AppRouter } from "app/providers/router";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { Header } from "widgets/Header";
import { Sidebar } from "widgets/Sidebar";
import "./styles/index.scss";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY));
    if (userData) {
      dispatch(userActions.setAuthData(userData));
    }
  }, [dispatch]);

  return (
    <div className="app">
      <Suspense fallback="">
        <Header />
        <div className="content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
