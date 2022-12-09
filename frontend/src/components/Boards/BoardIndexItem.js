import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams, Link} from "react-router-dom";



function BoardIndexItem({ board }) {
  const dispatch = useDispatch();
  const { userId } = useParams();

  return (
    <Link 
    to={`/users/${userId}/boards/${board.id}`}
    className="board">
      <div className="boardsd">
        <div className="board-images">Image</div>
        <div className="board-name">{board.name}</div>
        <div className="num-pins-board"># Pins</div>
      </div>
    </Link>
  );
}

export default BoardIndexItem;
