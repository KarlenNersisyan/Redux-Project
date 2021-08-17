import { useDispatch, useSelector } from "react-redux";
import { addInputValue, decrement, increment } from "../../redux/actions";

function Redux() {
  const value = useSelector((state) => state.input.value);
  const count = useSelector((state) => state.counts.count);
  const dispatch = useDispatch();

  const handleInput = (event) => {
    dispatch(addInputValue(event.target.value));
  };
  const handleIncrementBtn = () => {
    dispatch(increment());
  };
  const handleDecrementBtn = () => {
    dispatch(decrement());
  };

  return (
    <div className="App">
      <h1> React Redux </h1>
      <input type="text" onChange={handleInput} />
      <p>{value}</p>

      <div>
        <h4>{count}</h4>
        <button onClick={handleIncrementBtn}>+</button>
        <button onClick={handleDecrementBtn}>-</button>
      </div>
      <hr />
    </div>
  );
}

export default Redux;
