export const siteUrl = "https://www.kwas.tech";

export function absoluteUrl(pathname: string) {
  return `${siteUrl}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export function buildTitle(title: string, brand = "KWAS Technologies") {
  return `${title} | ${brand}`;
}
