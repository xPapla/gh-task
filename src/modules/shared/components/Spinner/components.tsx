import styled, { css, keyframes } from "styled-components";

const stretch = keyframes`
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
`;

const textRotate = keyframes`
  0% {
    transform: rotateX(90deg);
  }
  100% {
    transform: rotateX(0);
  }
`;

export const OuterWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${p => p.theme.spacing * 2}px;

  & > * + * {
    margin-top: ${p => p.theme.spacing * 2}px;
  }
`;

export const RectWrapper = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;

  & > * + * {
    margin-left: 4px;
  }
`;

export const Rect = styled.div<{ delay?: number }>`
  height: 100%;
  background-color: ${p => p.theme.colors.spinner};
  width: 5px;
  animation: ${stretch} 1.2s infinite ease-in-out;

  ${p =>
    p.delay &&
    css`
      animation-delay: -${p.delay}s;
    `}
`;

export const LoadingText = styled.div`
  animation: ${textRotate} 0.1s 1 ease-in-out;
`;
