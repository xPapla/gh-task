import { FunctionComponent, Suspense } from "react";
import { useRoutes } from "react-router";
import { routes } from "./routes";

export const AppContent: FunctionComponent = () => {
  const element = useRoutes(routes);

  return <Suspense fallback={"Loading..."}>{element}</Suspense>;
};
