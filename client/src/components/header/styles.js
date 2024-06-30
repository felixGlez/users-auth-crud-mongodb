import styled from 'styled-components';

const StyledHeader = styled.header`
	width: 20%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 1.5rem;
	background-color: #d9d9d9;
	border-radius: 0px 20px 20px 0px;
`;

const StyledViewsContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledLoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export { StyledHeader, StyledViewsContainer, StyledLoginContainer };
