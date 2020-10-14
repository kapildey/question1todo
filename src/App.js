import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header.js";
import Policy from "./pages/Policy";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import TodoList from "./components/TodoList.js";

import { Grid } from "@material-ui/core";

function App() {
  return (
    <Router>
      <div className="App">
        <Grid container spacing={2}>
          <Switch>
            <Route path="/policy">
              <Grid item xs={3}>
                <Header />
              </Grid>
              <Grid item xs={6}>
                <TodoList />
              </Grid>
              <Grid item xs={3}>
                <Policy />
              </Grid>
            </Route>
            <Route path="/about">
              <Grid item xs={3}>
                <Header />
              </Grid>
              <Grid item xs={6}>
                <TodoList />
              </Grid>
              <Grid item xs={3}>
                <About />
              </Grid>
            </Route>
            <Route path="/services">
              <Grid item xs={3}>
                <Header />
              </Grid>
              <Grid item xs={6}>
                <TodoList />
              </Grid>
              <Grid item xs={3}>
                <Services />
              </Grid>
            </Route>
            <Route path="/">
              <Grid item xs={3}>
                <Header />
              </Grid>
              <Grid item xs={6}>
                <TodoList />
              </Grid>
              <Grid item xs={3}>
                <Home />
              </Grid>
            </Route>
          </Switch>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
