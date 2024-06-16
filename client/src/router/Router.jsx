import { Route, Routes } from 'react-router';
import Layout from '../layouts/Layout';
import Content from '../components/content/Content';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Content />} />
			</Route>
		</Routes>
	);
};

export default Router;
