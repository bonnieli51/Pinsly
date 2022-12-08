import React from "react";
import { useDispatch } from "react-redux";

function BoardIndexItem({ board }) {
  const dispatch = useDispatch;
  return (
    <div className="board">
        <div className="board-images">Image</div>
        <div className="board-name">{board.name}</div> 
        <div className="num-pins-board"># Pins</div>
    </div>);
}

export default BoardIndexItem;
