import React from "react";
import "./styles.css";
import Comment from "./Components/Comment";
import CommentInput from "./Components/CommentInput";
/*

read: const testData = = {
  commentIds: [1,2,3,4],
  comments: {
    [1]: {comment: '', replies: [2,4]},
    ...

    [2],
    [4]
  }
}

push: commentIds.push + comments.push
*/

export default function App() {
  const [commentsData, setCommentsData] = React.useState({
    commentIds: [],
    comments: {}
  });

  const addComment = (comment, commentId) => {
    console.log(commentId);
    const id = Math.ceil(Math.random() * 100); // UUId,
    let newComment = {
      [id]: {
        comment: comment,
        replies: [],
        userId: [1]
      }
    };
    let parentInfo = {};
    if (commentId) {
      parentInfo = {
        [commentId]: {
          comment: commentsData.comments[commentId].comment,
          replies: commentId
            ? [...(commentsData.comments[commentId].replies || []), id]
            : commentsData.comments[commentId]?.replies || [],
          userId: [1]
        }
      };
    }
    console.log(parentInfo);
    setCommentsData({
      users: {
        [1]: {
          name: "test"
        }
      },
      ...(!commentId
        ? { commentIds: [...commentsData.commentIds, id] }
        : { commentIds: commentsData.commentIds } || []),
      comments: {
        ...commentsData.comments,
        ...newComment,
        ...(commentId ? parentInfo : {})
      }
    });
  };

  console.log(commentsData);

  return (
    <div className="container">
      <CommentInput onAdd={addComment} />
      {/* <Comment /> */}
      {commentsData.commentIds.map((item, index) => {
        return (
          <div>
            <Comment
              commentId={item}
              commentsData={commentsData}
              onAdd={addComment}
              showReplay={true}
            />
          </div>
        );
      })}
    </div>
  );
}
