import { GET_SUGGESTIONS, GET_SUGGESTIONS_SUCCESS } from './Constants';

export const getSuggestions = (searchString) => ({
    type: GET_SUGGESTIONS,
    searchString
});

export const getSuggestionsSuccess = (data) => ({
    type: GET_SUGGESTIONS_SUCCESS,
    data
});