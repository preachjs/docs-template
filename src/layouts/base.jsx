import { Sidebar } from "../components/Sidebar";

export default function BaseLayout({ children, sideBarItems = [] }) {
  return (
    <>
      <div class="min-h-[80vh] mx-auto max-w-4xl p-2">
        <header class="flex flex-col justify-center h-[400px]">
          <h1 class="font-semibold text-2xl">
            <a href="/" class="hover:underline hover:underline-offset-4">
              Preact Docs
            </a>
          </h1>
          <p>
            <small>Docs template based on preact</small>
          </p>
        </header>
        <main class="flex gap-10">
          <aside id="sidebar" class="flex-none text-sm">
            <Sidebar
              items={Object.values(sideBarItems).sort(
                (x, y) => x.order - y.order
              )}
              initialValue={Object.keys(sideBarItems)[0]}
            />
          </aside>
          <article class="flex-1 prose text-zinc-700">{children}</article>
        </main>
      </div>
      <footer class="mx-auto border-t border-t-zinc max-w-4xl p-2">
        <ul class="flex gap-4 justify-end">
          <li class="text-xs">
            <a class="w-full hover:underline hover:underline-offset-4" href="https://github.com/barelyhuman">Github</a>
          </li>
          <li class="text-xs">
            <a class="w-full hover:underline hover:underline-offset-4" href="https://github.com/barelyhuman">X</a>
          </li>
        </ul>
      </footer>
    </>
  );
}
