import { StyledContent } from './styles';
import { postData } from '../utils/api/users.api';
import { URLS } from '../constants/urls';
import { useContext, useState } from 'react';
import { AllUsersContext } from '../contexts/AllUsersContext';
import { ModalContext } from '../contexts/ModalContext';

const Register = () => {
	const { setUsers } = useContext(AllUsersContext);
	const { setContent } = useContext(ModalContext);

	const [formValues, setFormValues] = useState({});

	return (
		<StyledContent>
			<p>REGISTER</p>
			<form
				onSubmit={event =>
					handleSubmit(event, formValues, setFormValues, setUsers, setContent)
				}
			>
				<input
					type='text'
					name='username'
					placeholder='USERNAME'
					required
					onChange={event => saveValues(event, formValues, setFormValues)}
				/>
				<input
					type='email'
					name='email'
					placeholder='EMAIL'
					required
					onChange={event => saveValues(event, formValues, setFormValues)}
				/>
				<input
					type='text'
					name='name'
					placeholder='NAME'
					required
					onChange={event => saveValues(event, formValues, setFormValues)}
				/>
				<input
					type='password'
					name='password'
					placeholder='PASSWORD'
					required
					onChange={event => saveValues(event, formValues, setFormValues)}
				/>
				<div>
					<label htmlFor='men'>
						<input
							type='radio'
							name='gender'
							id='men'
							value='men'
							required
							onChange={event => saveValues(event, formValues, setFormValues)}
						/>
						Man
					</label>
					<label htmlFor='women'>
						<input
							type='radio'
							name='gender'
							id='women'
							value='women'
							required
							onChange={event => saveValues(event, formValues, setFormValues)}
						/>
						Woman
					</label>
				</div>
				<button
					type='button'
					name='img'
					onClick={() => generateImg(formValues, setFormValues)}
					disabled={!formValues.gender}
				>
					GENERATE IMAGE
				</button>
				{formValues.img ? (
					<img src={formValues.img} />
				) : (
					<img src='https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg' />
				)}

				<div>
					<input
						onChange={event =>
							setFormValues({ ...formValues, active: event.target.checked })
						}
						type='checkbox'
						name='active'
						id='status'
					/>
					<label htmlFor='status'>Active</label>
				</div>

				<button type='submit'>REGISTER</button>
			</form>
		</StyledContent>
	);
};

const createUser = async (formValues, setFormValues, setUsers, setContent) => {
	try {
		const allUsers = await postData(URLS.AUTH_REGISTER, formValues);
		setFormValues({});
		setUsers(allUsers);
		setContent();
	} catch (error) {
		console.log(error);
	}
};

const generateRandomNumber = () => {
	const number = Math.floor(Math.random() * 99);
	return number;
};

const generateImg = (formValues, setFormValues) => {
	const { gender } = formValues;
	const randomNumber = generateRandomNumber();
	const userImg = `https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`;
	setFormValues({ ...formValues, img: userImg });
};

const saveValues = (event, formValues, setFormValues) => {
	const { name, value } = event.target;
	setFormValues({ ...formValues, [name]: value });
};

const handleSubmit = (
	event,
	formValues,
	setFormValues,
	setUsers,
	setContent
) => {
	event.preventDefault();
	event.target.reset();
	createUser(formValues, setFormValues, setUsers, setContent);
};

export default Register;
