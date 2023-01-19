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
    history.push(`/pins/${pin.id}`);
  };

  return (
    <div className="masonry-item">
      <div onClick={handleClick}>
        <img className="pin-image" src={pin.imageUrl}></img>
        <div className="pin-name">{pin.title}</div>
      </div>
      <Link className="pin-user" to={`/${pin.userId}`}>
        <div id="pin-index-user">{user.username ? user.username[0] : ""}</div>
        <div>{user.username}</div>
      </Link>
    </div>
  );
}
export default PinIndexItem;
