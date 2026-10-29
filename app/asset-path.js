// Files in public/ need the base path when the site is served from a sub-path (GitHub Pages).
// next/link adds it to page links automatically; plain src and url() values do not get it.
export function asset(path) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
