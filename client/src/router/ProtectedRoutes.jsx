import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedRoutes = () => {
	const { userData, loading } = useContext(AuthContext);

	if (loading) return <h1>Loading</h1>;
	if (!userData) return <Navigate to='/login' replace />; // El replace es para evitar que puedas clicar hacia atrás en el navegador

	return <Outlet />;
};

export default ProtectedRoutes;
