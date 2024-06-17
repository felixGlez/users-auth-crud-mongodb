import { Route, Routes } from 'react-router';
import Layout from '../layouts/Layout';
import HomePage from '../pages/HomePage';
import Register from '../pages/Register';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='/register' element={<Register />} />
			</Route>
		</Routes>
	);
};

export default Router;
