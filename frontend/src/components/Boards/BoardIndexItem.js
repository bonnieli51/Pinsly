import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import * as pinsActions from "../../store/pin";

function BoardIndexItem({ board }) {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const pins = useSelector(({ pins }) => Object.values(pins).filter(pin => pin.boardId === parseInt(board.id)));
  // const boardpins = pins.filter(pin => pin.boardId === parseInt(board.id));
  // console.log("pins ", pins );
  const firstThreePins = pins.length > 3 ? pins.slice(0,3) : pins.slice();
  const firstThreePinsImg = firstThreePins.map((pin) => (pin.imageUrl ? pin.imageUrl : ""
  ))
 
  console.log("firstThreePinsImg", firstThreePinsImg );
  useEffect(() => {
    dispatch(pinsActions.fetchAllPins());
  }, [dispatch]);

  return (
    <Link to={`/users/${userId}/boards/${board.id}`} className="board">
      <div className="board-div">
        <div className="board-images">
          {/* <div id="img-1">img-1</div>
          <div>img-2</div>
          <div>img-3</div> */}
          <img id="boardimage1"src={firstThreePinsImg[0]}></img>
          <img src={firstThreePinsImg[1]}></img>
          <img src={firstThreePinsImg[2]}></img>
        </div>
        <div className="board-name">{board.name}</div>
        <div className="num-pins-board">{board.pinCount} pins</div>
      </div>
    </Link>
  );
}

export default BoardIndexItem;
