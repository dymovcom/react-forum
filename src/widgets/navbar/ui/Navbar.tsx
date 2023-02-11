import { classNames } from "shared/lib/classNames";
import { AppLink } from "shared/ui/appLink";
import { LangSwitcher } from "features/langSwitcher";
import { ThemeSwitcher } from "features/themeSwitcher";
import classes from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps): JSX.Element => (
  <div className={classNames(classes.navbar, className)}>
    <div className={classes.links}>
      <AppLink variant="secondary" to="/" className={classes.mainLink}>Главная</AppLink>
      <AppLink variant="secondary" to="/about">О нас</AppLink>
    </div>
    <div className={classes.switchers}>
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  </div>
);
