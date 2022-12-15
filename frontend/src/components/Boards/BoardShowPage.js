import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import * as boardsActions from "../../store/board";
import * as usersActions from "../../store/user";
import DropDownMenu from "./DropDownMenu";
import PinIndex from "../Pins/PinIndex/PinIndex";
import "./BoardShowPage.css";

function BoardShowPage() {
  const dispatch = useDispatch();
  const { boardId, userId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const board = useSelector(({ boards }) =>
    boards[boardId] ? boards[boardId] : {}
  );
  const user = useSelector(({ users }) =>
    users[board.userId] ? users[board.userId] : {}
  );

  useEffect(() => {
    dispatch(boardsActions.fetchBoard(boardId));
    dispatch(usersActions.fetchUser(board.userId));
  }, [dispatch, boardId]);

  if (!sessionUser) {
    return <Redirect to="/"></Redirect>;
  }
  return (
    <>
      <div id="board-show-first-line">
        <div id="board-name-showpg">{board.name}</div>
        {parseInt(userId) === sessionUser.id ? <DropDownMenu /> : <></>}
      </div>
      <div id="top-board-show-page">
        <div id="user-board-showpg">
          {user.username ? user.username[0] : ""}
        </div>
        <div id="board-description-showpg">{board.description}</div>
      </div>
      <div id="total-pins">{board.pinCount} pins</div>
      <PinIndex />
    </>
  );
}

export default BoardShowPage;
