import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams, Link } from "react-router-dom";
import "./PinIndex.css";

function PinIndexItem({ pin }) {
  const dispatch = useDispatch();
  const { boardId } = useParams();

  return (
    // <Link to={`/boards/${boardId}/pins/${pin.id}`} className="pin">
      <div className="boardshowpg-pin">
        <img className="pin-image" src={pin.imagesUrl[0]} ></img>
        <div className="pin-name">{pin.title}</div>
        <div className="pin-user">{pin.userId}</div>
      </div>
    // </Link>
  );
}
export default PinIndexItem;
