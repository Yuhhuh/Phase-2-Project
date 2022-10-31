import "./css/ImageMain.css";
import React, { useState, useEffect, useRef } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

function ImageEdit() {
  const formElement = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();
  const [inputs, setInputs] = useState({});
  const [status, setStatus] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = Array.from(formElement.current.elements)
      .filter((input) => input.name)
      .reduce(
        (obj, input) => Object.assign(obj, { [input.name]: input.value }),
        {}
      );

    fetch(`http://localhost:3000/images/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .catch((err) => {
        setResult(err.toString());
        setStatus("error");
      });
  };

  useEffect(() => {
    fetch(`http://localhost:3000/images/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInputs(data);
        setIsLoaded(true);
      });
  }, [id]);

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <div className="App">
      <header className="App-header">
        <p class="heading">
          {status} Edit {result}
        </p>
        <form
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
          ref={formElement}
        >
          <input type="hidden" name="id" value={inputs.id} />
          <p class="heading">{inputs.imagetitle}</p>
          <label>
            Author name:
            <input
              type="text"
              name="author"
              value={inputs.author}
              onChange={handleChange}
            />
          </label>
          <p>
            <label>
              File name:
              <input
                type="text"
                name="image"
                value={inputs.image}
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Description:
              <input
                type="text"
                name="description"
                value={inputs.description}
                onChange={handleChange}
              />
            </label>
          </p>
          <label>
            Image Name:
            <input
              type="text"
              name="imagetitle"
              value={inputs.imagetitle}
              onChange={handleChange}
            />
          </label>
          <p>
            <input type="submit" />
          </p>
          <p>
          <Link to={`/images/${id}`}>Click Me to See Changes!</Link>
          </p>
        </form>
      </header>
    </div>
  );
}

export default ImageEdit;
