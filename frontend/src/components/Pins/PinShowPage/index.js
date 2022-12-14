import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as pinsActions from "../../../store/pin";
import * as usersActions from "../../../store/user";
import "./PinShowPage.css";

function PinShowPage() {
  const dispatch = useDispatch();
  const { pinId } = useParams();
  const pin = useSelector(({ pins }) => (pins[pinId] ? pins[pinId] : {}));
  const user = useSelector(({ users }) =>
    users[pin.userId] ? users[pin.userId] : {}
  );

  useEffect(() => {
    dispatch(pinsActions.fetchPin(pinId));
    dispatch(usersActions.fetchUser(pin.userId));
  }, [pinId, pin.userId]);

  return (
    <div>
      <img className="pin-image" src={pin.imageUrl}></img>
      <div>{pin.title}</div>
      <div>{pin.description}</div>
      <div> Uploaded by {user.username}</div>
    </div>
  );
}

export default PinShowPage;
