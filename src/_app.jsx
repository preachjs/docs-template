import {
  ErrorBoundary,
  LocationProvider,
  Route,
  Router,
  lazy,
  hydrate as preactHydrate,
} from "adex/router";

import { prerender as ssr } from "preact-iso";

import { useLang, useLink, useMeta, useTitle } from "adex/head";

import "virtual:adex:global.css";

// @ts-expect-error injected by vite
import { routes } from "~routes";

const baseURL = import.meta.env.BASE_URL ?? "/";

const normalizeURLPath = (url) =>
  (url.startsWith("/") ? "/" : "") +
  (baseURL + "/" + url + "/").split("/").filter(Boolean).join("/");

function ComponentWrapper({ url = "" }) {
  useLang("en");
  useMeta({
    charset: "UTF-8",
  });
  useMeta({
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
  });
  useTitle("Docs with preact");
  useLink({
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.0/styles/github-dark.min.css",
  });

  return (
    <LocationProvider url={url}>
      <ErrorBoundary>
        <Router>
          {routes.map((d) => (
            <Route
              path={normalizeURLPath(d.routePath)}
              component={lazy(d.module)}
            />
          ))}
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  );
}

export const App = ({ url = "" }) => {
  return <ComponentWrapper url={url} />;
};

async function hydrate() {
  preactHydrate(<ComponentWrapper />, document.getElementById("app"));
}

if (typeof window !== "undefined") {
  hydrate();
}

export const prerender = async ({ url }) => {
  const { html, links: discoveredLinks } = await ssr(
    <ComponentWrapper url={url} />
  );
  return {
    html,
    links: new Set([...(discoveredLinks ?? [])]),
  };
};
