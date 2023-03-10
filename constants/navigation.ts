import IconHome from "~icons/carbon/home";
import IconSetting from "~icons/carbon/settings";
import INavigationLink from "~~/@types/constants/navigation";
const NAVIGATION: INavigationLink[] = [
  {
    title: "home",
    icon: IconHome,
    path: "/",
  },
  {
    title: "settings",
    icon: IconSetting,
    path: "/settings",
  },
];

export default NAVIGATION;
