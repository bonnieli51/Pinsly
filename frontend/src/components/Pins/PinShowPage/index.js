import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import * as pinsActions from "../../../store/pin";
import AddPinBoard from "../../BoardPins/AddPinBoard";
import CommentIndex from "../../Comments/CommentIndex/CommentIndex";
import NewComment from "../../Comments/NewComment/NewComment";
import "./PinShowPage.css";

function PinShowPage() {
  const dispatch = useDispatch();
  const { pinId } = useParams();
  const pin = useSelector(({ pins }) => (pins[pinId] ? pins[pinId] : {}));
  const currentUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(pinsActions.fetchPin(pinId));
  }, [dispatch]);

  if (!currentUser) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <div id="pin-show-page">
      <img className="pin-image" src={pin.imageUrl}></img>

      <div id="pin-show-page-right">
        <AddPinBoard pinId={pinId} currentUser={currentUser} />
        <div id="pin-show-page-pin-title">{pin.title}</div>
        <div id="pin-show-page-pin-description">{pin.description}</div>
        <div id="pin-show-page-user">
          <div id="pin-show-page-text">Uploaded by </div>
          <div id="pin-show-page-user-img">
            {pin.username ? pin.username[0] : ""}
          </div>
          <div id="pin-show-page-username"> {pin.username}</div>
        </div>
        <CommentIndex pinId={pinId} />
        <NewComment pinId={pinId} />
      </div>
    </div>
  );
}

export default PinShowPage;
