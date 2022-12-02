import "./styles.css";
import React, { useState, useEffect, useRef } from "react";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom/client";

// PAGES
import ImageMain from "./pages/ImageMain";
import ImageAdd from "./pages/ImageAdd";
import AboutPage from "./pages/AboutPage";

import "./pages/css/styles.css";
import GalleryHome from "./pages/GalleryHome";

export default function App() {
  const [imageFiles, setImageFiles] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/images");
    return response.json();
  };

  useEffect(() => {
    fetchData().then((response) => {
      setImageFiles(response);
    });

    return () => {};
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<GalleryHome imageFiles={imageFiles} />}
          />
          <Route path="images/:id" element={<ImageMain />} />
          <Route path="images/new" element={<ImageAdd setImageFiles={setImageFiles}/>} />
          <Route path="/AboutPage" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

/*export default function App(id) {
  const [imageFiles, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/images/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setImages(data);
      });
  }, [id]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<GalleryHome />} />
          <Route path="images/:id" element={<ImageMain />} />
          <Route path="images/new" element={<ImageAdd />} />
          <Route path="/AboutPage" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}*/
