

import * as types from '../Constants/index'  ;
var initialState = {
    id : '' ,
    name : '' ,
    status : true
}
var reducer = (state = initialState , action)=>{
    if(action.type === types.EDITTING_FORM){
        const { task } = action.payload  ;
        state = {
            id : task.id ,
            name : task.name ,
            status : task.status
        }
        return {...state}
    }
    return state ;
}
export default reducer ;
