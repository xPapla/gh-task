import { Expose } from "class-transformer";
import { IsInt, IsString } from "class-validator";

export class User {
  @Expose()
  @IsInt()
  id!: number;

  @Expose()
  @IsString()
  login!: string;

  @Expose({ name: "avatar_url" })
  @IsString()
  avatarUrl!: string;

  @Expose({ name: "public_repos" })
  @IsInt()
  publicRepos!: number;
}
