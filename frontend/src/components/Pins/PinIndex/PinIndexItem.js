import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams, Link } from "react-router-dom";
import "./PinIndex.css";
import * as usersActions from "../../../store/user";

function PinIndexItem({ pin }) {
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const userId = pin.userId;
  const user = useSelector(({ users }) =>
    users[userId] ? users[userId] : {}
  );

  useEffect(() => {
    dispatch(usersActions.fetchUser(userId));
  }, [dispatch, pin]);

  return (
    // <Link to={`/boards/${boardId}/pins/${pin.id}`} className="pin">
    <div className="boardshowpg-pin">
      <img className="pin-image" src={pin.imagesUrl[0]}></img>
      <div className="pin-name">{pin.title}</div>
      <div className="pin-user">{user.username}</div>
    </div>
    // </Link>
  );
}
export default PinIndexItem;
