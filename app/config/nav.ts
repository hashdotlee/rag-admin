export type NavItem = {
  title: string;
  url: string;
  items?: NavItem[];
};

export const NAV_CONFIGS: NavItem[] = [
  {
    title: "Welcome!",
    url: "/",
    items: [
      {
        title: "Home",
        url: "/",
      },
    ],
  },
  {
    title: "Getting Started",
    url: "/getting-started",
    items: [
      {
        title: "Introduction",
        url: "/getting-started/introduction",
      },
    ],
  },
  {
    title: "Your Application",
    url: "/apps",
    items: [
      {
        title: "Team Bots",
        url: "/apps/teams-bots",
      },
    ],
  },
];
