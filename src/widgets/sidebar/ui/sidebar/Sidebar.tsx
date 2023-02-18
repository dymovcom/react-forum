import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/button";
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
      className={classNames(
        classes.Sidebar,
        { [classes.collapsed]: collapsed },
      )}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={collapsedToggle}
      >
        {t("sidebar_toggle")}
      </Button>
    </div>
  );
};
