import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import UserShowPage from "./components/UserShowPage";
import BoardShowPage from "./components/Boards/BoardShowPage";
import NewBoardForm from "./components/Boards/NewBoardModal";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path={`/`}>
          <HomePage/>
        </Route>
        {/* <Route path={`/:username`}> */}
        <Route exact path={`/:userId`}>
          <UserShowPage />
        </Route>
        <Route exact path={`/users/:userId/boards/:boardId`}>
          <BoardShowPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
