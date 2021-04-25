import * as types from '../types'

const initalState={
    statics:[],
    static:{},
    loading:false,
    error:null

}

export const staticReducer=(state=initalState,action)=>{
switch(action.type){
    case types.GET_STATICPOSTS:
        return{
            ...state,
            statics:action.payload,
            loading:false,
            error:null
        }
        default:
            return state
}



}