export default {
    isUnique: (data, name) => {
        for (let i in data) {
            if (data[i].name === name) {
                return false;
            }
        }
        return true;
    }
};