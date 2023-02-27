import { LoginModal } from "features/authByUsername";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { routePath } from "shared/config/routeConfig/routeConfig";
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

  const [isOen, setIsOpen] = useFlag(false);

  return (
    <div className={classNames(classes.header, className)}>
      <div>
        <AppLink to={routePath.main}>LOGO</AppLink>
      </div>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
      <Button variant="primary" size="s" onClick={setIsOpen.on}>
        {t("login_btn")}
      </Button>
      <LoginModal isOpen={isOen} onClose={setIsOpen.off} />
    </div>
  );
};
