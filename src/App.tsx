import { Switch } from "react-router-dom";
import React from "react";
import "./App.less";
import Header from "./components/Navigation/Header";
import Home from "./components/Home";
import {Route} from "react-router-dom";

function App() {
  return <div className="App">
    <Header />
    <Switch>
    <Route exact path="/" component={Home} />
    </Switch>
  </div>;
}

export default App;
