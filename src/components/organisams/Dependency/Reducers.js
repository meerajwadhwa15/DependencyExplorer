import { GET_DEPENDENCY_SUCCESS, GET_PACKAGE_SUCCESS } from './Constants';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_DEPENDENCY_SUCCESS:
            return { ...state, dependencies: action.data };
        case GET_PACKAGE_SUCCESS:
            return { ...state, package: action.data };
        default:
            return state
    }
}