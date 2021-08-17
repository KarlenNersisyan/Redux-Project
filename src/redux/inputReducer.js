const initialState = {
  value: "",
};

export function inputReducer(state = initialState, action) {
  switch (action.type) {
    case "addInputValue":
      return {
        value: action.payload,
      };
    default:
      return state;
  }
}
