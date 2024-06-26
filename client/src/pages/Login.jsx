import { useContext, useEffect, useState } from 'react';
import { StyledContent } from './styles';
import { loginRequest } from '../utils/api/auth.api';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const { userData, setUserData, loading } = useContext(AuthContext);
	const [loginData, setLoginData] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		if (!userData) return;
		navigate('/');
	}, [userData]);

	if (loading) return;

	return (
		<StyledContent>
			<p>LOGIN</p>
			<form
				onSubmit={event =>
					handleSubmit(event, loginData, setUserData, navigate)
				}
			>
				<input
					type='text'
					placeholder='EMAIL'
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

const handleSubmit = async (event, loginData, setUserData, navigate) => {
	event.preventDefault();

	try {
		await loginRequest(loginData, setUserData);
		navigate('/users');
	} catch (error) {
		console.error('Error de inicio de sesión', error);
		// Puedes manejar el error aquí, por ejemplo, mostrar un mensaje de error
	}
};

export default Login;
