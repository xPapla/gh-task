import { FunctionComponent, Suspense } from "react";
import { useRoutes } from "react-router";
import { Spinner } from "../shared/components";
import { routes } from "./routes";

export const AppContent: FunctionComponent = () => {
  const element = useRoutes(routes);

  return (
    <Suspense fallback={<Spinner text="Loading app..." />}>{element}</Suspense>
  );
};
