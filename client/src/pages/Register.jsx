import { useContext } from 'react';
import { StyledContent } from './styles';
import { UserContext } from '../contexts/UserContext';

const Register = () => {
	const { users, setUsers } = useContext(UserContext);

	return (
		<StyledContent>
			<p>REGISTER</p>
			<form onSubmit={event => handleSubmit(event)}>
				<input type='text' placeholder='USERNAME' />
				<input type='password' placeholder='PASSWORD' />
				<button type='send' value='LOGIN'>
					REGISTER
				</button>
			</form>
		</StyledContent>
	);
};

const handleSubmit = event => {
	event.preventDefault();
};

export default Register;
