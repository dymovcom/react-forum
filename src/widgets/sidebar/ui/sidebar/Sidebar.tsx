import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { routePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames";
import { AppLink } from "shared/ui/appLink";
import { Button } from "shared/ui/button";
import MainIcon from "shared/assets/icons/main-icon.svg";
import AboutIcon from "shared/assets/icons/about-icon.svg";
import classes from "./Sidebar.module.scss";

export const Sidebar: FC = () => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const collapsedToggle = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(classes.sidebar, {
        [classes.collapsed]: collapsed,
      })}
    >
      <div className={classes.links}>
        <AppLink className={classes.link} to={routePath.main}>
          <MainIcon className={classes["link-icon"]} />
          <span className={classNames(classes["link-text"])}>
            {t("main_link")}
          </span>
        </AppLink>
        <AppLink className={classes.link} to={routePath.about}>
          <AboutIcon className={classes["link-icon"]} />
          <span className={classNames(classes["link-text"])}>
            {t("about_link")}
          </span>
        </AppLink>
      </div>
      <Button
        data-testid="sidebar-toggle"
        className={classes["toggle-button"]}
        fullWidth
        form="brick"
        onClick={collapsedToggle}
      >
        {collapsed ? ">" : "<"}
      </Button>
    </div>
  );
};
