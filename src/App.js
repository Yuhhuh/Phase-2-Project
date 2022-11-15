import "./styles.css";
import React, { useState, useEffect, useRef } from "react";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// PAGES
import ImageMain from "./pages/ImageMain";
import ImageAdd from "./pages/ImageAdd";
import AboutPage from "./pages/AboutPage";

import "./pages/css/styles.css";
import GalleryHome from "./pages/GalleryHome";

export default function App() {
  const [imageFiles, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/images/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setImages(data);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<GalleryHome />} />
          <Route path="images/:id" element={<ImageMain />} />
          <Route path="/:id" element={<ImageAdd />} />
          <Route path="/AboutPage" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}
