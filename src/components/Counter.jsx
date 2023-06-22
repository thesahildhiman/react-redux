import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IncNumber, decNumber } from "../actions";
import { divideNumber, multiplyNumber } from "../actions";
const Counter = () => {
  const countVal = useSelector((state) => state.incDecReducer);
  const calcVal = useSelector((state) => state.divMulReducer);
  const dispatch = useDispatch();
  return (
    <>
      <div style={{ height: "50vh", backgroundColor: "pink" }}>
        <h2 style={{ margin: "0" }}>Counter Inc/Dec: {countVal}</h2>
        <button onClick={() => dispatch(IncNumber())}>+</button>
        <button onClick={() => dispatch(decNumber())}>-</button>
      </div>
      <div style={{ height: "50vh", backgroundColor: "green" }}>
        <h2 style={{ margin: "0" }}>Counter Calc:</h2>
        <button onClick={() => dispatch(divideNumber(5))}>/</button>
        <input type="text" value={calcVal} />
        <button onClick={() => dispatch(multiplyNumber(5))}>*</button>
      </div>
    </>
  );
};

export default Counter;
