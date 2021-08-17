import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState();

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <h1> Redux-Project </h1>
      <input type="text" onChange={handleInput} />
      <p className="paragraph">{value}</p>
    </div>
  );
}

export default App;
