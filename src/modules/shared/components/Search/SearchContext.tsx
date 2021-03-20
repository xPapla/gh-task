import {
  createContext,
  FunctionComponent,
  useContext,
  useMemo,
  useState,
} from "react";

interface SearchContextType {
  value: string;
  setValue: (value: string) => void;
  submit: () => void;
}

const SearchContext = createContext<SearchContextType>({
  value: "",
  setValue: () => {
    throw new Error("Missing context");
  },
  submit: () => {
    throw new Error("Missing context");
  },
});

interface SearchContextProviderProps {
  onSubmit: (value: string) => void;
}

export const SearchContextProvider: FunctionComponent<SearchContextProviderProps> = ({
  onSubmit,
  children,
}) => {
  const [value, setValue] = useState("");

  const contextValue = useMemo(
    () => ({
      value,
      setValue,
      submit: () => onSubmit(value),
    }),
    [onSubmit, value],
  );

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
