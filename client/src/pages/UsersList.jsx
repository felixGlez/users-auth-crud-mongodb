import { useContext, useEffect, useState } from 'react';
import {
	StyledContent,
	StyledTitle,
	StyledUserCard,
	StyledUserCardImg,
	StyledUserCardText,
	StyledUsersContainer
} from './styles';
import { URLS } from '../constants/urls';
import { UserContext } from '../contexts/UserContext';

const UsersList = () => {
	const { users } = useContext(UserContext);
	console.log(users);

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

export default UsersList;
