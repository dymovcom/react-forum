import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import { AppLink } from "shared/ui/appLink";
import { LangSwitcher } from "features/langSwitcher";
import { ThemeSwitcher } from "features/themeSwitcher";
import classes from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.navbar, className)}>
      <div className={classes.links}>
        <AppLink
          variant="secondary"
          to="/"
          className={classes.mainLink}
        >
          {t("main_link")}
        </AppLink>
        <AppLink variant="secondary" to="/about">{t("about_link")}</AppLink>
      </div>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
