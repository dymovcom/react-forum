import { StyleDecorator } from "../../src/shared/config/storybook/decorators/StyleDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/decorators/RouterDecorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: "light",
    list: [
      { name: "light", class: "light-theme", color: "#ffffff" },
      { name: "dark", class: "dark-theme", color: "#22272B" },
    ],
  },
};

export const decorators = [StyleDecorator, RouterDecorator];
