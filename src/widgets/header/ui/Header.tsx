import { FC } from "react";
import { useTranslation } from "react-i18next";
import { routePath } from "shared/config/routeConfig/routeConfig";
import { useFlag } from "shared/hooks/useFlag/useFlag";
import { classNames } from "shared/lib/classNames";
import { LangSwitcher } from "features/langSwitcher";
import { ThemeSwitcher } from "features/themeSwitcher";
import { AppLink } from "shared/ui/appLink";
import { Button } from "shared/ui/button";
import { Modal } from "shared/ui/modal";
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
      {/* todo delete it */}
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={isOen} onClickOutside={setIsOpen.off}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum cumque
        debitis fugiat illum, inventore praesentium quisquam sint unde vel.
        Alias nesciunt nobis omnis quidem temporibus? Asperiores eaque quod
        ratione.
      </Modal>
    </div>
  );
};
