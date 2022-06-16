import http from './http-common';
import { Buffer } from 'buffer';
import { parseJwt } from '../components/app/_utils/methods';

const register = (firstname, lastname, email, password) => {
    return http.post('/users', {
        firstname,
        lastname,
        email,
        password
    });
};

const login = (email, password) => {
    const encodedString = Buffer.from(email + ':' + password).toString('base64');
    const authvalue = 'Basic ' + encodedString;

    return http
        .post(
            'users/login',
            {},
            {
                headers: {
                    Authorization: authvalue
                }
            }
        )
        .then(response => {
            if (response.data.token) {
                delete http.defaults.headers['Authorization'];
                localStorage.setItem('user', JSON.stringify(response.data));
                http.defaults.headers['Authorization'] = 'Bearer ' + response.data.token;

                const user = JSON.parse(localStorage.getItem('user'));
                if (user) {
                    const decodedJwt = parseJwt(user.token);
                    if (decodedJwt.organizations[0]) {
                        console.log(http.defaults.params['active_organization_id']);
                        console.log(decodedJwt.organizations[0]);
                        http.defaults.params['active_organization_id'] = decodedJwt.organizations[0].id;
                        console.log(http.defaults.params['active_organization_id']);
                    }
                }
            }
            return response.data;
        });
};

const logout = () => {
    console.log(http.defaults.params);
    delete http.defaults.params.data;
    console.log(http.defaults.params);
    localStorage.removeItem('user');
    delete http.defaults.headers['Authorization'];
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

export default {
    register,
    login,
    logout,
    getCurrentUser
};
