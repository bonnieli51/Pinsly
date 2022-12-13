import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as pinsActions from "../../../store/pin";
import PinIndexItem from "./PinIndexItem";
import "./PinIndex.css";

function PinIndex() {
  const dispatch = useDispatch();
  const pins = useSelector(({ pins }) => (pins ? Object.values(pins) : {}));
  //   const { username } = useParams();
  const { boardId } = useParams();

  useEffect(() => {
    dispatch(pinsActions.fetchPins(boardId));
  }, [dispatch, boardId]);

  return (
    <>
      <div id="total-pins">{pins.length} pins</div>
      <div id="boardshowpg-pins">
        {pins.map((pin) => (
          <PinIndexItem key={pin.id} pin={pin} />
        ))}
      </div>
    </>
  );
}
export default PinIndex;
