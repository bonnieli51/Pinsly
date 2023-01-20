import React from "react";

function CommentIndexItem({ comment }) {
  console.log(comment);
  return (
    <>
      <div>{comment.description}</div>
    </>
  );
}

export default CommentIndexItem;
