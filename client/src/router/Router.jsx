import { Route, Routes } from 'react-router';
import Layout from '../layouts/Layout';
import HomePage from '../pages/HomePage';
import Register from '../pages/Register';
import UsersList from '../pages/UsersList';
import Login from '../pages/Login';
import UserDetails from '../pages/UserDetails';
import ProtectedRoutes from './ProtectedRoutes';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />

				{/* Hay páginas que ya no son necesarias por haber añadido las ventanas modales */}
				{/* <Route path='/register' element={<Register />} /> */}
				<Route path='/login' element={<Login />} />
				<Route path='/users' element={<UsersList />} />
				<Route path='/user-details/:id' element={<UserDetails />} />
			</Route>
			<Route element={<ProtectedRoutes />}>{/* Ruta protegida */}</Route>
		</Routes>
	);
};

export default Router;
