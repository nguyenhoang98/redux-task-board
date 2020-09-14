import * as types from '../Constants/index' ;
var initialState = {
  filterName: "",
  filterStatus: 0,
};

var reducer = (state = initialState, action) => {
  if(action.type === types.FILTER_TASK){
    const { obj } = action.payload ;
    obj.status = Number(obj.status) ;
    state = {
      filterName : obj.name ,
      filterStatus : obj.status
    }
   return {...state}
  }
  return state ;
};
export default reducer;
