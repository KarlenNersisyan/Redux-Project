import { useDispatch, useSelector } from "react-redux";
import { addInputValue } from "../../redux-toolkit/inputSlice";

function ReduxToolkit() {
  const value = useSelector((state) => state.input.value);
  const dispatch = useDispatch();
  const handleInput = (event) => {
    dispatch(addInputValue(event.target.value));
  };

  return (
    <div className="App">
      <h1> Redux Toolkit </h1>
      <input type="text" onChange={handleInput} />
      <p>{value}</p>
    </div>
  );
}

export default ReduxToolkit;
