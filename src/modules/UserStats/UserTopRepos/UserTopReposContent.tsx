import { FunctionComponent } from "react";
import { Repo } from "../../shared/api";
import {
  NoRepos,
  RepoCard,
  RepoList,
  RepoNameA,
  RepoStargazers,
} from "./components";

interface Props {
  repos: Repo[];
}

export const UserTopReposContent: FunctionComponent<Props> = ({ repos }) => {
  if (repos.length === 0) {
    return <NoRepos>Nothing to show 😥</NoRepos>;
  }

  return (
    <RepoList>
      {repos.map(it => (
        <RepoCard key={it.id}>
          <RepoNameA href={it.htmlUrl} target="_blank">
            {it.name}
          </RepoNameA>
          <RepoStargazers>{it.stargazersCount} ⭐</RepoStargazers>
        </RepoCard>
      ))}
    </RepoList>
  );
};
