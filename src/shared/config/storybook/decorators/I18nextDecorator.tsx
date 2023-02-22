import { Story, StoryContext } from "@storybook/react";
import { Suspense, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "shared/config/i18n/i18n";

export const I18nextDecorator = (Story: Story, context: StoryContext) => {
  const {
    globals: { locale },
  } = context;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback="">
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};
