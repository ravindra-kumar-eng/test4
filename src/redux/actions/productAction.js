
import { ActionTypes } from "../constant/action-types"
export const setProduct=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCT,
        payload:products,

    };
};

export const fetchDataRequest=()=>{
    return{
        type:ActionTypes.FETCH_DATA_REQUEST,
    }
}
export const fetchDataFailure=(error)=>{
    return{
        type:ActionTypes.FETCH_DATA_FAILURE,
        payload:error,
    }
}

export const selectedProduct=(products)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:products,

    };
};
export const removeSelectedProduct=(products)=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
        

    };
};

