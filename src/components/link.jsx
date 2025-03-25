export function Link({ href, children, ...props }) {
  if (!href.startsWith("/")) throw new Error("Link href should start with /");
  href =
    "/" +
    (import.meta.env.BASE_URL + "/" + href)
      .split("/")
      .filter(Boolean)
      .join("/");

  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
