import React, { useState, useEffect } from "react";
import axios from "axios";

import { URLimg, URLfavorites } from "../consts";
import { Link } from "react-router-dom";
import NavbarPage from "./NavbarPage";

function FavPage() {
  const [favorites, setFavorites] = useState([]);

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

  if (!favorites.length) {
    return (
      <>
        <NavbarPage />
        <p>Loading favorites...</p>
      </>
    );
  }

  return (
    <>
      <NavbarPage />
      <div className="page-container">
        <h1 className="title">Favorite Artworks</h1>
        <div className="favorites-grid">
          {favorites.map((favorite) => (
            <div className="favorite-tile" key={favorite.id}>
              <div className="favorite-tile-image">
                <img
                  src={`${URLimg}${favorite.artwork.image_id}/full/843,/0/default.jpg`}
                  alt={favorite.artwork.title}
                />
              </div>
              <div className="favorite-tile-content">
                <h2>{favorite.artwork.title}</h2>
                <blockquote>
                  Artist: {favorite.artwork.artist_title || "Unknown"}
                  <br />
                  Place of Origin:{" "}
                  {favorite.artwork.place_of_origin || "Unknown"}
                </blockquote>
                <Link to={`/gallery/${favorite.artwork.id}`}>Details</Link>
                <button
                  className="remove"
                  onClick={() => handleDeleteFavorite(favorite.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FavPage;
