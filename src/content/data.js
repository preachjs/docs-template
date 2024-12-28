import { lazy } from "preact-iso";

export const sideBar = {
  quickStart: {
    order: 0,
    label: "Quick Start",
    source: lazy(() => import("./quick-start.mdx")),
    key: "quick-start",
  },
  about:{
    order: 1,
    label: "About",
    source: lazy(() => import("./about.mdx")),
    key: "about",
  }
};
