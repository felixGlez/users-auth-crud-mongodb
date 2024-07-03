const PORT = 3000;
const URL_BASE = `http://localhost:${PORT}/`;

const API_USERS = URL_BASE + 'api/users';
const AUTH_API = URL_BASE + 'api/auth';

const API_UPLOAD_IMG = API_USERS + '/upload';

const AUTH_LOGIN = AUTH_API + '/login';
const AUTH_REGISTER = AUTH_API + '/register';
const AUTH_VERIFY_TOKEN = AUTH_API + '/verifyToken';

export const URLS = {
	API_USERS,
	API_UPLOAD_IMG,
	AUTH_LOGIN,
	AUTH_REGISTER,
	AUTH_VERIFY_TOKEN
};
