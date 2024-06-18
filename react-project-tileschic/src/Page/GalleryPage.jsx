import React, { useState, useEffect } from "react";
import axios from "axios";
import { URLart, URLfavorites, URLimg } from "../consts";
import { Link } from "react-router-dom";
import NavbarPage from "./NavbarPage";

function GalleryPage() {
  const [artworks, setArtworks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const res = await axios.get(URLart);
        setArtworks(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchFavorites = async () => {
      try {
        const res = await axios.get(`${URLfavorites}`);
        setFavorites(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArtworks();
    fetchFavorites();
  }, []);

  const addFavorite = async (artworkId) => {
    if (isFetching) return;
    try {
      setIsFetching(true);
      const res = await axios.post(URLfavorites, { artworkId });
      setFavorites([...favorites, res.data]);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavorite = async (id) => {
    if (isFetching) return;
    try {
      setIsFetching(true);
      await axios.delete(`${URLfavorites}/${id}`);
      setFavorites(favorites.filter((favorite) => favorite.id !== id));
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  const isFavorite = (artworkId) => {
    /**
     * {id: number, artworkId: number}
     */
    return favorites.find((favorite) => favorite.artworkId === artworkId);
  };

  return (
    <>
      <NavbarPage />

      <ul>
        {artworks.map((artwork) => {
          const isFav = isFavorite(artwork.id);
          return (
            <div key={artwork.id}>
              <h2>{artwork.title}</h2>
              {artwork.image_id ? (
                <img
                  src={`${URLimg}${artwork.image_id}/full/843,/0/default.jpg`}
                  alt={artwork.title}
                  width="100"
                />
              ) : (
                <label>Image not available</label>
              )}
              <button
                disabled={isFetching}
                onClick={() =>
                  isFav ? removeFavorite(isFav.id) : addFavorite(artwork.id)
                }
              >
                {isFavorite(artwork.id) ? "In Favorites" : "Add to Favorites"}
              </button>
              <label>Artist: {artwork.artist_title || "Unknown"}</label>
              <label>
                Place of Origin: {artwork.place_of_origin || "Unknown"}
              </label>
              <Link to={`/gallery/${artwork.id}`}>{artwork.title}</Link>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default GalleryPage;
