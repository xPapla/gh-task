import styled from "styled-components";

export const UserCard = styled.div``;

export const UserCardInfo = styled.div`
  display: flex;
  align-items: flex-end;

  & > * + * {
    margin-left: ${p => p.theme.spacing * 2}px;
  }
`;

export const UserAvatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 12px;
  background-color: lightgray;
`;

export const UserName = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;

  color: ${p => p.theme.colors.header};
`;

export const UserBio = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0.4px;

  color: ${p => p.theme.colors.userBio};
  margin: 0;
  margin-top: ${p => p.theme.spacing * 2}px;
`;

export const SectionHeader = styled.h4`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;

  margin-top: ${p => p.theme.spacing * 4}px;
  margin-bottom: ${p => p.theme.spacing * 2}px;
`;
