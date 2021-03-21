import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  padding: ${p => p.theme.spacing * 3}px;
  background-color: ${p => p.theme.colors.cardBackground};
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);

  & > * + * {
    margin-left: ${p => p.theme.spacing * 2}px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  padding: ${p => p.theme.spacing * 3}px;
`;
