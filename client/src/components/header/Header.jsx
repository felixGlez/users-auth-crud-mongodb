import { Link } from 'react-router-dom';
import {
	StyledHeader,
	StyledLoginContainer,
	StyledViewsContainer
} from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Header = () => {
	const { userData, loading } = useContext(AuthContext);
	return (
		<StyledHeader>
			<Link to='/'>LOGO</Link>
			{/* {userData && (
				<StyledViewsContainer>
					<Link to='/users'>VIEW USERS</Link>
				</StyledViewsContainer>
			)} */}
			<StyledViewsContainer>
				<Link to='/users'>VIEW USERS</Link>
			</StyledViewsContainer>

			<StyledLoginContainer>
				{!userData && <Link to='/login'>LOGIN</Link>}

				<Link to='/register'>CREATE USER</Link>
			</StyledLoginContainer>
		</StyledHeader>
	);
};

export default Header;
