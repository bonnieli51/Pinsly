import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as boardsActions from "../../store/board";
import BoardIndexItem from "./BoardIndexItem";
import "./BoardIndex.css"

function BoardIndex() {
  const dispatch = useDispatch();
  const boards = useSelector((state) => Object.values(state.boards));
  //   const { username } = useParams();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(boardsActions.fetchBoards(userId));
  }, []);

  return (
    <>
      <div id="boards">
        {boards.map((board) => (
          <BoardIndexItem key={board.id} board={board} />
        ))}
      </div>
    </>
  );
}

// await store.dispatch(boardsActions.fetchBoards(1))

export default BoardIndex;
