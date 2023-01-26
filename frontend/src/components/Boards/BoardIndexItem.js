import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import boardsReducer from "../../store/board";
import * as pinsActions from "../../store/pin";

function BoardIndexItem({ board }) {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const pinImages = board.pinImages ? board.pinImages : [];

  // const pins = useSelector(({ pins }) =>
  //   Object.values(pins).filter((pin) => pin.boardId === parseInt(board.id))
  // );

  // const firstThreePins = pins.length > 3 ? pins.slice(0, 3) : pins.slice();
  // const firstThreePinsImg = firstThreePins.map((pin) =>
  //   pin.imageUrl ? pin.imageUrl : ""
  // );
  // const pins = useSelector((state) => state.pins);

  // const boardpins = pins[board.id] ? pins[board.id] : [];
  // const firstThreePins =
  //   boardpins.length > 3 ? boardpins.slice(0, 3) : boardpins.slice();

  // const firstThreePinsImg = firstThreePins.map((pin) =>
  //   pin.imageUrl ? pin.imageUrl : ""
  // );

  const firstThreePinsImages =
    pinImages.length > 3 ? pinImages.slice(0, 3) : pinImages.slice();

  const PinImageURLs = firstThreePinsImages.map((image) =>
    image.imageUrl ? image.imageUrl : ""
  );

  useEffect(() => {
    // dispatch(pinsActions.fetchAllBoardPins());
  }, [dispatch]);

  return (
    <Link to={`/users/${userId}/boards/${board.id}`} className="board">
      <div className="board-div">
        <div className="board-images">
          <img id="boardimage1" src={PinImageURLs[0]}></img>
          <img src={PinImageURLs[1]}></img>
          <img src={PinImageURLs[2]}></img>
        </div>
        <div className="board-name">{board.name}</div>
        <div className="num-pins-board">{board.pinCount} pins</div>
      </div>
    </Link>
  );
}

export default BoardIndexItem;
