import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import { routePath } from "shared/config/routeConfig/routeConfig";
import i18nForTests from "../../config/i18n/i18nForTests";

interface ComponentRenderOptions {
  route: string;
}

export const componentRender = (
  component: ReactNode,
  options?: ComponentRenderOptions,
) => {
  const { route = routePath.main } = options || {};

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
    </MemoryRouter>,
  );
};
