export function TableOfContents({ items = [] } = {}) {
  return (
    <ul class="w-[150px] text-sm">
      {items.map((d) => {
        return (
          <li>
            <a href={`#${d.value.toLowerCase().replace(/[- ]/g, "-")}`}>
              {d.value}
            </a>
            {d.children && <TableOfContents items={d.children} />}
          </li>
        );
      })}
    </ul>
  );
}
