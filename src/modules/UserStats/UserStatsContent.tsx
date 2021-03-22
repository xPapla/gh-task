import { FunctionComponent } from "react";
import { User } from "../shared/api";
import {
  SectionHeader,
  UserAvatar,
  UserBio,
  UserCard,
  UserCardInfo,
  UserName,
} from "./components";
import { UserTopRepos } from "./UserTopRepos";

interface Props {
  data: User;
}

export const UserStatsComponent: FunctionComponent<Props> = ({ data }) => (
  <>
    <UserCard data-cy="user-card">
      <UserCardInfo>
        <UserAvatar src={data.avatarUrl} alt="avatar" />
        <UserName>{data.login}</UserName>
      </UserCardInfo>
      {data.bio && <UserBio>{data.bio}</UserBio>}
    </UserCard>
    <SectionHeader>Top repositories</SectionHeader>
    <UserTopRepos username={data.login} />
  </>
);
