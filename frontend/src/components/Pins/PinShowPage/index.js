import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import * as pinsActions from "../../../store/pin";
import * as commentsActions from "../../../store/comment";

import "./PinShowPage.css";

function PinShowPage() {
  const dispatch = useDispatch();
  const { pinId } = useParams();
  const pin = useSelector(({ pins }) => (pins[pinId] ? pins[pinId] : {}));
  const comments = useSelector((state) => Object.values(state.comments));
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(pinsActions.fetchPin(pinId));
    dispatch(commentsActions.fetchComments(pinId));
  }, [pinId]);

  if (!sessionUser) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <div id="pin-show-page">
      <img className="pin-image" src={pin.imageUrl}></img>
      <div id="pin-show-page-left">
        <div id="pin-show-page-pin-title">{pin.title}</div>
        <div id="pin-show-page-pin-description">{pin.description}</div>
        <div id="pin-show-page-user">
          <div>Uploaded by </div>
          <div id="pin-show-page-user-img">
            {pin.username ? pin.username[0] : ""}
          </div>
          <div> {pin.username}</div>
        </div>
        <div>{pin.commentCount} Comments</div>
      </div>
    </div>
  );
}

export default PinShowPage;
