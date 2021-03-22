import { transformAndValidate } from "class-transformer-validator";
import { useQuery } from "react-query";
import { throwIfArray } from "../../../../utils";
import { withApiClient } from "../apiClient";
import { User } from "../types";

const fetchUser = async (name: string): Promise<User> =>
  withApiClient(client =>
    client
      .url(`/users/${name.toLowerCase()}`)
      .get()
      .notFound(() => {
        throw new Error("User not found");
      })
      .json(async (json: any) => {
        const user = await transformAndValidate(User, json, {
          transformer: { excludeExtraneousValues: true },
        }).then(throwIfArray);

        return user;
      }),
  );

export const useUserQuery = (username: string) =>
  useQuery<User, Error>(["user", username], () => fetchUser(username));
