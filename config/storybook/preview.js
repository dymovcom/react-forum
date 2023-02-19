import { StyleDecorator } from "../../src/shared/config/storybook/decorators/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "../../src/app/providers/ThemeProvider";
import { RouterDecorator } from "../../src/shared/config/storybook/decorators/RouterDecorator";
import { I18nDecorator } from "../../src/shared/config/storybook/decorators/I18nDecorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  StyleDecorator,
  ThemeDecorator(Theme.LIGHT),
  RouterDecorator,
  I18nDecorator,
];
