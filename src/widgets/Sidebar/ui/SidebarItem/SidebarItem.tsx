import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import { AppLink } from "shared/ui/appLink";
import { ISidebarItem } from "widgets/sidebar/model/items";
import classes from "./SidebarItem.module.scss";

interface SidebarItemProps extends ISidebarItem {
  collaspsed: boolean;
}

const SidebarItemComponent: FC<SidebarItemProps> = (props) => {
  const { path, Icon, text, collaspsed } = props;
  const { t } = useTranslation();
  return (
    <AppLink
      className={classNames(classes.link, { [classes.collapsed]: collaspsed })}
      to={path}
    >
      <Icon className={classes["link-icon"]} />
      <span className={classNames(classes["link-text"])}>{t(text)}</span>
    </AppLink>
  );
};

export const SidebarItem = memo(SidebarItemComponent);
