import CategoriesQuery from '../api/Queries/CategoriesQuery';
import JokeQuery from '../api/Queries/JokeQuery';
import types from './types';
import Errors from '../constants/Errors';

export const fetchCategories = () => async (dispatch) => {
    dispatch({type: types.LOADING, payload: true});
    await CategoriesQuery(response => {
        if(response){
            dispatch({type: types.GET_CATEGORIES, payload: response.data});
        }else {
            dispatch({type: types.ON_ERROR, payload: Errors.CATEGORY_ERROR});
        }
    })
}

export const fetchJoke = (category) => async (dispatch) => {
    dispatch({type: types.LOADING, payload: true});
    await JokeQuery({category}, response => {
        if(response){
            console.log('JOKE', response)
            dispatch({type: types.GET_JOKE, payload: response.data.random.value});
        }else{
            dispatch({type: types.ON_ERROR, payload: Errors.JOKE_ERROR});
        }
    })
}