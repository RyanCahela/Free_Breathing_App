import React from "react";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import RoundScreen from "./screens/RoundScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route path="/settings">
          <SettingsScreen />
        </Route>
        <Route path="/round">
          <RoundScreen />
        </Route>
        <Route path="*">
          <NotFoundScreen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
