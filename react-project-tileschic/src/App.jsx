import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GalleryPage from "./Page/GalleryPage";
import FavPage from "./Page/FavPage";
import HomePage from "./Page/HomePage";
import ErrorPage from "./Page/ErrorPage";
import DetailPage from "./Page/DetailPage";
import CreationPage from "./Page/CreationPage";
import { useState, useEffect } from "react";

import "./css/App.css";
import "./css/Home.css";

function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/gallery"
            element={
              <GalleryPage favorites={favorites} setFavorites={setFavorites} />
            }
          />
          <Route path="/select" element={<DetailPage />} />
          <Route
            path="/fav-page"
            element={
              <FavPage favorites={favorites} setFavorites={setFavorites} />
            }
          />
          <Route path="/gallery/:id" element={<DetailPage />} />
          <Route path="/creation" element={<CreationPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
