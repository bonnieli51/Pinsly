import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as commentsActions from "../../../store/comment";
import "./NewComment.css";

function NewComment({ pinId }) {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const currentUser = useSelector((state) => state.session.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const pin_id = pinId;
    setDescription("");
    return dispatch(commentsActions.createComment({ pin_id, description }));
  };

  return (
    <div className="new-comment">
      <div id="currentuser-comment-img">
        {currentUser.username ? currentUser.username[0] : ""}
      </div>
      <form className="new-comment-form" onSubmit={handleSubmit}>
        <textarea
          className="comment-textarea"
          placeholder="Add a Comment"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="add-comment-button"
          disabled={!description}
        >
          Done
        </button>
      </form>
    </div>
  );
}

export default NewComment;
