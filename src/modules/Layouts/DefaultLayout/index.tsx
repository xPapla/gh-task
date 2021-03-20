import { lazy } from "react";

export const LazyDefaultLayout = lazy(async () => ({
  default: (
    await import("./DefaultLayout" /* webpackChunkName: "DefaultLayout" */)
  ).DefaultLayout,
}));
