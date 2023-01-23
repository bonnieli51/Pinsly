import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as commentsActions from "../../../store/comment";
import CommentIndexItem from "./CommentIndexItem";
import "./CommentIndex.css";
import NewComment from "../NewComment/NewComment";

function CommentIndex({ pinId }) {
  const dispatch = useDispatch();
  const comments = useSelector((state) => Object.values(state.comments));

  useEffect(() => {
    dispatch(commentsActions.fetchComments(pinId));
  }, [comments.length]);

  return (
    <>
      <div id="comment-count">{comments.length} Comments</div>
      {comments.length === 0 ? (
        <div className="no-comments">
          No comments yet! Add one to start the conversation.
        </div>
      ) : (
        <div className="comments-list">
          {comments &&
            comments.map((comment) => (
              <CommentIndexItem key={comment.id} comment={comment} />
            ))}
        </div>
      )}
    </>
  );
}
export default CommentIndex;
