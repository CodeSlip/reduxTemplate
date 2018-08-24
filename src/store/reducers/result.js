import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const resultReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter((result => result.id !== action.resultID));
            return {
                ...state,
                results: updatedArray
            }
        }
    return state;    
}


export default resultReducer;