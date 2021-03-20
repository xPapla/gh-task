import {
  ChangeEventHandler,
  FunctionComponent,
  InputHTMLAttributes,
  KeyboardEventHandler,
  useCallback,
} from "react";
import { useSearchContext } from "../SearchContext";
import { Input, InputIcon, OuterWrapper } from "./components";

export type SearchBoxProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "placeholder"
>;

export const SearchBox: FunctionComponent<SearchBoxProps> = ({
  ...inputProps
}) => {
  const { value, setValue, submit } = useSearchContext();
  const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    e => setValue(e.target.value),
    [setValue],
  );

  const onKeyPress = useCallback<KeyboardEventHandler<HTMLInputElement>>(
    e => e.key === "Enter" && submit(),
    [submit],
  );

  return (
    <OuterWrapper>
      <InputIcon />
      <Input
        {...inputProps}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </OuterWrapper>
  );
};
