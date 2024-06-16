import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router/Router';

// https://randomuser.me/

const App = () => {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</>
	);
};

export default App;
