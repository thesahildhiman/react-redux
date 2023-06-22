export const IncNumber = () => {
  return {
    type: "INCREMENT",
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};

export const divideNumber = (num) => {
  return {
    type: "DIVIDE",
    payload: num,
  };
};

export const multiplyNumber = (num) => {
  return {
    type: "MULTIPLY",
    payload: num,
  };
};
