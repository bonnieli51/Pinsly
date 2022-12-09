import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as boardsActions from "../../store/board";
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
        <div>{board.description}</div>
        <button onClick={() => dispatch(boardsActions.deleteBoard(boardId))}>
          Delete Board
        </button>
      </div>
    </>
  );
}

export default BoardShowPage;
