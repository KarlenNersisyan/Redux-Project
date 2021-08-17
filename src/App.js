import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState();

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <h4>
        {" "}
        Code review{" "}
        <a
          href="https://github.com/KarlenNersisyan/Small-app-with-Redux-and-Redux-Toolkit"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        :
      </h4>
      <h1> With a normal React </h1>
      <input type="text" onChange={handleInput} />
      <p>{value}</p>
      <hr />
    </div>
  );
}

export default App;
