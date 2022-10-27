import React, { useState, useEffect } from "react";
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
      <div>
        <ImageList sx={{ width: 900, height: 500 }} variant="masonry" gap={10}>
          {imageFiles.map((item) => (
            <ImageListItem key={item.image}>
              <img
                src={`images/${item.image}?w=161&auto=format`}
                srcSet={`images/${item.image}?w=161&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}
