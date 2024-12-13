import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { URLimg, URLcrea } from "../consts";
import "../css/App.css";

const CreationPage = () => {
  const location = useLocation();
  const { artwork } = location.state || {};
  const [title, setTitle] = useState("");
  const [colorfulness, setColorfulness] = useState(32.8709); // Default or computed value
  const [percentage, setPercentage] = useState(0.0008442986622087696); // Default or computed value
  const [population, setPopulation] = useState(6); // Default or computed value
  const [borderColor, setBorderColor] = useState("#000000"); // New state for border color
  const [lastCreatedArtwork, setLastCreatedArtwork] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleColorfulnessChange = (e) => {
    setColorfulness(Number(e.target.value));
  };

  const handlePercentageChange = (e) => {
    setPercentage(Number(e.target.value));
  };

  const handlePopulationChange = (e) => {
    setPopulation(Number(e.target.value));
  };

  const handleBorderColorChange = (e) => {
    setBorderColor(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCreation = {
      artworkId: artwork.id,
      title: title,
      colorfulness: colorfulness,
      color: {
        percentage: percentage,
        population: population,
      },
      borderColor: borderColor,
    };

    try {
      const postResponse = await axios.post(URLcrea, newCreation);
      console.log("POST Response:", postResponse.data);

      // Perform the GET request to fetch the newly created artwork with expanded data
      const getResponse = await axios.get(
        `${URLcrea}/${postResponse.data.id}?_expand=artwork`
      );
      console.log("GET Response:", getResponse.data);

      // Update the state with the new artwork data
      setLastCreatedArtwork(getResponse.data);

      setIsFormVisible(false);
    } catch (error) {
      console.error("Error submitting modified artwork:", error);
    }
  };

  if (!artwork) {
    return (
      <>
        <div>No artwork selected. Please go back and select an artwork.</div>
      </>
    );
  }

  return (
    <>
      <div className="creation-page">
        <h1>ArtWork in Progress...</h1>
        {artwork.image_id && (
          <img
            src={`${URLimg}${artwork.image_id}/full/843,/0/default.jpg`}
            alt={artwork.title}
            width="300"
          />
        )}

        <div className="favorites-grid">
          {/* Preview tile that reflects user interactions */}
          <div
            className="preview-tile"
            style={{
              borderColor: borderColor,
              borderStyle: "solid",
              borderWidth: "5px",
              padding: "10px",
            }}
          >
            <h2>{title || artwork.title}</h2>
            <p>{`Colorfulness: ${colorfulness}`}</p>
            <p>{`Percentage: ${percentage}`}</p>
            <p>{`Population: ${population}`}</p>
          </div>
          <div className="favorite-tile">
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <label>
                  Title:
                  <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    required
                  />
                </label>
                <br />
                <label>
                  Change Colorfulness:
                  <input
                    type="number"
                    value={colorfulness}
                    onChange={handleColorfulnessChange}
                    step="0.01"
                    min="0"
                  />
                </label>
                <br />
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
                <label>
                  Select Border Color:
                  <input
                    type="color"
                    value={borderColor}
                    onChange={handleBorderColorChange}
                  />
                </label>
                <br />
                <button type="submit">Save Changes</button>
              </form>
            </div>
          </div>

          {lastCreatedArtwork && (
            <div className="last-created-artwork">
              <h2>Last Created Artwork</h2>
              <p>
                <strong>Title:</strong> {lastCreatedArtwork.title}
              </p>
              <p>
                <strong>Colorfulness:</strong> {lastCreatedArtwork.colorfulness}
              </p>
              <p>
                <strong>Percentage:</strong>{" "}
                {lastCreatedArtwork.color.percentage}
              </p>
              <p>
                <strong>Population:</strong>{" "}
                {lastCreatedArtwork.color.population}
              </p>
              {lastCreatedArtwork.artwork.image_id && (
                <img
                  src={`${URLimg}${lastCreatedArtwork.artwork.image_id}/full/843,/0/default.jpg`}
                  alt={lastCreatedArtwork.title}
                  width="300"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CreationPage;
