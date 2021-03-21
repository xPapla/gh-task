import { FunctionComponent } from "react";
import { useParams } from "react-router";
import { useUserQuery } from "../shared/api";
import { Spinner } from "../shared/components";
import { UserStatsComponent as UserStatsContent } from "./UserStatsContent";

export const UserStats: FunctionComponent = () => {
  const { name } = useParams();
  const { data, error, isLoading } = useUserQuery(name);

  if (isLoading) {
    return <Spinner text="Loading user info..." />;
  }

  if (error || !data) {
    return <div>Error: {error?.message}</div>;
  }

  return <UserStatsContent data={data} />;
};
