import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from "../lib/themeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const { body } = document;

    if (theme === Theme.LIGHT) {
      body.classList.remove(Theme.DARK);
      body.classList.add(Theme.LIGHT);
    }

    if (theme === Theme.DARK) {
      body.classList.remove(Theme.LIGHT);
      body.classList.add(Theme.DARK);
    }
  }, [theme]);

  const defaultValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};
