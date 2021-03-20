import { lazy } from "react";

export const LazyUserStats = lazy(async () => ({
  default: (await import("./UserStats" /* webpackChunkName: "UserStats" */))
    .UserStats,
}));
