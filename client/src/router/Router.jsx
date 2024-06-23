import { Route, Routes } from 'react-router';
import Layout from '../layouts/Layout';
import HomePage from '../pages/HomePage';
import Register from '../pages/Register';
import UsersList from '../pages/UsersList';
import Login from '../pages/Login';
import UserDetails from '../pages/UserDetails';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/users' element={<UsersList />} />
				<Route path='/user-details/:id' element={<UserDetails />} />
			</Route>
		</Routes>
	);
};

export default Router;
