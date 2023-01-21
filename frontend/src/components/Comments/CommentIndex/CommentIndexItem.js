import { Link, useHistory } from "react-router-dom";
import React from "react";

function CommentIndexItem({ comment }) {
  const history = useHistory();

  const handleRedirect = () => {
    history.push(`/${comment.userId}`);
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
    </div>
  );
}

export default CommentIndexItem;
