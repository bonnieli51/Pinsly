import { Link, useHistory } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as commentsActions from "../../../store/comment";

function CommentIndexItem({ comment }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUserId = useSelector((state) => state.session.user.id);

  const handleRedirect = () => {
    history.push(`/${comment.userId}`);
  };

  const handleDelete = (e) => {
    e.preventDefault(e);
    dispatch(commentsActions.deleteComment(comment.id));
  };
  return (
    <div className="comment-item">
      <div className="comment-user" onClick={handleRedirect}>
        <div className="comment-profile">
          {comment.username ? comment.username[0] : ""}
        </div>
        <div className="comment-username">{comment.username}</div>
      </div>
      <div className="comment-text">{comment.description}</div>
      {currentUserId === comment.userId && (
        <button
          type="submit"
          onClick={handleDelete}
          className="delete-comment-button"
        >
          <i class="fa-solid fa-trash"></i>
        </button>
      )}
    </div>
  );
}

export default CommentIndexItem;
