import { Fragment, useState } from "react";
import CommentInput from "./CommentInput";

const Comment = ({ commentsData, commentId, onAdd, showReplay }) => {
  const [showAddComment, toggleComment] = useState(false);
  const { comments, users } = commentsData;
  const { comment, userId } = comments[commentId];

  const showAddCommentBox = () => {
    toggleComment(!showAddComment);
  };

  return (
    <div className="display-comment">
      <div className="avatar"></div>
      <div className="comment-info">
        <div className="user-name">{users[userId].name}</div>
        <div className="comment-text">{comment}</div>
        {showReplay && (
          <Fragment>
            {!showAddComment && (
              <div className="replay" onClick={showAddCommentBox}>
                Reply
              </div>
            )}
            {showAddComment && (
              <div className="replay-comment">
                <CommentInput
                  showCancel={true}
                  onCancel={() => toggleComment(!showAddComment)}
                  commentId={commentId}
                  onAdd={(comment, commentId) => {
                    onAdd(comment, commentId);
                    toggleComment(!showAddComment);
                  }}
                />
              </div>
            )}
            {comments[commentId].replies &&
              comments[commentId].replies.map((repliId) => {
                return (
                  <Comment
                    commentId={repliId}
                    commentsData={commentsData}
                    showReplay={false}
                  />
                );
              })}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Comment;
