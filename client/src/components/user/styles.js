import styled from 'styled-components';

const StyledUserCard = styled.div`
	width: 330px;
	display: flex;
	flex-direction: column;
	border: 1px solid #c5c5c5;
	border-radius: 10px;
	padding: 0.5rem 1.5rem;
	cursor: pointer;
	transition: 0.2s;

	&:hover {
		background-color: #cacacaca;
	}
`;

const StyledUserCardText = styled.p`
	font-size: 1.25rem;
`;

const StyledUserCardImg = styled.img`
	width: 50%;
	border-radius: 50%;
`;

export { StyledUserCard, StyledUserCardText, StyledUserCardImg };
