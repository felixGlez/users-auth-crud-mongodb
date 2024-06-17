import { Route, Routes } from 'react-router';
import Layout from '../layouts/Layout';
import HomePage from '../pages/HomePage';
import Register from '../pages/Register';
import UsersList from '../pages/UsersList';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='/register' element={<Register />} />
				<Route path='/users' element={<UsersList />} />
			</Route>
		</Routes>
	);
};

export default Router;
