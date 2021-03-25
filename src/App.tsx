import React from "react";
import { Route, Switch } from "react-router";
import { Pages } from "./shares/URLs";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Facility from "./pages/Facility";
import Search from "./pages/Search";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Notfound from "./pages/Notfound";

const App = () => (
  <Switch>
    <Route exact path={Pages.HomePage} component={Home} />
    <Route exact path={Pages.Category + ":id"} component={Category} />
    <Route exact path={Pages.Facility + ":id"} component={Facility} />
    <Route exact path={Pages.Search + ":text"} component={Search} />
    <Route exact path={Pages.About} component={About} />
    <Route exact path={Pages.Faq} component={Faq} />
    <Route component={Notfound} />
  </Switch>
);

export default App;
