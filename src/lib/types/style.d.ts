// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      main: string;
      grayScale: string;
      complete: string;
      success: string;
      warning: string;
      error: string;
      yellow: string;
      pink: string;
    };
  }
}
