import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import { URLS } from '../../constants/urls';
import { fetchData } from '../fetchData';

export const getData = async url => {
	const data = await fetchData(url, { method: METHODS.GET });
	return data;
};

export const postData = async (url, body = {}) => {
	const data = await fetchData(url, {
		method: METHODS.POST,
		body: JSON.stringify(body),
		headers: HEADERS
	});
	return data;
};

export const updateData = async (url, body = {}) => {
	const data = await fetchData(url, {
		method: METHODS.PATCH,
		body: JSON.stringify(body),
		headers: HEADERS
	});
	return data;
};

export const deleteData = async url => {
	const data = await fetchData(url, {
		method: METHODS.DELETE,
		headers: HEADERS
	});
	return data;
};

export const fetchUsers = async setUsers => {
	try {
		const users = await getData(URLS.API_USERS);
		setUsers(users);
	} catch (error) {
		console.log(error);
	}
};
