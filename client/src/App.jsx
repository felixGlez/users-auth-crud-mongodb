import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router/Router';
import AuthProvider from './providers/Auth.provider';
import ModalProvider from './providers/Modal.provider';
import AllUsersProvider from './providers/AllUsers.provider';

// https://randomuser.me/

const App = () => {
	return (
		<>
			<GlobalStyles />

			<BrowserRouter>
				<AuthProvider>
					<ModalProvider>
						<AllUsersProvider>
							<Router />
						</AllUsersProvider>
					</ModalProvider>
				</AuthProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
