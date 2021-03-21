import { Expose } from "class-transformer";
import { IsInt, IsString } from "class-validator";

export class Repo {
  @Expose()
  @IsInt()
  id!: number;

  @Expose()
  @IsString()
  name!: string;

  @Expose({ name: "stargazers_count" })
  @IsInt()
  stargazersCount!: number;
}
