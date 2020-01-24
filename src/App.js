import React from "react";

import "./App.css";
import Nav from "./Nav";
import Items from "./items";
import Home from "./home";
import Itemdetail from "./itemdetail";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Champions" component={Items} />
          <Route exact path="/Champions/:champion" component={Itemdetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
