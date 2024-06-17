import { Routes, Route } from "react-router-dom";
import GalleryPage from "./Page/GalleryPage";
import FavPage from "./Page/FavPage";
import HomePage from "./Page/HomePage";
import NavbarPage from "./Page/NavbarPage";
import SelectedPiecePage from "./Page/SelectedPiecePage";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/gallery"
          element={
            <GalleryPage favorites={favorites} setFavorites={setFavorites} />
          }
        />
        <Route path="/select" element={<SelectedPiecePage />} />
        <Route
          path="/fav-page"
          element={
            <FavPage favorites={favorites} setFavorites={setFavorites} />
          }
        />
        <Route path="/gallery/:id" element={<SelectedPiecePage />} />
      </Routes>
    </>
  );
}

export default App;
