import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import GalleryHome from "./pages/GalleryHome";
import ImageMain from "./pages/ImageMain";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<GalleryHome />} />
          <Route path="/imageMain" element={<ImageMain />} />
        </Routes>
      </Router>
    </div>
  );
}

