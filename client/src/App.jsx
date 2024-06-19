import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router/Router';
import UserProvider from './providers/User.provider';

// https://randomuser.me/

const App = () => {
	return (
		<>
			<GlobalStyles />
			<UserProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</UserProvider>
		</>
	);
};

export default App;
