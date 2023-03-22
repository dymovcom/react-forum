import { FC, SVGProps } from "react";
import { routePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/main-icon.svg";
import AboutIcon from "shared/assets/icons/about-icon.svg";
import ProfileIcon from "shared/assets/icons/profile-icon.svg";

export interface ISidebarItem {
  path: string;
  text: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
}

export const sidebarItemsList: ISidebarItem[] = [
  {
    path: routePath.main,
    Icon: MainIcon,
    text: "main_link",
  },
  {
    path: routePath.about,
    Icon: AboutIcon,
    text: "about_link",
  },
  {
    path: routePath.profile,
    Icon: ProfileIcon,
    text: "profile_link",
  },
];
