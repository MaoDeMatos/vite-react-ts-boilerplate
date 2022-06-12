import { Fragment } from "react";
import "twin.macro";

import { Router } from "./Routes";
import GlobalStyles from "./style/GlobalStyles";

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />

      <Router />
    </Fragment>
  );
};

export default App;
