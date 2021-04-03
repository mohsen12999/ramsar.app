import React from "react";
import { Route, Switch } from "react-router";
import { Pages } from "./shares/URLs";

import Home from "./pages/Home";
// import Category from "./pages/Category";
// import Facility from "./pages/Facility";
// import Search from "./pages/Search";
// import Faq from "./pages/Faq";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
//import Register from "./pages/Register";

const App = () => (
  <Switch>
    <Route
      exact
      path={process.env.PUBLIC_URL + Pages.About}
      component={About}
    />

    <Route
      path={process.env.PUBLIC_URL + Pages.HomePage + ":text?"}
      component={Home}
    />

    <Route component={Notfound} />
  </Switch>
);

export default App;
