import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { URLart, URLimg } from "../consts";
import axios from "axios";
import NavbarPage from "./NavbarPage";

function SelectedPiecePage() {
  const { id } = useParams(); // Fetch the id from the route parameters
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        // Replace :id with actual id fetched from useParams
        const res = await axios.get(`${URLart}/${id}`);
        setArtwork(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArtwork();
  }, [id]);

  if (!artwork) {
    return (
      <>
        <NavbarPage />
        <div>Loading...</div>
      </>
    );
  }

  return (
    <>
      <NavbarPage />
      <div>
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
        <p>Artist: {artwork.artist_title || "Unknown"}</p>
        <p>Place of Origin: {artwork.place_of_origin || "Unknown"}</p>
        <p>Description: {artwork.description || "No description available"}</p>
      </div>
    </>
  );
}

export default SelectedPiecePage;
