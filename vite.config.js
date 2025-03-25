import mdx from "@mdx-js/rollup";
import preact from "@preact/preset-vite";
import { adex } from "adex";
import reHighlight from "rehype-highlight";
import reSlugs from "rehype-slug";
import { remarkMdxToc } from "remark-mdx-toc";
import { defineConfig } from "vite";

const baseURL = process.env.BASE_URL ?? "/";

// https://vite.dev/config/
export default defineConfig({
  base: baseURL,
  plugins: [
    preact({
      prerender: {
        enabled: true,
        prerenderScript: "/virtual:adex:client",
        renderTarget: "#app",
      },
    }),
    adex({
      ssr: false,
      islands: false,
    }),
    mdx({
      baseUrl: baseURL,
      jsxImportSource: "preact",
      rehypePlugins: [reSlugs, reHighlight],
      remarkPlugins: [remarkMdxToc],
    }),
  ],
});
