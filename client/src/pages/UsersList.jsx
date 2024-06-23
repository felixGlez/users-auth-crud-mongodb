import { useEffect, useState } from 'react';
import { StyledContent, StyledTitle, StyledUsersContainer } from './styles';
import { URLS } from '../constants/urls';
import { getData } from '../utils/api';
import User from '../components/user/User';

const UsersList = () => {
	const [users, setUsers] = useState([]);
	const [filter, setFilter] = useState(0);

	const filteredUsers = filterUsers(users, filter);
	console.log(filteredUsers);

	useEffect(() => {
		fetchUsers(setUsers);
	}, []);

	if (users.length === 0) return <h2>No users</h2>;

	return (
		<StyledContent>
			<StyledTitle>USERS</StyledTitle>

			<select onChange={event => setFilter(Number(event.target.value))}>
				<option value='0'>All Users</option>
				<option value='1'>Active</option>
				<option value='2'>Inactive</option>
			</select>

			<StyledUsersContainer>
				{filteredUsers.map(user => (
					<User key={user._id} user={user} />
				))}
			</StyledUsersContainer>
		</StyledContent>
	);
};

const filterUsers = (users, filter) => {
	const filteredUsers = [...users];
	switch (filter) {
		case 0:
			return filteredUsers;
		case 1:
			return filteredUsers.filter(user => user.active);
		case 2:
			return filteredUsers.filter(user => !user.active);
	}
};

const fetchUsers = async setUsers => {
	try {
		const users = await getData(URLS.API_USERS);
		setUsers(users);
	} catch (error) {
		console.log(error);
	}
};

export default UsersList;
