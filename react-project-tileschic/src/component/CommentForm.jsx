import React from "react";
import axios from "axios";
import { URLart, URLfavorites, URLimg } from "../consts";
import { useState, useEffect } from "react";

function CommentForm() {
  const [comment, setComment] = useState("");
  function handleSubmit(event) {}
  event.preventDefault();
  try {
    const newTask = {};

    const response = axios.post();
    console.log(response);
    // refetch();
    // setShowForm(false);
  } catch (error) {
    console.log(error);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="comment">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          name="bio"
          placeholder="Write your comment..."
          aria-label="Professional short bio"
        ></textarea>
        <button>Push comment</button>
      </div>
    </form>
  );
}

export default CommentForm;
