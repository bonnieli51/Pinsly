import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link} from "react-router-dom";
import * as pinsActions from "../../store/pin";

function BoardIndexItem({ board }) {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const pins = useSelector(({ pins }) => Object.values(pins))
  // console.log(pins[0].imagesUrl ? pins[0].imagesUrl[0] : "")
  useEffect(() => {
    dispatch(pinsActions.fetchAllPins());
  }, [dispatch]);

  return (
    <Link 
    to={`/users/${userId}/boards/${board.id}`}
    className="board">
      <div className="board-div">
        <div className="board-images">
          <div id ="img-1">img-1</div>
          <div>img-2</div>
          <div>img-3</div>
        </div>
        <div className="board-name">{board.name}</div>
        <div className="num-pins-board">{board.pinCount} pins</div>
      </div>
    </Link>
  );
}

export default BoardIndexItem;
