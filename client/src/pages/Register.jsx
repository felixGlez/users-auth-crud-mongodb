import { StyledContent } from './styles';

const Register = () => {
	return (
		<StyledContent>
			<p>REGISTER</p>
			<form>
				<input type='text' placeholder='USERNAME' />
				<input type='password' placeholder='PASSWORD' />
				<button type='send' value='LOGIN'>
					REGISTER
				</button>
			</form>
		</StyledContent>
	);
};

export default Register;
