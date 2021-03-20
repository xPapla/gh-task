import { desaturate, lighten } from "polished";
import styled from "styled-components";

export const Button = styled.button`
  background-color: ${p => p.theme.colors.primary};
  border-radius: 8px;
  padding: 12px;

  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 12px;
  letter-spacing: 0.4px;
  color: ${p => p.theme.colors.textWhite};
  border: none;
  outline: none;
  cursor: pointer;

  :focus {
    background-color: ${p => lighten(0.05, p.theme.colors.primary)};
  }
  :hover {
    background-color: ${p => desaturate(0.2, p.theme.colors.primary)};
  }
  :active {
    background-color: ${p => desaturate(0.4, p.theme.colors.primary)};
  }
`;
