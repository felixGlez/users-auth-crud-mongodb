import { useEffect, useState } from 'react';
import { AllUsersContext } from '../contexts/AllUsersContext';
import { fetchUsers } from '../utils/api/users.api';

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

export default AllUsersProvider;
