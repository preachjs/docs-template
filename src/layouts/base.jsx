import { Link } from "../components/link";
import { Sidebar } from "../components/Sidebar";

export default function BaseLayout({ children, sideBarItems = [] }) {
  return (
    <div>
      <div class="min-h-[80vh] mx-auto max-w-4xl p-2">
        <header class="flex flex-col justify-center h-[400px]">
          <h1 class="font-semibold text-2xl">
            <Link href="/" class="hover:underline hover:underline-offset-4">
              Preact Docs
            </Link>
          </h1>
          <p>
            <small>Docs template based on preact</small>
          </p>
        </header>
        <main class="flex flex-col sm:flex-row gap-12">
          <aside id="sidebar" class="flex-1 text-sm">
            <Sidebar
              items={Object.values(sideBarItems).sort(
                (x, y) => x.order - y.order
              )}
              initialValue={Object.keys(sideBarItems)[0]}
            />
          </aside>
          <article class="w-full md:w-[75%] prose text-zinc-700">
            {children}
          </article>
        </main>
      </div>
      <footer class="mx-auto border-t border-t-zinc max-w-4xl p-2">
        <ul class="flex gap-4 justify-end">
          <li class="text-xs">
            <a
              class="w-full hover:underline hover:underline-offset-4"
              href="https://github.com/barelyhuman"
              target="_blank"
              rel="noopener"
            >
              Github
            </a>
          </li>
          <li class="text-xs">
            <a
              target="_blank"
              rel="noopener"
              class="w-full hover:underline hover:underline-offset-4"
              href="https://github.com/barelyhuman"
            >
              X
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
