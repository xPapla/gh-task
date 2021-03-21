import styled from "styled-components";

export const RepoList = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: ${p => p.theme.spacing * 2}px;
  }
`;

export const RepoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${p => p.theme.colors.cardBackground};
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: ${p => p.theme.spacing * 2}px;
`;

export const RepoNameA = styled.a`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;

  color: ${p => p.theme.colors.links};
  text-decoration: none;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  :hover {
    text-decoration: underline;
  }
`;

export const RepoStargazers = styled.span`
  flex-shrink: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;

  color: ${p => p.theme.colors.stargazersCount};
  margin-left: ${p => p.theme.spacing}px;
`;

export const NoRepos = styled.span`
  flex-shrink: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;

  color: ${p => p.theme.colors.userBio};
`;
