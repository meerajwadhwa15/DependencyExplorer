import { GET_DEPENDENCY, GET_DEPENDENCY_SUCCESS, GET_PACKAGE_SUCCESS, CLAER_PACKAGES_DEPENDENCY } from './Constants';

export const getDependency = (searchString) => ({
    type: GET_DEPENDENCY,
    searchString
});

export const getDependencySuccess = (data) => ({
    type: GET_DEPENDENCY_SUCCESS,
    data
});

export const getPackageSuccess = (data) => ({
    type: GET_PACKAGE_SUCCESS,
    data
});

export const clearPackagesAndDependencies = () => ({
    type: CLAER_PACKAGES_DEPENDENCY,
});
