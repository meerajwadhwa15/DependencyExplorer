import { takeLatest, all, call, put } from "redux-saga/effects";
import { GET_DEPENDENCY } from "./Constants";
import {
  getDependencySuccess,
  getPackageSuccess,
  clearPackagesAndDependencies
} from "./Actions";
import fetch from "./../../../libs/fetch";
import { API_DOMAIN } from "./../../../config/constants";
import Utils from "./../../../utils/utils";

async function fetchData(dependencies) {
  let PromisesList = [];
  for (let i in dependencies) {
    let url = `${API_DOMAIN}/${i}${!i.includes("@") ? "/latest" : ""}`;
    PromisesList.push(
      new Promise((resolve, reject) => {
        fetch(url)
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      })
    );
  }

  const results = await Promise.all(PromisesList);
  return results;
}

async function fetchDependenciesAndReturnData(dependencies, dependency = []) {
  const results = await fetchData(dependencies);

  const data = await formatData(results, dependency);
  dependency = [...dependency, ...data];
  if (data) {
    for (let i in data) {
      const result = data[i];
      if (result.dependencies && Object.keys(result.dependencies).length) {
        await fetchDependenciesAndReturnData(result.dependencies);
      }
    }
  }
  return dependency;
}

async function formatData(results, dependency = []) {
  results.forEach(async result => {
    if (Utils.isUnique(dependency, result.name)) {
      dependency.push({
        name: result.name,
        homepage: result.repository.url || result.homepage,
        description: result.description
      });
    }
  });

  return dependency;
}

function* getDependencies({ searchString }) {
  yield put(clearPackagesAndDependencies());
  const data = yield call(fetch, `${API_DOMAIN}/${searchString}/latest`);
  let dependency = [];
  yield put(getPackageSuccess(data));
  if (data) {
    dependency = yield fetchDependenciesAndReturnData(data.dependencies);
  }

  yield put(getDependencySuccess(dependency));
}

export function* dependencySaga() {
  yield takeLatest(GET_DEPENDENCY, getDependencies);
}

export default function* rootSaga() {
  yield all([dependencySaga()]);
}
