import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as commentsActions from "../../../store/comment";
import "./NewComment.css";

function NewComment({ pinId }) {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const currentUser = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const pin_id = pinId;
    setDescription("");
    setErrors([]);
    return dispatch(
      commentsActions.createComment({ pin_id, description })
    ).catch(async (res) => {
      let data;
      try {
        data = await res.clone().json();
      } catch {
        data = await res.text();
      }
      if (data?.errors) setErrors(data.errors);
      else if (data) setErrors([data]);
      else setErrors([res.statusText]);
    });
  };

  console.log(errors);

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
        <div className="comment-errors"> {errors[0]}</div>
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
