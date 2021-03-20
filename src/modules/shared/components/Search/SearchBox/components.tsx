import styled from "styled-components";
import { ReactComponent as SearchIcon } from "./searchIcon.svg";

export const OuterWrapper = styled.div`
  background-color: ${p => p.theme.search.bgColor};
  border-radius: 8px;

  display: flex;
  align-items: center;
  flex-grow: 1;
  transition: all 200ms;

  :focus-within {
    box-shadow: inset 0px 0px 0px 1px ${p => p.theme.colors.primary};
  }

  padding: 10px 8px;
  & > * + * {
    margin-left: 8px;
  }
`;

export const InputIcon = styled(SearchIcon)``;

export const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;

  padding: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
  text-align: left;

  flex-grow: 1;
`;
