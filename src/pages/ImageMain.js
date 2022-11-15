import "./css/ImageMain.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ImageMain() {
  const [picData, setPicData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/images/${id}`)
      .then((response) => {
        console.log("hi");
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setPicData(data);
        console.log(data.image);
      });
  }, [id]);


  return (
    <div className="App">
      <header className="Pic-Holder">
        <p className="Main-Title">{picData.imagetitle}</p>
        <img
          className="Main-Pic"
          src={`${picData.image}`}
          alt="main pic"
          width="1000"
        />
        <div className="Main-Author">Author: {picData.author}</div>
        <p className="Main-Description">{picData.description}</p>
      </header>
    </div>
  );
}

export default ImageMain;
