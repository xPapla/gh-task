import { Expose } from "class-transformer";
import { IsInt, IsOptional, IsString } from "class-validator";

export class User {
  @Expose()
  @IsInt()
  id!: number;

  @Expose()
  @IsString()
  login!: string;

  @Expose()
  @IsString()
  @IsOptional()
  name!: string | null;

  @Expose({ name: "avatar_url" })
  @IsString()
  avatarUrl!: string;

  @Expose({ name: "public_repos" })
  @IsInt()
  publicRepos!: number;

  @Expose()
  @IsOptional()
  @IsString()
  bio!: string | null;
}
