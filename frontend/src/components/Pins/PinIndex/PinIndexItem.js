import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams, Link } from "react-router-dom";

import "./PinIndex.css";

function PinIndexItem({ pin }) {
  const dispatch = useDispatch();
  const { boardId } = useParams();

  return (
    // <Link to={`/boards/${boardId}/pins/${pin.id}`} className="pin">
      <div className="pin">
        <img src={pin.imagesUrl[0]} ></img>
        {/* <div className="pin-image">{pin.imagesUrl[0]}</div> */}
        <div className="pin-name">{pin.title}</div>
        <div className="pin-name">{pin.userId}</div>
      </div>
    // </Link>
  );
}
export default PinIndexItem;
