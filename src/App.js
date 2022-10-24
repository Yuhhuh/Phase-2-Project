//import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  //const [isLoaded, setIsLoaded] = useState(false);
  const [mainVid, setMainVid] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/videos/")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log("hi");
        console.log(data);
        setMainVid(data.video);
        //setIsLoaded(true);
      });
  }, []);

  /*function getVideos() {
    fetch("http://localhost:3000/videos/")
    .then((response) => response.json)
    .then((data) => {
      console.log("Hi")
      console.log(data)
      //setVideo(data.video)
    })
  }*/

  //if (!isLoaded) return <p>Loading...</p>

  return (
    <div className="App">
      <header className="App-header">
        <video width="320" height="240" controls>
          <source src={mainVid} type="video/mp4" />
        </video>
        <p></p>
      </header>
    </div>
  );
}

export default App;
