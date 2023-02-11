import { useState } from "react";
import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/button";
import classes from "./Sidebar.module.scss";

export const Sidebar = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const collapsedToggle = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div className={classNames(classes.Sidebar, { [classes.collapsed]: collapsed })}>
      <Button onClick={collapsedToggle}>toggle</Button>
    </div>
  );
};
