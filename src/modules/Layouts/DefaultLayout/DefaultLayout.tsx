import { FunctionComponent, Suspense, useCallback } from "react";
import { Outlet, useNavigate } from "react-router";
import {
  SearchBox,
  SearchButton,
  SearchContextProvider,
  Spinner,
} from "../../shared/components";
import { Content, Header } from "./components";

export const DefaultLayout: FunctionComponent = () => {
  const navigate = useNavigate();
  const onSearch = useCallback(
    (value: string) => {
      navigate(`/${encodeURIComponent(value)}`);
    },
    [navigate],
  );

  return (
    <>
      <Header>
        <SearchContextProvider onSubmit={onSearch}>
          <SearchBox placeholder="Search for users" />
          <SearchButton />
        </SearchContextProvider>
      </Header>
      <Content>
        <Suspense fallback={<Spinner text="Loading page..." />}>
          <Outlet />
        </Suspense>
      </Content>
    </>
  );
};
