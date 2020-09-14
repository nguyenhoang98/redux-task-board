import * as types from "../Constants/index";
const s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};
const generatorId = () => {
  return s4() + s4() + "-" + s4() + s4() + "-" + s4();
};
var data = JSON.parse(localStorage.getItem("task"));
var initialState = data ? data : [];
var reducer = (state = initialState, action) => {
  if (action.type === types.ADD_TASK) {
    const { task } = action.payload;
    if (task.name !== "") {
      if (task.id === "") {
        task.id = generatorId();
        state.push(task);
        localStorage.setItem("task", JSON.stringify(state));
        return [...state];
      } else {
        let index = state.findIndex((list) => {
          return list.id === task.id;
        });
        state = [
          ...state.slice(0, index),
          {
            ...task,
          },
          ...state.slice(index + 1),
        ];
        localStorage.setItem("task", JSON.stringify(state));
        return [...state];
      }
    }
  }
  if (action.type === types.DEL_TASK) {
    const { task } = action.payload;
    let index = state.findIndex((list) => {
      return list.id === task.id;
    });
    state.splice(index, 1);
    localStorage.setItem("task", JSON.stringify(state));
    return [...state];
  }
  if (action.type === types.UPDATE_STATUS) {
    const { task } = action.payload;
    let index = state.findIndex((list) => {
      return list.id === task.id;
    });
    state = [
      ...state.slice(0, index),
      {
        ...task,
        status: !task.status,
      },
      ...state.slice(index + 1),
    ];
    localStorage.setItem("task", JSON.stringify(state));
    return [...state];
  }
  return state;
};
export default reducer;
