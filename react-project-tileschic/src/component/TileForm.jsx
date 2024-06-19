import React, { useState, useEffect } from "react";

const TileForm = ({
  onSubmit,
  defaultColor1 = "#ffffff",
  defaultColor2 = "#000000",
}) => {
  const [title, setTitle] = useState("");
  const [color1, setColor1] = useState(defaultColor1);
  const [color2, setColor2] = useState(defaultColor2);

  useEffect(() => {
    setColor1(defaultColor1);
    setColor2(defaultColor2);
  }, [defaultColor1, defaultColor2]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create the tile data structure to submit
    const tileData = {
      title,
      colors: [color1, color2],
    };
    // Pass data to the parent component's onSubmit function
    onSubmit(tileData);
    // Reset form fields
    setTitle("");
    setColor1(defaultColor1);
    setColor2(defaultColor2);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Color 1:
          <input
            type="color"
            value={color1}
            onChange={(e) => setColor1(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Color 2:
          <input
            type="color"
            value={color2}
            onChange={(e) => setColor2(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Create Tile</button>
    </form>
  );
};

export default TileForm;
