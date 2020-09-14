import * as types from "../Constants/index";

var initialState = {
  sortName: "name",
  sortStatus: 1,
};
var reducer = (state = initialState, action) => {
  if (action.type === types.SORT_TASK) {
    const { obj } = action.payload;
    state = {
      sortName: obj.name,
      sortStatus: obj.status,
    };
    return { ...state };
  }
  return state;
};

export default reducer;
