import { lazy } from "preact-iso";

export const sideBar = {
  "quick-start": {
    order: 0,
    label: "Quick Start",
    source: lazy(() => import("./quick-start.mdx")),
    key: "quick-start",
  },
  about: {
    order: 1,
    label: "About",
    source: lazy(() => import("./about.mdx")),
    key: "about",
  },
  credits: { 
    order: 2,
    label: "Credits",
    source: lazy(() => import("./credits.mdx")),
    key: "credits",
  }
};
