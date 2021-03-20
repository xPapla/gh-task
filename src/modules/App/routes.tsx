import { PartialRouteObject } from "react-router";
import { LazyDefaultLayout } from "../Layouts";
import { LazyUserStats } from "../UserStats";

export const routes: PartialRouteObject[] = [
  {
    element: <LazyDefaultLayout />,
    children: [
      {
        path: "/",
        element: <div>Hello</div>,
      },
      {
        path: ":name",
        element: <LazyUserStats />,
      },
    ],
  },
];
