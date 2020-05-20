import { takeLatest, all, call, put } from 'redux-saga/effects';
import { GET_DEPENDENCY } from './Constants';
import { getDependencySuccess, getPackageSuccess, clearPackagesAndDependencies } from './Actions';
import fetch from './../../../libs/fetch';
import { API_DOMAIN } from './../../../config/constants';
import Utils from './../../../utils/utils';

function* getDependencies({ searchString }) {
    yield put(clearPackagesAndDependencies());
    const data = yield call(fetch, `${API_DOMAIN}/${searchString}/latest`);
    const dependency = [];
    yield put(getPackageSuccess(data));
    if (data) {
        for (let i in data.dependencies) {
            let url = `${API_DOMAIN}/${i}${!i.includes('@') ? '/latest' : ''}`;
            let dependencyData = yield call(fetch, url);
            if (dependencyData) {
                if (Utils.isUnique(dependency, i)) {
                    dependency.push({ name: i, homepage: dependencyData.repository.url || dependencyData.homepage, description: dependencyData.description });
                }
                for (let j in dependencyData.dependencies) {
                    if (Utils.isUnique(dependency, j)) {
                        url = `${API_DOMAIN}/${i}${!j.includes('@') ? '/latest' : ''}`;
                        let dependencyDataSecond = yield call(fetch, url);
                        dependency.push({ name: j, homepage: dependencyDataSecond.repository.url || dependencyDataSecond.homepage, description: dependencyDataSecond.description });
                    }
                }
            }
        }
    }

    yield put(getDependencySuccess(dependency));
}

export function* dependencySaga() {
    yield takeLatest(GET_DEPENDENCY, getDependencies);
}

export default function* rootSaga() {
    yield all([
        dependencySaga(),
    ])
}
