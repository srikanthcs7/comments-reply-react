import { useState } from "react";
const CommentInput = ({ onAdd, showCancel, onCancel, commentId = null }) => {
  const [comment, setComment] = useState("");

  const onSubmit = () => {
    onAdd(comment, commentId);
    setComment("");
  };
  return (
    <div className="display-comment">
      <div className="avatar"></div>
      <div className="input-box">
        <textarea
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <button className="add-button" onClick={onSubmit}>
          {" "}
          Add{" "}
        </button>
        {showCancel && (
          <button className="add-button" onClick={onCancel}>
            {" "}
            Cancel{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentInput;
