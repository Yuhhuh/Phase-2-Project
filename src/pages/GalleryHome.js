import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./css/styles.css";

export default function GalleryHome() {
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
    <div className="gallery">
      <h1>Gallery</h1>
      <p className="instruc"> Click the Images Below to Enlarge.</p>
      <div>
        <ImageList sx={{ width: 1000, height: 1000 }} variant="masonry" gap={100} rowHeight={150}>
          {imageFiles.map((pic) => (
            <ImageListItem key={pic.image}>
              <Link to={`images/${pic.id}`}>
                <img
                  width="300"
                  src={`images/${pic.image}?w=161&fit=crop&auto=format`}
                  srcSet={`images/${pic.image}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  alt={pic.title}
                  loading="lazy"
                />
              </Link>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}
