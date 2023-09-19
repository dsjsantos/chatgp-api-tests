import axios from 'axios';

const PORT = 5555;
const URL_API = `http://localhost:${PORT}/api/prompt`;

export const makeRequest = async message => {
    return new Promise(async resolve => {
        await axios.post(URL_API, message)
            .then(res => resolve(res.data || {}))
            .catch(err => resolve(err.response?.data || {}));
    });
}
