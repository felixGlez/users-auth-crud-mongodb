import { Link } from 'react-router-dom';
import {
	StyledHeader,
	StyledLoginContainer,
	StyledViewsContainer
} from './styles';

const Header = () => {
	return (
		<StyledHeader>
			<Link to='/'>LOGO</Link>
			<StyledViewsContainer>
				<Link to='/users'>VIEW USERS</Link>
			</StyledViewsContainer>
			<StyledLoginContainer>
				<Link to='/login'>LOGIN</Link>
				<Link to='/register'>CREATE USER</Link>
			</StyledLoginContainer>
		</StyledHeader>
	);
};

export default Header;
