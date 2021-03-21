// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      pageBackground: string;
      cardBackground: string;

      primary: string;
      links: string;
      spinner: string;

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
