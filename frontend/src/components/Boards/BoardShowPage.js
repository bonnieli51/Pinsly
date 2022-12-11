import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as boardsActions from "../../store/board";
import DropDownMenu from "./DropDownMenu";

function BoardShowPage() {
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const board = useSelector(({ boards }) =>
    boards[boardId] ? boards[boardId] : {}
  );


  useEffect(() => {
    dispatch(boardsActions.fetchBoard(boardId));
  }, [boardId]);


  return (
    <>
      <div>
        <div>{board.name}</div>
        < DropDownMenu/>
        <div>{board.description}</div>
      </div>
    </>
  );
}

export default BoardShowPage;
