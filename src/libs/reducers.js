import { combineReducers } from 'redux';
import searchReducers from './../components/organisams/Search/Reducers';
import dependencyReducers from './../components/organisams/Dependency/Reducers';
export default combineReducers({
    searchReducers,
    dependencyReducers,
});