
import React from "react";
import { Route,Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import UserShowPage from "./components/UserShowPage";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        {/* <Route path={`/:username`}> */}
        <Route path={`/:userId`}>
          <UserShowPage/>
        </Route>


      </Switch>
    </>
  );
}

export default App;