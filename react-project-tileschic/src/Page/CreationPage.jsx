import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import NavbarPage from "./NavbarPage";
import { URLimg, URLcrea } from "../consts"; // Ensure URLcrea is imported correctly
import "./../index.css";

const CreationPage = () => {
  const location = useLocation();
  const { artwork } = location.state || {};
  const [modifiedArtwork, setModifiedArtwork] = useState({
    ...artwork,
    color: artwork.color || {},
  });
  const [percentage, setPercentage] = useState(
    artwork.color?.percentage || 0.5
  );
  const [population, setPopulation] = useState(
    artwork.color?.population || 1000
  );

  const handlePercentageChange = (e) => {
    setPercentage(Number(e.target.value));
    setModifiedArtwork({
      ...modifiedArtwork,
      color: {
        ...modifiedArtwork.color,
        percentage: Number(e.target.value),
      },
    });
  };

  const handlePopulationChange = (e) => {
    setPopulation(Number(e.target.value));
    setModifiedArtwork({
      ...modifiedArtwork,
      color: {
        ...modifiedArtwork.color,
        population: Number(e.target.value),
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Modified artwork:", modifiedArtwork);

    try {
      const res = await axios.post(URLcrea, modifiedArtwork);
      console.log("Response:", res.data);
      // Navigate or provide user feedback as needed
    } catch (error) {
      console.error("Error submitting modified artwork:", error);
    }
  };

  if (!artwork) {
    return (
      <>
        <NavbarPage />
        <div>No artwork selected. Please go back and select an artwork.</div>
      </>
    );
  }

  return (
    <>
      <NavbarPage />
      <div className="creation-page">
        <h1>Modify Artwork: {artwork.title}</h1>
        {artwork.image_id && (
          <img
            src={`${URLimg}${artwork.image_id}/full/843,/0/default.jpg`}
            alt={artwork.title}
            width="300"
          />
        )}
        <div className="form-and-preview">
          <form onSubmit={handleSubmit}>
            <label>
              Change Percentage:
              <input
                type="number"
                value={percentage}
                onChange={handlePercentageChange}
                step="0.01"
                min="0"
                max="1"
              />
            </label>
            <br />
            <label>
              Change Population:
              <input
                type="number"
                value={population}
                onChange={handlePopulationChange}
                min="0"
              />
            </label>
            <br />
            <button type="submit">Save Changes</button>
          </form>

          <div className="preview">
            <h2>Preview:</h2>
            <p>
              <strong>Percentage:</strong> {percentage}
            </p>
            <p>
              <strong>Population:</strong> {population}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreationPage;
