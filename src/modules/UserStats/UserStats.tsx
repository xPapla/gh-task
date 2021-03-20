import { FunctionComponent } from "react";
import { useParams } from "react-router";

export const UserStats: FunctionComponent = () => {
  const { name } = useParams();

  return <>hi {name}</>;
};
