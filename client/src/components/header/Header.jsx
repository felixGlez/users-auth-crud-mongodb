import { Link } from 'react-router-dom';
import {
	StyledHeader,
	StyledLoginContainer,
	StyledViewsContainer
} from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Header = () => {
	const { userData } = useContext(AuthContext);
	return (
		<StyledHeader>
			<Link to='/'>LOGO</Link>

			<StyledViewsContainer>
				<Link to='/users'>VIEW USERS</Link>
			</StyledViewsContainer>

			<StyledLoginContainer>
				{!userData && <Link to='/login'>LOGIN</Link>}
			</StyledLoginContainer>
		</StyledHeader>
	);
};

export default Header;
