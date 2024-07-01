import { useEffect, useState } from 'react';
import { AllUsersContext } from '../contexts/AllUsersContext';
import { getData } from '../utils/api/users.api';
import { URLS } from '../constants/urls';

const AllUsersProvider = ({ children }) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetchUsers(setUsers);
	}, []);

	return (
		<AllUsersContext.Provider value={{ users, setUsers }}>
			{children}
		</AllUsersContext.Provider>
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

export default AllUsersProvider;
