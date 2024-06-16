import { StyledHeader, StyledLoginContainer } from './styles';

const Header = () => {
	return (
		<StyledHeader>
			<p>LOGO</p>
			<StyledLoginContainer>
				<p>LOGIN</p>
				<p>CREATE USER</p>
			</StyledLoginContainer>
		</StyledHeader>
	);
};

export default Header;
