export const DATA_URL = "/api/public";

export enum Pages {
  HomePage = "/",
  Register = "/register",
  About = "/about",
  // Faq = "/faq",
  // Category = "/category/",
  // Facility = "/facility/",
  // Search = "/search/",
  // Notfound = "/notfound",
}

export const MakeUrl = (url: string) =>
  process && process.env && process.env.PUBLIC_URL
    ? process.env.PUBLIC_URL + url
    : url;
