import { getUserAuthData, userActions } from "entities/user";
import { LoginModal } from "features/authByUsername";
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { routePath } from "shared/config/routeConfig/routeConfig";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { useFlag } from "shared/hooks/useFlag/useFlag";
import { classNames } from "shared/lib/classNames";
import { LangSwitcher } from "features/langSwitcher";
import { ThemeSwitcher } from "features/themeSwitcher";
import { AppLink } from "shared/ui/appLink";
import { Button } from "shared/ui/button";
import classes from "./Header.module.scss";

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [isOen, setIsOpen] = useFlag(false);
  const authData = useSelector(getUserAuthData);

  const logoutHandler = () => {
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    dispatch(userActions.logout());
  };

  useEffect(() => {
    if (authData) {
      setIsOpen.off();
    }
  }, [authData, setIsOpen]);

  return (
    <div className={classNames(classes.header, className)}>
      <div>
        <AppLink to={routePath.main}>LOGO</AppLink>
      </div>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
      {authData ? (
        <Button variant="ghost" size="s" onClick={logoutHandler}>
          {t("logout_btn")}
        </Button>
      ) : (
        <>
          <Button variant="primary" size="s" onClick={setIsOpen.on}>
            {t("login_btn")}
          </Button>
          <LoginModal isOpen={isOen} onClose={setIsOpen.off} />
        </>
      )}
    </div>
  );
};
