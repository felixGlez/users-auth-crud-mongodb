import Cookies from 'js-cookie';
import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import { URLS } from '../../constants/urls';

export const registerRequest = async body => {
	try {
		const response = await fetch(URLS.AUTH_REGISTER, {
			method: 'POST',
			headers: HEADERS,
			body: JSON.stringify(body),
			credentials: 'include'
		});

		if (!response.ok) {
			throw new Error(`Error al realizar la solicitud: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error en la solicitud de registro', error);
		throw error;
	}
};

export const loginRequest = async (body, setData) => {
	try {
		const response = await fetch(URLS.AUTH_LOGIN, {
			method: METHODS.POST,
			headers: HEADERS,
			body: JSON.stringify(body),
			credentials: 'include' // Sin esto la cookie no se envía
		});

		if (!response.ok) {
			throw new Error(`Error al realizar la solicitud: ${response.status}`);
		}

		const data = await response.json();
		setData(data);
	} catch (error) {
		console.error('Error en la solicitud de inicio de sesión', error);
		throw error;
	}
};

export const verifyTokenRequest = async () => {
	try {
		const response = await fetch(URLS.AUTH_VERIFY_TOKEN, {
			method: METHODS.GET,
			headers: HEADERS,
			credentials: 'include'
		});

		if (!response.ok) {
			throw new Error(`Error al realizar la solicitud: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error en la verificación del token', error);
		throw error;
	}
};

export const checkLogin = async (setUserData, setLoading) => {
	const cookies = Cookies.get();
	if (!cookies.token) {
		setLoading(false);
		return;
	}

	try {
		const response = await verifyTokenRequest(cookies.token);

		if (!response) {
			setLoading(false);
			return;
		}

		setUserData(response);
		setLoading(false);
	} catch (error) {
		setLoading(false);
	}
};

export const logoutUser = (setUserData, navigate) => {
	Cookies.remove('token');
	setUserData(null);
	navigate('/');
};
