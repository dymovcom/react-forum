import { StyleDecorator } from "../../src/shared/config/storybook/decorators/StyleDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/decorators/RouterDecorator";
import { I18nextDecorator } from "../../src/shared/config/storybook/decorators/I18nextDecorator";

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

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", title: "English" },
        { value: "ru", title: "Russian" },
      ],
      showName: true,
    },
  },
};

export const decorators = [StyleDecorator, RouterDecorator, I18nextDecorator];
