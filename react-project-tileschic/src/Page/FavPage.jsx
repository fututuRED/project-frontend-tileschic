import React, { useState, useEffect } from "react";
import axios from "axios";
import { URLimg, URLfavorites } from "../consts";
import { Link } from "react-router-dom";

import "../css/Fav.css";
function FavPage() {
  const [favorites, setFavorites] = useState([]);
  const [visibleContent, setVisibleContent] = useState([]);

  async function fetchFavorites() {
    try {
      const response = await axios.get(`${URLfavorites}?_expand=artwork`);
      setFavorites(response.data);
    } catch (error) {
      console.log("Error fetching favorites:", error);
    }
  }

  useEffect(() => {
    fetchFavorites();
  }, []);

  async function handleDeleteFavorite(id) {
    try {
      await axios.delete(`${URLfavorites}/${id}`);
      setFavorites(favorites.filter((fav) => fav.id !== id));
    } catch (error) {
      console.log("Error deleting favorite:", error);
    }
  }

  const toggleContent = (id) => {
    setVisibleContent((prevVisibleContent) => ({
      ...prevVisibleContent,
      [id]: !prevVisibleContent[id],
    }));
  };
  const contentExists = favorites && favorites.length > 0;

  if (!favorites.length) {
    return (
      <>
        <a href="#" aria-busy="true">
          Loading the artworks, please wait…
        </a>
      </>
    );
  }

  return (
    <>
      <div
        className={`page-container ${
          contentExists ? "with-content" : "no-content"
        }`}
      >
        <h1 className="title">Favorite Artworks</h1>
        <div className="favorites-grid">
          {contentExists ? (
            favorites.map((favorite) => (
              <div className="favorite-tile" key={favorite.id}>
                <div
                  className="favorite-tile-image"
                  onClick={() => toggleContent(favorite.id)}
                >
                  <img
                    src={`${URLimg}${favorite.artwork.image_id}/full/843,/0/default.jpg`}
                    alt={favorite.artwork.title}
                  />
                </div>
                {visibleContent[favorite.id] && (
                  <div className="favorite-tile-content">
                    <blockquote>
                      {favorite.artwork.artist_title || "Unknown"}
                    </blockquote>
                    <Link to={`/gallery/${favorite.artwork.id}`}>Details</Link>
                    <button
                      className="remove"
                      onClick={() => handleDeleteFavorite(favorite.id)}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No artworks available. Add some favorites!</p>
          )}
        </div>
      </div>
    </>
  );
}

export default FavPage;
