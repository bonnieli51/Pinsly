import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as commentsActions from "../../../store/comment";
import CommentIndexItem from "./CommentIndexItem";

function CommentIndex({ pinId }) {
  const dispatch = useDispatch();
  const comments = useSelector((state) => Object.values(state.comments));
  console.log(comments);

  useEffect(() => {
    dispatch(commentsActions.fetchComments(pinId));
  }, [pinId]);

  return (
    <div className="comments-list">
      {comments.map((comment) => (
        <CommentIndexItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
export default CommentIndex;
