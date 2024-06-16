import { StyledContent } from './styles';

const Content = () => {
	return (
		<StyledContent>
			<p>LOGIN</p>
			<form>
				<input type='text' placeholder='USERNAME' />
				<input type='password' placeholder='PASSWORD' />
				<button type='send' value='LOGIN'>
					LOGIN
				</button>
			</form>
		</StyledContent>
	);
};

export default Content;
