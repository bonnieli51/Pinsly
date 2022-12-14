import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as usersActions from "../../../store/user";
import "./PinIndex.css";

function PinIndexItem({ pin }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = pin.userId;
  const user = useSelector(({ users }) => (users[userId] ? users[userId] : {}));

  useEffect(() => {
    dispatch(usersActions.fetchUser(userId));
  }, [dispatch, pin]);

  const handleClick = () => {
    history.replace(`/pins/${pin.id}`);
  };

  return (
    // <Link to={`pins/${pin.id}`} className="pin-link">
    <div className="boardshowpg-pin" onClick={handleClick}>
      <img className="pin-image" src={pin.imagesUrl[0]}></img>
      <div className="pin-name">{pin.title}</div>
      <div className="pin-user">{user.username}</div>
    </div>
    // </Link>
  );
}
export default PinIndexItem;
