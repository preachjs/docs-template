import { useRoute } from "adex/router";
import { sideBar } from "../content/data";
import BaseLayout from "../layouts/base";
import { TableOfContents } from "../components/TableOfContents";

export default function ContentPage() {
  const route = useRoute();

  const contentKey = route.params.content;
  const Content = sideBar[contentKey]?.source || (() => <></>);
  return (
    <BaseLayout sideBarItems={sideBar}>
      <section class="flex gap-4 items-start w-full">
        <section class="w-full">
          <Content />{" "}
        </section>
        <nav class="sticky top-[50px] hidden md:block">
          <h6 class="font-semibold">On this page</h6>
          <TableOfContents items={Content.toc} />
        </nav>
      </section>
    </BaseLayout>
  );
}
