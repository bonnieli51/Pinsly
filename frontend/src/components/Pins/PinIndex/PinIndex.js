import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as pinsActions from "../../../store/pin";
import PinIndexItem from "./PinIndexItem";
import Masonry from "react-masonry-css";
import "./PinIndex.css";

function PinIndex() {
  const dispatch = useDispatch();
  //   const { username } = useParams();
  const { boardId } = useParams();
  // const pins = useSelector(({ pins }) => {
  //   return Object.values(pins).filter((pin) => {
  //     return pin.boardId === parseInt(boardId);
  //   });
  // });
  // const BoardPinsSelector = (boardId) =>
  //   useSelector(({ pins }) => {
  //     return Object.values(pins).filter((pin) => {
  //       return pin.boardId === parseInt(boardId);
  //     });
  //   });
  // const AllPinsSelector = () => useSelector(({ pins }) => Object.values(pins));
  // const pins = boardId ? BoardPinsSelector(boardId) : AllPinsSelector();
  const pins = useSelector((state) =>
    state.pins ? Object.values(state.pins) : []
  );

  useEffect(() => {
    if (boardId) {
      // previous thunk:
      // dispatch(pinsActions.fetchPins(boardId));
      dispatch(pinsActions.fetchBoardPins(boardId));
    } else {
      dispatch(pinsActions.fetchAllPins());
    }
  }, [boardId]);

  const breakpointColumnsObj = {
    default: 6,
    1100: 5,
    700: 4,
    500: 3,
  };

  const items =
    pins &&
    pins.map(function (pin) {
      return <PinIndexItem key={pin.id} pin={pin} />;
    });
  return (
    <>
      {/* <div id="total-pins">{pins.length} pins</div> */}
      {/* <div id="boardshowpg-pins">
        {pins.map((pin) => (
          <PinIndexItem key={pin.id} pin={pin} />
        ))}
      </div> */}
      {/* {pins.map((pin) => ( */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {items}
      </Masonry>
    </>
  );
}
export default PinIndex;
