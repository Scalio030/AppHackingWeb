import axios from 'axios';

function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { Authorization: 'Bearer ' + user.token, 'Content-type': 'application/json' };
    } else {
        return { 'Content-type': 'application/json' };
    }
}

export default axios.create({
    baseURL: 'http://localhost:8080/',
    headers: authHeader(),
});
