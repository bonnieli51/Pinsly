import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import UserShowPage from "./components/UserShowPage";
import BoardShowPage from "./components/Boards/BoardShowPage";
import HomePage from "./components/HomePage";
import NewPinForm from "./components/Pins/NewPinForm";
import PinShowPage from "./components/Pins/PinShowPage";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        {/* <Route path={`/:username`}> */}
        <Route exact path={`/:userId`}>
          <UserShowPage />
        </Route>
        <Route exact path={`/users/:userId/boards/:boardId`}>
          <BoardShowPage />
        </Route>
        <Route exact path={`/pins/:pinId`}>
          <PinShowPage />
        </Route>
        <Route exact path={`/pin/new`}>
          <NewPinForm />
        </Route>
        <Route exact path={`/`}>
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
