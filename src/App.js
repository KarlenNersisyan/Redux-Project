// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addInputValue, decrement, increment } from "./redux/actions";

function App() {
  // const [value, setValue] = useState();

  // const handleInput = (event) => {
  //   setValue(event.target.value);
  // };

  //////  REACT-REDUX
  // const value = useSelector((state) => state.input.value);
  // const count = useSelector((state) => state.counts.count);
  // const dispatch = useDispatch();

  // const handleInput = (event) => {
  //   dispatch(addInputValue(event.target.value));
  // };
  // const handleIncrementBtn = () => {
  //   dispatch(increment());
  // };
  // const handleDecrementBtn = () => {
  //   dispatch(decrement());
  // };

  // REACT_REDUX  TOOLKIT
  const value = useSelector((state) => state.input.value);
  const dispatch = useDispatch();
  const handleInput = (event) => {
    dispatch(addInputValue(event.target.value));
  };

  return (
    <div className="App">
      <h1> Redux-Project </h1>
      <input type="text" onChange={handleInput} />
      <p className="paragraph">{value}</p>

      {/* <div>
        <h4>{count}</h4>
        <button onClick={handleIncrementBtn}>+</button>
        <button onClick={handleDecrementBtn}>-</button>
      </div> */}
    </div>
  );
}

export default App;
