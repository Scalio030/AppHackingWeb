import http from './http-common';
import { Buffer } from 'buffer';


const register = (data) => {
    return http.post('/guest/register', data);
};

const login = () => {
    const parseJwt = () => {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        const token = currentUser.token;
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return false;
        }
    };
    const encodedString = Buffer.from(email + ':' + password).toString('base64');
    const authvalue = 'Basic ' + encodedString;

    return http
        .put(
            'guest/login',
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

const logout = (id) => {
    localStorage.removeItem('user');
    delete http.defaults.headers['Authorization'];
    return http.put('/auth/logout'+id);
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
