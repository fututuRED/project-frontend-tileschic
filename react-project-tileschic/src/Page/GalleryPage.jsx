import React, { useState, useEffect } from "react";
import axios from "axios";
import { URLart, URLfavorites, URLimg } from "../consts";
import { Link } from "react-router-dom";
import "./../css/Gallery.css";

function GalleryPage() {
  const [artworks, setArtworks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const res = await axios.get(URLart);
        if (Array.isArray(res.data)) {
          setArtworks(res.data);
        } else {
          console.error("Artworks response is not an array:", res.data);
          setArtworks([]);
        }
      } catch (error) {
        console.log("Error fetching artworks:", error);
        setArtworks([]);
      }
    };

    const fetchFavorites = async () => {
      try {
        const res = await axios.get(URLfavorites);
        if (Array.isArray(res.data)) {
          setFavorites(res.data);
        } else {
          console.error("Favorites response is not an array:", res.data);
          setFavorites([]);
        }
      } catch (error) {
        console.log("Error fetching favorites:", error);
        setFavorites([]);
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
    return favorites.find((favorite) => favorite.artworkId === artworkId);
  };

  return (
    <>
      <div className="gal">
        <ul>
          {artworks.map((artwork) => {
            const isFav = isFavorite(artwork.id);
            return (
              <div key={artwork.id} className="gal-grid-container">
                {artwork.image_id ? (
                  <figure className="gal-grid-img">
                    <img
                      src={`${URLimg}${artwork.image_id}/full/843,/0/default.jpg`}
                      alt={artwork.title}
                    />
                    <figcaption>{artwork.title}</figcaption>
                  </figure>
                ) : (
                  <span>Image not available</span>
                )}
                <div className="gal-text-grid">
                  <p>
                    <button
                      className="fav-but"
                      disabled={isFetching}
                      onClick={() =>
                        isFav
                          ? removeFavorite(isFav.id)
                          : addFavorite(artwork.id)
                      }
                      data-tooltip={
                        isFavorite(artwork.id)
                          ? "Remove from Favorites"
                          : "Add to Favorites"
                      }
                    >
                      {isFavorite(artwork.id)
                        ? "In Favorites"
                        : "Add to Favorites"}
                    </button>
                  </p>
                  <span>Artist: {artwork.artist_title || "Unknown"}</span>
                  <span>
                    Place of Origin: {artwork.place_of_origin || "Unknown"}
                  </span>
                  <Link className="details" to={`/gallery/${artwork.id}`}>
                    Details
                  </Link>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default GalleryPage;
