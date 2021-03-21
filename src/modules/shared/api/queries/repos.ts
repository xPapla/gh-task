import { transformAndValidate } from "class-transformer-validator";
import { useQuery } from "react-query";
import { throwIfNotArray } from "../../../../utils";
import { withApiClient } from "../apiClient";
import { Repo } from "../types";

const fetchUserReposPage = async (
  username: string,
  page: number,
  pageSize: number,
): Promise<Repo[]> =>
  withApiClient(client =>
    client
      .url(`/users/${username}/repos?per_page=${pageSize}&page=${page}`)
      .get()
      .notFound(() => {
        throw new Error("User not found");
      })
      .json(async (json: any) => {
        const repos = await transformAndValidate(Repo, json, {
          transformer: { excludeExtraneousValues: true },
        }).then(throwIfNotArray);

        return repos;
      }),
  );

async function* userReposGenerator(username: string) {
  const pageSize = 100;
  let page = 1;

  let currentPage;
  do {
    currentPage = await fetchUserReposPage(username, page, pageSize);
    page++;
    yield currentPage;
  } while (currentPage.length === pageSize);
}

export const useAllUserReposQuery = (username: string) =>
  useQuery<Repo[], Error>(["user repos", username], async () => {
    const reposGen = userReposGenerator(username);
    const results: Repo[] = [];

    for await (const newResults of reposGen) {
      results.push(...newResults);
    }

    return results;
  });
