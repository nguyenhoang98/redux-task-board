
import * as types from '../Constants/index' ;

var initalState = '' ;

var reducer = (state = initalState , action)=>{
  if(action.type === types.SEARCH_TASK){
    const { key } = action.payload ;
    state = key ;
    return state ;
  }
  return state ;
}
export default reducer ;
