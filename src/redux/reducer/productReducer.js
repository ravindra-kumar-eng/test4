import { ActionTypes } from "../constant/action-types";

const initialState={
    products:[],
    isLoading:false,
    error:null,
}

export const productReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCT:
            return{...state ,products:payload,isLoading:false,error:null};
        case ActionTypes.FETCH_DATA_FAILURE:
            return{...state ,error:payload,isLoading:false};
        case ActionTypes.FETCH_DATA_REQUEST:
            return{...state ,isLoading:true,error:null};
        default:
            return state;
    }
}
export const selectedProductReducer=(state={},{type,payload})=>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return{...state     ,...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return{};
        default:
            return state;
    }
}