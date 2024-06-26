import { useContext, useState } from 'react';
import { StyledContent } from './styles';
import { loginRequest } from '../utils/api/auth.api';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
	const { userData, setUserData, loading } = useContext(AuthContext);
	const [loginData, setLoginData] = useState({});

	return (
		<StyledContent>
			<p>LOGIN</p>
			<form onSubmit={event => handleSubmit(event, loginData, setUserData)}>
				<input
					type='text'
					placeholder='USERNAME'
					onChange={event =>
						setLoginData({ ...loginData, email: event.target.value })
					}
				/>
				<input
					type='password'
					placeholder='PASSWORD'
					onChange={event =>
						setLoginData({ ...loginData, password: event.target.value })
					}
				/>
				<button>LOGIN</button>
			</form>
		</StyledContent>
	);
};

const handleSubmit = async (event, loginData, setUserData) => {
	event.preventDefault();

	try {
		await loginRequest(loginData, setUserData);
	} catch (error) {
		console.error('Error de inicio de sesión', error);
		// Puedes manejar el error aquí, por ejemplo, mostrar un mensaje de error
	}
};

export default Login;
