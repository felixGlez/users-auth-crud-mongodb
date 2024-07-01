import { useNavigate, useParams } from 'react-router-dom';
import {
	StyledButton,
	StyledContent,
	StyledUserCardImg,
	StyledUserCardText,
	StyledUserDetails,
	StyledUserStatus
} from './styles';
import { getData } from '../utils/api/users.api';
import { URLS } from '../constants/urls';
import { useContext, useEffect, useState } from 'react';
import UpdateUser from '../components/update-user/UpdateUser';
import { AuthContext } from '../contexts/AuthContext';
import { logoutUser } from '../utils/api/auth.api';
import { ModalContext } from '../contexts/ModalContext';
import Modal from '../components/modal/Modal';
import DeleteUser from '../components/delete-user/DeleteUser';

const UserDetails = () => {
	const { userData, setUserData } = useContext(AuthContext);
	const { content, setContent } = useContext(ModalContext);

	const { id } = useParams();
	const navigate = useNavigate();

	const [userById, setUserById] = useState();

	useEffect(() => {
		getUser(id, setUserById);
	}, []);

	if (!userById) return <h1>Loading User...</h1>;

	return (
		<StyledContent>
			<StyledButton onClick={() => navigate('/users')}>Go Back</StyledButton>
			<StyledUserDetails>
				<StyledUserCardImg src={userById.img}></StyledUserCardImg>
				<StyledUserCardText>USER: @{userById.username}</StyledUserCardText>
				<StyledUserCardText>{userById.name}</StyledUserCardText>
				<StyledUserCardText>{userById.email}</StyledUserCardText>
				<StyledUserStatus $active={userById.active}>
					{userById.active ? 'Active' : 'Inactive'}
				</StyledUserStatus>
			</StyledUserDetails>
			{userData?.id === userById._id && (
				<div>
					<button
						onClick={() =>
							setContent(
								<DeleteUser
									id={id}
									navigate={navigate}
									setUserData={setUserData}
								/>
							)
						}
					>
						Delete User
					</button>
					<button
						onClick={() =>
							setContent(
								<UpdateUser
									userById={userById}
									setUserById={setUserById}
									setContent={setContent}
								/>
							)
						}
					>
						Edit User
					</button>
					<button onClick={() => logoutUser(setUserData, navigate)}>
						Logout
					</button>
				</div>
			)}
			<Modal closeModal={() => setContent()}>{content}</Modal>
			{/* {isEditing && (
				<div>
					<UpdateUser
						userById={userById}
						setUserById={setUserById}
						setIsEditing={setIsEditing}
					/>
				</div>
			)} */}
		</StyledContent>
	);
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
