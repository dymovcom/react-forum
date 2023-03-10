import { Theme, useTheme } from "app/providers/ThemeProvider";
import { FC } from "react";
import { classNames } from "shared/lib/classNames";
import MoonIcon from "shared/assets/icons/moon-icon.svg";
import SunIcon from "shared/assets/icons/sun-icon.svg";
import { Button } from "shared/ui/button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(className)}
      variant="clear"
      size="s"
      onlyIcon
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
