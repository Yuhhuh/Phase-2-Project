import "./css/ImageMain.css";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function ImageAdd({setImageFiles}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [imageTitle, setImageTitle] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    const author = e.target.author.value;
    const imageTitle = e.target.imagetitle.value;
    const image = e.target.image.value;
    const description = e.target.description.value;

    try {
      let res = await fetch("http://localhost:3000/images", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          image: image,
          imagetitle: imageTitle,
          author: author,
          description: description,
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 201) {
        console.log(res);
        setImageTitle("");
        setDescription("");
        setImage("");
        setAuthor("");
        setImageFiles((prevstate) => [...prevstate, resJson])
        setMessage("Successfully created a new record");
      } else {
        setMessage("Error while creating new record");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="add">
          <div className="message">
            {message ? <p>{message}</p> : "Adding new image"}
          </div>
          <form onSubmit={handleSubmit}>
            <p className="authorinput">
              <label>
                Author name:
                <input
                  type="text"
                  name="author"
                  value={author}
                  placeholder="Author"
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </label>
            </p>

            <p className="imageinput">
              <label>
                Image name:
                <input
                  type="text"
                  name="image"
                  value={image}
                  placeholder="Image"
                  onChange={(e) => setImage(e.target.value)}
                />
              </label>
            </p>
            <p className="instructions">
              The Image Name Must Match The Names of The Files Within the
              public/images folder
            </p>
            <p>
              <label className="descinput">
                Description:
                <input
                  type="text"
                  name="description"
                  value={description}
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
            </p>
            <p className="inameinput">
              <label>
                Image Name:
                <input
                  type="text"
                  name="imagetitle"
                  value={imageTitle}
                  placeholder="Title"
                  onChange={(e) => setImageTitle(e.target.value)}
                />
              </label>
            </p>
            <p>
              <Button variant="contained" type="Submit">
                Submit
              </Button>
            </p>
            <p></p>
          </form>
        </div>
      </header>
    </div>
  );
}

export default ImageAdd;
