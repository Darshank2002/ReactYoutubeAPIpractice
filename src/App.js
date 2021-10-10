import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [state, setState] = useState();
  const api = axios.create({
    baseURL: `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=cuEtnrL9-H0&format=json`
  });

  const handleClick = () => {
    api.get("/").then((res) => {
      console.log(res.data);
      setState(res.data);
    });
  };
  const handleReset = () => {
    setState(null);
  };

  return (
    <div className="App">
      {state && (
        <img
          src={state.thumbnail_url}
          height={state.thumbnail_height}
          width={state.thumbnail_width}
        />
      )}
      <h1>{state && state.title}</h1>
      <h2>
        {state && (
          <a href={state.author_url} target="">
            {state.author_name}
          </a>
        )}
      </h2>
      {!state && <button onClick={handleClick}>Click to see Data</button>}
      {state && <button onClick={handleReset}>Reset</button>}
    </div>
  );
}
