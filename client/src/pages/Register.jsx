import { StyledContent } from './styles';
import { postData } from '../utils/api';
import { URLS } from '../constants/urls';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const [formValues, setFormValues] = useState({});

	const navigate = useNavigate();

	return (
		<StyledContent>
			<p>REGISTER</p>
			<form
				onSubmit={event =>
					handleSubmit(event, formValues, setFormValues, navigate)
				}
			>
				<input
					type='text'
					name='username'
					placeholder='USERNAME'
					onChange={event => saveValues(event, formValues, setFormValues)}
				/>
				<input
					type='email'
					name='email'
					placeholder='EMAIL'
					onChange={event => saveValues(event, formValues, setFormValues)}
				/>
				<input
					type='text'
					name='name'
					placeholder='NAME'
					onChange={event => saveValues(event, formValues, setFormValues)}
				/>
				<input
					type='password'
					name='password'
					placeholder='PASSWORD'
					onChange={event => saveValues(event, formValues, setFormValues)}
				/>
				<div>
					<label htmlFor='men'>
						<input
							type='radio'
							name='gender'
							id='men'
							value='men'
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
					<img src={formValues.img} alt='' />
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

				<button type='submit' value='LOGIN'>
					REGISTER
				</button>
			</form>
		</StyledContent>
	);
};

const createUser = async (formValues, setFormValues, navigate) => {
	await postData(URLS.API_USERS, formValues);
	setFormValues({});
	navigate('/users');
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

const handleSubmit = (event, formValues, setFormValues, navigate) => {
	event.preventDefault();
	event.target.reset();
	createUser(formValues, setFormValues, navigate);
};

export default Register;
