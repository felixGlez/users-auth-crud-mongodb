import { useContext, useState } from 'react';
import {
	StyledButton,
	StyledContent,
	StyledSelect,
	StyledTitle,
	StyledUsersContainer
} from './styles';
import User from '../components/user/User';
import { ModalContext } from '../contexts/ModalContext';
import Register from './Register';
import Modal from '../components/modal/Modal';
import { AllUsersContext } from '../contexts/AllUsersContext';

const UsersList = () => {
	const { content, setContent } = useContext(ModalContext);
	const { users } = useContext(AllUsersContext);

	const [filter, setFilter] = useState(0);

	const filteredUsers = filterByActive(users, filter);

	if (users.length === 0) return <h2>No users</h2>;

	return (
		<StyledContent>
			<StyledTitle>USERS</StyledTitle>

			<StyledSelect onChange={event => setFilter(Number(event.target.value))}>
				<option value='0'>All Users</option>
				<option value='1'>Active</option>
				<option value='2'>Inactive</option>
			</StyledSelect>

			<StyledButton onClick={() => setContent(<Register />)}>
				CREATE USER
			</StyledButton>

			<StyledUsersContainer>
				{filteredUsers.map(user => (
					<User key={user._id} user={user} />
				))}
			</StyledUsersContainer>

			<Modal closeModal={() => setContent()}>{content}</Modal>
		</StyledContent>
	);
};

const filterByActive = (users, filter) => {
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

export default UsersList;
