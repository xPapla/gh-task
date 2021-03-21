import { FunctionComponent } from "react";
import { LoadingText, OuterWrapper, Rect, RectWrapper } from "./components";

interface Props {
  text?: string;
}

export const Spinner: FunctionComponent<Props> = ({ text }) => (
  <OuterWrapper>
    <RectWrapper>
      <Rect delay={0.4} />
      <Rect delay={0.3} />
      <Rect delay={0.2} />
      <Rect delay={0.1} />
      <Rect />
    </RectWrapper>
    {text && <LoadingText>{text}</LoadingText>}
  </OuterWrapper>
);
