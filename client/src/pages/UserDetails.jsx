import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
	StyledContent,
	StyledUserCardImg,
	StyledUserCardText,
	StyledUserDetails,
	StyledUserStatus
} from './styles';
import { deleteData, getData } from '../utils/api/users.api';
import { URLS } from '../constants/urls';
import { useEffect, useState } from 'react';
import UpdateUser from '../components/update-user/UpdateUser';

const UserDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [userById, setUserById] = useState();
	const [isEditing, setIsEditing] = useState(false);

	useEffect(() => {
		getUser(id, setUserById);
	}, []);

	if (!userById) return <h1>Loading User...</h1>;

	return (
		<StyledContent>
			<StyledUserDetails>
				<StyledUserCardImg src={userById.img}></StyledUserCardImg>
				<StyledUserCardText>USER: @{userById.username}</StyledUserCardText>
				<StyledUserCardText>{userById.name}</StyledUserCardText>
				<StyledUserCardText>{userById.email}</StyledUserCardText>
				<StyledUserStatus $active={userById.active}>
					{userById.active ? 'Active' : 'Inactive'}
				</StyledUserStatus>
			</StyledUserDetails>
			<div>
				<button onClick={() => deleteUser(userById._id, navigate)}>
					Delete User
				</button>
				<button onClick={() => setIsEditing(!isEditing)}>
					{isEditing ? 'Close Edit' : 'Edit User'}
				</button>
			</div>

			{isEditing && (
				<div>
					<UpdateUser
						userById={userById}
						setUserById={setUserById}
						setIsEditing={setIsEditing}
					/>
				</div>
			)}
		</StyledContent>
	);
};

const deleteUser = async (id, navigate) => {
	try {
		await deleteData(`${URLS.API_USERS}/${id}`);
		navigate('/users');
	} catch (error) {
		console.log(error);
	}
};

const getUser = async (id, setUserById) => {
	try {
		const user = await getData(`${URLS.API_USERS}/${id}`);
		setUserById(user);
	} catch (error) {
		console.log(error);
	}
};

export default UserDetails;
