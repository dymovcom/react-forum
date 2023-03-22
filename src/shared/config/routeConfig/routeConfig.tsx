import { ProfilePage } from "pages/ProfilePage";
import { RouteProps } from "react-router-dom";
import { AboutPage } from "pages/AboutPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { MainPage } from "pages/MainPage";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  // last
  NOT_FOUND = "not_found",
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile",
  // last
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: routePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: routePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: routePath.profile,
    element: <ProfilePage />,
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: routePath.not_found,
    element: <NotFoundPage />,
  },
};
