import { useState } from 'react';
import { URLS } from '../../constants/urls';
import { updateData } from '../../utils/api';
import { useNavigate } from 'react-router-dom';

const UpdateUser = ({ userById, setUserById, setIsEditing }) => {
	const [formValues, setFormValues] = useState({});

	const navigate = useNavigate();

	return (
		<form
			onSubmit={event =>
				handleSubmit(
					event,
					formValues,
					userById,
					setUserById,
					setIsEditing,
					navigate
				)
			}
		>
			<input
				type='text'
				name='username'
				id='username'
				placeholder='USERNAME'
				onChange={event =>
					setFormValues({ ...formValues, username: event.target.value })
				}
			/>
			<input
				type='text'
				name='name'
				id='name'
				placeholder='NAME'
				onChange={event =>
					setFormValues({ ...formValues, name: event.target.value })
				}
			/>
			<input
				type='email'
				name='email'
				id='email'
				placeholder='EMAIL'
				onChange={event =>
					setFormValues({ ...formValues, email: event.target.value })
				}
			/>
			<button type='submit'>Update User</button>
		</form>
	);
};

const updateUser = async (
	formValues,
	userById,
	setUserById,
	setIsEditing,
	navigate
) => {
	const { _id } = userById;
	const updatedUser = await updateData(`${URLS.API_USERS}/${_id}`, formValues);

	const user = updatedUser.filter(user => user._id === _id);
	setUserById(user);
	setIsEditing(false);
	navigate('/users');
};

const handleSubmit = (
	event,
	formValues,
	userById,
	setUserById,
	setIsEditing,
	navigate
) => {
	event.preventDefault();

	if (!formValues.username || !formValues.name || !formValues.email) return;

	updateUser(formValues, userById, setUserById, setIsEditing, navigate);
};

export default UpdateUser;