import { GET_DEPENDENCY_SUCCESS, GET_PACKAGE_SUCCESS, CLAER_PACKAGES_DEPENDENCY } from './Constants';

export default (state = {}, action) => {
    switch (action.type) {
        case CLAER_PACKAGES_DEPENDENCY:
            return { ...state, dependencies: null, package: null  };
        case GET_DEPENDENCY_SUCCESS:
            return { ...state, dependencies: action.data };
        case GET_PACKAGE_SUCCESS:
            return { ...state, package: action.data };
        default:
            return {...state}
    }
}
