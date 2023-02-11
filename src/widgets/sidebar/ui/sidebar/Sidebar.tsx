import { useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/button";
import classes from "./Sidebar.module.scss";

export const Sidebar = (): JSX.Element => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const collapsedToggle = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div className={classNames(classes.Sidebar, { [classes.collapsed]: collapsed })}>
      <Button onClick={collapsedToggle}>{t("sidebar_toggle")}</Button>
    </div>
  );
};
