import { FC, memo, useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/Button";
import { sidebarItemsList } from "../../model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import classes from "./Sidebar.module.scss";

const SidebarComponent: FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const collapsedToggle = useCallback(() => {
    setCollapsed((prevState) => !prevState);
  }, []);

  return (
    <div
      data-testid="sidebar"
      className={classNames(classes.sidebar, {
        [classes.collapsed]: collapsed,
      })}
    >
      <div className={classes.links}>
        {sidebarItemsList.map((item) => (
          <SidebarItem
            key={item.path}
            path={item.path}
            Icon={item.Icon}
            text={item.text}
            collaspsed={collapsed}
          />
        ))}
      </div>
      <Button
        data-testid="sidebar-toggle"
        className={classes["toggle-button"]}
        fullWidth
        variant="ghost"
        form="brick"
        onClick={collapsedToggle}
      >
        {collapsed ? ">" : "<"}
      </Button>
    </div>
  );
};

export const Sidebar = memo(SidebarComponent);
