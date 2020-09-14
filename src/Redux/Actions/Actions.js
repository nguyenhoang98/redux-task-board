
import * as types from '../Constants/index' ;

export const is_open_form = ()=>{
    return{
        type : types.IS_OPEN_FORM
    }
}
export const is_close_form = ()=>{
    return{
        type : types.IS_CLOSE_FORM
    }
}

export const add_task = (task)=>{
    return{
      type : types.ADD_TASK ,
      payload : {
          task
      }
    }
}
export const del_task = (task)=>{
    return{
        type : types.DEL_TASK ,
        payload : {
            task
        }
    }
}

export const update_status = (task)=>{
    return{
        type : types.UPDATE_STATUS ,
        payload : {
            task
        }
    }
}

export const editting_form = (task)=>{
    return {
        type : types.EDITTING_FORM ,
        payload : {
            task
        }
    }
}

export const search_task = (key)=>{
  return {
    type : types.SEARCH_TASK ,
    payload : {
      key
    }
  }
}


export const filter_task = (obj)=>{
  return {
    type : types.FILTER_TASK ,
    payload : {
      obj
    }
  }
}


export const sort_task = (obj)=>{
  return{
    type : types.SORT_TASK ,
    payload : {
      obj
    }
  }
}
