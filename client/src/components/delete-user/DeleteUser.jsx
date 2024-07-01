import { useContext } from 'react';
import { URLS } from '../../constants/urls';
import { logoutUser } from '../../utils/api/auth.api';
import { deleteData } from '../../utils/api/users.api';
import { AllUsersContext } from '../../contexts/AllUsersContext';
import { ModalContext } from '../../contexts/ModalContext';

const DeleteUser = ({ id, navigate, setUserData }) => {
	const { setUsers } = useContext(AllUsersContext);
	const { setContent } = useContext(ModalContext);

	return (
		<div>
			<p>Are you sure that you want to delete this user?</p>
			<div>
				<button
					onClick={() =>
						deleteUser(id, navigate, setUserData, setUsers, setContent)
					}
				>
					Yes
				</button>
				<button>No</button>
			</div>
		</div>
	);
};

const deleteUser = async (id, navigate, setUserData, setUsers, setContent) => {
	try {
		const updatedUsers = await deleteData(`${URLS.API_USERS}/${id}`);
		setUsers(updatedUsers);
		logoutUser(setUserData, navigate);
		setContent();
		navigate('/users');
	} catch (error) {
		console.log(error);
	}
};

export default DeleteUser;
