import React, { useState, useEffect } from "react";

const FetchAbstractPaintings = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5005/artworks");
        const data = await res.json();
        setArtworks(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {artworks.map((artwork) => (
        <div key={artwork.id}>
          <h2>{artwork.title}</h2>
          {artwork.image_id ? (
            <img
              src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
              alt={artwork.title}
              width="100"
            />
          ) : (
            <p>Image not available</p>
          )}
          <p>Artist: {artwork.artist_title || "Unknown"}</p>
          <p>Place of Origin: {artwork.place_of_origin || "Unknown"}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchAbstractPaintings;
