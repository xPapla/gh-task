import { FunctionComponent } from "react";
import { HelloHeader, AppDescription } from "./components";

export const Welcome: FunctionComponent = () => (
  <>
    <HelloHeader>Hello!</HelloHeader>
    <AppDescription>
      Use searchbox above to find and display a github user together with their
      top 3 repos. Because of lack of sorting by stargazers in Github REST API,
      it might take a little longer to load repositories section for users with
      many of them.
    </AppDescription>
  </>
);
