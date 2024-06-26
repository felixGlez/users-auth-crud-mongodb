import { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { checkLogin } from '../utils/api/auth.api';

const AuthProvider = ({ children }) => {
	const [userData, setUserData] = useState(null); //Si hay usuario logueado
	console.log(userData);
	const [loading, setLoading] = useState(true); //Para saber si está en proceso mi verificación de usuario

	useEffect(() => {
		checkLogin(setUserData, setLoading); // Para mantener la sesión iniciada si ya tengo un token
	}, []);

	return (
		<AuthContext.Provider value={{ userData, setUserData, loading }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
