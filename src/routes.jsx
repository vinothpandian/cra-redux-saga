import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// For GitHub
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Menubar from "./components/Menubar";
import Home from "./containers/Home";
import Packages from "./containers/Packages";
import { Container } from "reactstrap";

const Routes = () => (
  <Router>
    <Container fluid className="p-0 h-100">
      <Menubar />
      <Switch>
        <Route path="/packages" exact component={Packages} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Container>
  </Router>
);

export default Routes;
