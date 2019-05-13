import { GET_SUGGESTIONS_SUCCESS } from './Constants';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_SUGGESTIONS_SUCCESS:
            return { suggestions: action.data };
        default:
            return state
    }
}