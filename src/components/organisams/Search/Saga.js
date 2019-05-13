import { takeLatest, all, call, put } from 'redux-saga/effects';
import { GET_SUGGESTIONS, GET_SUGGESTIONS_SUCCESS } from './Constants';
import fetch from './../../../libs/fetch';
import { API_DOMAIN } from './../../../config/constants';

function* getSuggestions({ searchString }) {
    const data = yield call(fetch, `${API_DOMAIN}/search/suggestions?q=${searchString}`);
    console.log(data);
    yield put({ type: GET_SUGGESTIONS_SUCCESS, data });
}

export function* suggestionSaga() {
    console.log('suggestionSaga');
    yield takeLatest(GET_SUGGESTIONS, getSuggestions);
}

export default function* rootSaga() {
    yield all([
        suggestionSaga(),
    ])
}