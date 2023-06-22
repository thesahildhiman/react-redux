import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IncNumber, decNumber } from "../actions";
const Counter = () => {
  const val = useSelector((state) => state.incDecReducer);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Counter: {val}</h2>
      <button onClick={() => dispatch(IncNumber())}>+</button>
      <button onClick={() => dispatch(decNumber())}>-</button>
    </>
  );
};

export default Counter;
