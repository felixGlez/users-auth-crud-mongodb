import { useEffect, useState } from 'react';
import { getData } from '../utils/api';
import { URLS } from '../constants/urls';
import { UserContext } from '../contexts/UserContext';

const UserProvider = ({ children }) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetchUsers(setUsers);
	}, []);

	return (
		<UserContext.Provider value={{ users, setUsers }}>
			{children}
		</UserContext.Provider>
	);
};

const fetchUsers = async setUsers => {
	try {
		const users = await getData(URLS.API_USERS);
		setUsers(users);
	} catch (error) {
		console.log(error);
	}
};

export default UserProvider;
