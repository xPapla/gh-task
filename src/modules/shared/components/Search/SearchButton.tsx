import { FunctionComponent } from "react";
import { useSearchContext } from ".";
import { Button } from "../Button";

export const SearchButton: FunctionComponent = ({ ...props }) => {
  const { submit } = useSearchContext();
  return (
    <Button {...props} onClick={submit}>
      Search
    </Button>
  );
};
