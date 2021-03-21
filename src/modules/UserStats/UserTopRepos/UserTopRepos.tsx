import { FunctionComponent, useMemo } from "react";
import { useAllUserReposQuery } from "../../shared/api";
import { Spinner } from "../../shared/components";
import { UserTopReposContent } from "./UserTopReposContent";

const TOP_N_COUNT = 3;

interface Props {
  username: string;
}

export const UserTopRepos: FunctionComponent<Props> = ({ username }) => {
  const { data, error, isLoading } = useAllUserReposQuery(username);

  const reposToShow = useMemo(
    () =>
      data
        ?.sort((a, b) => b.stargazersCount - a.stargazersCount || b.id - a.id)
        .slice(0, TOP_N_COUNT),
    [data],
  );

  if (isLoading) {
    return <Spinner text="Loading repositories..." />;
  }

  if (error || !reposToShow) {
    return <div>error: {error?.message}</div>;
  }

  return <UserTopReposContent repos={reposToShow} />;
};
