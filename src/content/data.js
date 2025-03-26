const contentMap = {};
const posts = import.meta.glob("./**/*.mdx", { eager: true });

for (let i in posts) {
  contentMap[i] = "default" in posts[i] ? posts[i].default : posts[i];
  contentMap[i].toc = "toc" in posts[i] ? posts[i].toc : {};
}

export const sideBar = {
  "quick-start": {
    order: 0,
    label: "Quick Start",
    source: contentMap["./quick-start.mdx"],
    key: "quick-start",
  },
  about: {
    order: 1,
    label: "About",
    source: contentMap["./about.mdx"],
    key: "about",
  },
  credits: {
    order: 2,
    label: "Credits",
    source: contentMap["./credits.mdx"],
    key: "credits",
  },
};
