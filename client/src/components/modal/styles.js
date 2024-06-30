import styled from 'styled-components';

const StyledModal = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	transform: translate(-50%, -50%);
	width: 80vw;
	height: 80vh;
	background-color: lightblue;
	color: lightcoral;
`;

export { StyledModal };
