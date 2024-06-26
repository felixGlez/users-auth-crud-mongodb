import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router/Router';
import AuthProvider from './providers/Auth.provider';

// https://randomuser.me/

const App = () => {
	return (
		<>
			<GlobalStyles />

			<BrowserRouter>
				<AuthProvider>
					<Router />
				</AuthProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
