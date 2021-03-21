import { transformAndValidate } from "class-transformer-validator";
import { useQuery } from "react-query";
import { withApiClient } from "../apiClient";
import { User } from "../types";

const fetchUser = async (name: string): Promise<User> =>
  withApiClient(client =>
    client
      .url(`/users/${name}`)
      .get()
      .notFound(() => {
        throw new Error("User not found");
      })
      .fetchError(() => 5)
      .json(async (json: any) => {
        const user = await transformAndValidate(User, json, {
          transformer: { excludeExtraneousValues: true },
        });
        if (Array.isArray(user)) {
          throw new Error("Unexpected array type");
        }

        return user;
      }),
  );

export const useUserQuery = (username: string) =>
  useQuery<User, Error>(["user", username], () => fetchUser(username));
