import { Theme, useTheme } from "app/providers/ThemeProvider";
import { FC, memo } from "react";
import { classNames } from "shared/lib/classNames";
import MoonIcon from "shared/assets/icons/moon-icon.svg";
import SunIcon from "shared/assets/icons/sun-icon.svg";
import { Button } from "shared/ui/Button";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcherComponent: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
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

export const ThemeSwitcher = memo(ThemeSwitcherComponent);
