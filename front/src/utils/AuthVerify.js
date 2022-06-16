export function AuthVerify() {
    const parseJwt = token => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return false;
        }
    };
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        const decodedJwt = parseJwt(user.token);
        const exptime = decodedJwt.expiration * 1000;
        if (exptime > Date.now()) {
            return true;
        }
        if (exptime < Date.now()) {
            return false;
        }
    }
    return false;
}
