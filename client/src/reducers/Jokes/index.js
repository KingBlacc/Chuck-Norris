import types from '../../actions/types';

export default (state = {}, action) => {
    switch(action.type){
        case types.GET_CATEGORIES:
            return {...state, loading: false, ...action.payload};
        case types.SELECT_CATEGORY:
            return {...state, selected_category: action.payload};
        case types.GET_JOKE:
            return {...state, random: action.payload, loading: false}
        case types.LOADING:
            return {...state, loading: action.payload};
        default: 
            return state;
    }
}