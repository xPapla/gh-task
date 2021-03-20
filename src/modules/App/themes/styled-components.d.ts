// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    pageBackground: string;

    colors: {
      main: string;
      links: string;
      textWhite: string;
    };

    spacing: number;

    search: {
      bgColor: string;
      placeholderColor: string;
      color: string;
    };
  }
}
