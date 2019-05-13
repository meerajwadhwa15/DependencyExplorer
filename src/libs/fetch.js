export default (url) => {
    return fetch(url)
        .then(response => {
            return response.json()
                .then((data) => data);
        })
        .catch(error => {
            return null;
        })
};