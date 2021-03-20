import { FunctionComponent } from "react";
import { useSearchContext } from ".";
import { Button } from "../Button";

export const SearchButton: FunctionComponent = () => {
  const { submit } = useSearchContext();
  return <Button onClick={submit}>Search</Button>;
};
