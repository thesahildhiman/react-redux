const initialValue = 5;
const divMulReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "DIVIDE":
      return state / action.payload;
    case "MULTIPLY":
      return state * action.payload;
    default:
      return state;
  }
};

export default divMulReducer;
