import { Fragment } from "react";
import "twin.macro";

import { Router } from "./Routes";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import GlobalStyles from "./style/GlobalStyles";

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />

      <ThemeContextProvider>
        <Router />
      </ThemeContextProvider>
    </Fragment>
  );
};

export default App;
