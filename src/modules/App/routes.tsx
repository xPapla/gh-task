import { PartialRouteObject } from "react-router";
import { LazyDefaultLayout } from "../Layouts";
import { LazyUserStats } from "../UserStats";
import { LazyWelcome } from "../Welcome";

export const routes: PartialRouteObject[] = [
  {
    element: <LazyDefaultLayout />,
    children: [
      {
        path: "/",
        element: <LazyWelcome />,
      },
      {
        path: ":name",
        element: <LazyUserStats />,
      },
    ],
  },
];
