import styled from "styled-components";

export const HelloHeader = styled.h2`
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;

  color: ${p => p.theme.colors.header};
  margin: 0;
`;

export const AppDescription = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0.4px;

  color: ${p => p.theme.colors.userBio};
  margin-top: ${p => p.theme.spacing * 2}px;
`;
