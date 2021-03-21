import { lazy } from "react";

export const LazyWelcome = lazy(async () => ({
  default: (await import("./Welcome" /* webpackChunkName: "Welcome" */))
    .Welcome,
}));
