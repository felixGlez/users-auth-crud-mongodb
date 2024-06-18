import { useEffect, useState } from 'react';
import { getData } from '../utils/api';
import {
	StyledContent,
	StyledTitle,
	StyledUserCard,
	StyledUserCardImg,
	StyledUserCardText,
	StyledUsersContainer
} from './styles';
import { URLS } from '../constants/urls';

const UsersList = () => {
	const [users, setUsers] = useState([]);
	console.log(users);

	useEffect(() => {
		fetchUsers(setUsers);
	}, []);

	return (
		<StyledContent>
			<StyledTitle>ALL USERS</StyledTitle>
			<StyledUsersContainer>
				{users.map(user => (
					<StyledUserCard key={user._id}>
						<StyledUserCardText>USER: {user.username}</StyledUserCardText>
						<StyledUserCardImg src={user.img}></StyledUserCardImg>
						<StyledUserCardText>{user.name}</StyledUserCardText>
						<StyledUserCardText>{user.email}</StyledUserCardText>
					</StyledUserCard>
				))}
			</StyledUsersContainer>
		</StyledContent>
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

export default UsersList;
