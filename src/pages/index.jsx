import { TableOfContents } from "../components/TableOfContents";
import { sideBar } from "../content/data";
import BaseLayout from "../layouts/base";

const toc = [];

const AllContent = () => {
  const components = [];
  let i = -1;
  for (let d in sideBar) {
    i++;
    const Component = sideBar[d].source;
    const classList = i > 0 ? "mt-12 pt-12" : "";
    toc.push(...Component.toc);
    components.push(
      <article class={classList}>
        <Component />
      </article>
    );
  }

  return components;
};

export default function HomePage() {
  return (
    <BaseLayout sideBarItems={sideBar}>
      <section class="flex gap-4 items-start w-full">
        <section class="w-full">
          <AllContent />
        </section>
        <nav class="sticky top-[50px] hidden md:block">
          <h6 class="font-semibold">On this page</h6>
          <TableOfContents items={toc} />
        </nav>
      </section>
    </BaseLayout>
  );
}
