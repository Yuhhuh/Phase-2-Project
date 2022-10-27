import "./css/ImageMain.css";
import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function ImageMain() {
    //const [isLoaded, setIsLoaded] = useState(false);
    const [picTitle, setPicTitle] = useState([]);
    const [mainPic, setMainPic] = useState([]);
    const [authorName, setAuthorName] = useState([]);
    const [mainDesc, setMainDesc] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:3000/images/1')
        .then((response) => {
          console.log("hi");
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data.image);
          setMainPic(data.image);
          setPicTitle(data.imagetitle);
          setAuthorName(data.author);
          setMainDesc(data.description)
          //setIsLoaded(true);
        });
        //.then(imageNav)
  
    }, []);
  
  
  
    //if (!isLoaded) return <p>Loading...</p>
    //const movieHolder = document.getElementById("Video-Player")
  
    return (
    <div className="App">
      <button className="Edit-Button" type="button">Edit</button>
      <header className="Pic-Holder">
        <p className="Main-Title">{picTitle}</p>
        <img className="Main-Pic" src={mainPic} alt="main pic" width="1000"></img>
        <div className="Main-Author">Author: {authorName}</div>
        <p className="Main-Description">{mainDesc}</p>
        </header>
        </div>
    );
  }

  export default ImageMain;