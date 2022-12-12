import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as boardsActions from "../../store/board";
import DropDownMenu from "./DropDownMenu";
import PinIndex from "../Pins/PinIndex/PinIndex";
import "./BoardShowPage.css";

function BoardShowPage() {
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const board = useSelector(({ boards }) =>
    boards[boardId] ? boards[boardId] : {}
  );

  useEffect(() => {
    dispatch(boardsActions.fetchBoard(boardId));
  }, [dispatch, boardId]);

  return (
    <>
      <div id="board-show-first-line">
        <div id="board-name-showpg">{board.name}</div>
        <DropDownMenu />
      </div>
      <div id="board-description-showpg">{board.description}</div>
      <PinIndex />
    </>
  );
}

export default BoardShowPage;
