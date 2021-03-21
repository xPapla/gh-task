import { FunctionComponent } from "react";
import { Repo } from "../../shared/api";
import { RepoCard, RepoList, RepoNameA, RepoStargazers } from "./components";

interface Props {
  repos: Repo[];
}

export const UserTopReposContent: FunctionComponent<Props> = ({ repos }) => {
  if (repos.length === 0) {
    return <div>Nothing to show 😥</div>;
  }

  return (
    <RepoList>
      {repos.map(it => (
        <RepoCard key={it.id}>
          <RepoNameA href={it.htmlUrl}>{it.name}</RepoNameA>
          <RepoStargazers>{it.stargazersCount} ⭐</RepoStargazers>
        </RepoCard>
      ))}
    </RepoList>
  );
};
