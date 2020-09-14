import * as types from '../Constants/index' ;
var initialState = false ;

var reducer = (state = initialState , action)=>{
    if(action.type === types.IS_OPEN_FORM){
        return true 
    }
    if(action.type === types.IS_CLOSE_FORM){
        return false ;
    }
    return state ;
}
export default reducer ;