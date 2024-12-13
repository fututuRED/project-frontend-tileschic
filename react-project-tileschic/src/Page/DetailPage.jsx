import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { URLart, URLimg, URLcomment } from "../consts";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import "../css/Gallery.css";

function DetailPage() {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [pseudonym, setPseudonym] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        const res = await axios.get(`${URLart}/${id}`);
        setArtwork(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArtwork();
  }, [id]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`${URLcomment}?artworkId=${id}`);
        setComments(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComments();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(URLcomment, {
        text: newComment,
        pseudonym: pseudonym,
        artworkId: id,
      });
      setComments([...comments, res.data]);
      setNewComment("");
      setPseudonym("");
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`${URLcomment}/${commentId}`);
      setComments(comments.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.log(error);
    }
  };
  const navigateToCreationPage = () => {
    navigate("/creations", { state: { artwork } });
  };

  if (!artwork) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  return (
    <>
      <div className="select">
        <h1>{artwork.title}</h1>
        {artwork.image_id ? (
          <img
            src={`${URLimg}${artwork.image_id}/full/843,/0/default.jpg`}
            alt={artwork.title}
            width="300"
          />
        ) : (
          <label>Image not available</label>
        )}
        <h3>Artist:</h3> <p> {artwork.artist_title || "Unknown"} </p>
        <h3>Place of Origin:</h3> <p> {artwork.place_of_origin || "Unknown"}</p>
        <h3>Description:</h3>
        <blockquote
          dangerouslySetInnerHTML={{
            __html: artwork.description || "No description available",
          }}
        />
        <h2>Comments</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              {comment.pseudonym}:{comment.text}
              <button onClick={() => handleDeleteComment(comment.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            value={pseudonym}
            onChange={(e) => setPseudonym(e.target.value)}
            placeholder="Your pseudonym"
            required
          />
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            required
          />
          <button type="submit">Submit</button>
        </form>
        <button onClick={navigateToCreationPage}>Create New Tile</button>
      </div>
    </>
  );
}

export default DetailPage;
