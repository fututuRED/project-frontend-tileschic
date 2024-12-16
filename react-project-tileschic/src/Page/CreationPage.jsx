import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { URLimg } from "../consts";
import "../css/App.css";

function CreationPage() {
  const location = useLocation();
  const { artwork } = location.state || {};
  const [borderColor, setBorderColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [borderStyle, setBorderStyle] = useState("solid");
  const [pageBackgroundColor, setPageBackgroundColor] = useState("#f0f0f0"); // Default page background color

  if (!artwork) {
    return (
      <div>No artwork selected. Please go back and select an artwork.</div>
    );
  }

  return (
    <div
      className="creation-page"
      style={{ backgroundColor: pageBackgroundColor, minHeight: "100vh" }}
    >
      <form>
        <label>
          Page Background Color:
          <input
            type="color"
            value={pageBackgroundColor}
            onChange={(e) => setPageBackgroundColor(e.target.value)}
          />
        </label>
        <br />
        <label>
          Artwork Background Color:
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </label>
        <br />
        <label>
          Border Color:
          <input
            type="color"
            value={borderColor}
            onChange={(e) => setBorderColor(e.target.value)}
          />
        </label>
        <br />
        <label>
          Border Style:
          <select
            value={borderStyle}
            onChange={(e) => setBorderStyle(e.target.value)}
          >
            <option value="solid">Solid</option>
            <option value="dashed">Dashed</option>
            <option value="dotted">Dotted</option>
            <option value="double">Double</option>
          </select>
        </label>
      </form>

      <div className="artwork-display">
        {Array(14)
          .fill()
          .map((_, index) => (
            <div
              className="single-artwork"
              key={index}
              style={{
                borderColor: borderColor,
                borderStyle: borderStyle,
                backgroundColor: backgroundColor,
                borderWidth: "1rem",
                margin: "0.9rem",
                padding: "0.3rem",
              }}
            >
              <img
                className="artwork-tile"
                src={`${URLimg}${artwork.image_id}/full/843,/0/default.jpg`}
                alt={artwork.title}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default CreationPage;
