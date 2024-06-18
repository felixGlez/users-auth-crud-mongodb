import styled from 'styled-components';

const StyledContent = styled.div`
	width: 80%;
	padding: 1.5rem;
`;

const StyledTitle = styled.h2`
	font-size: 1.5rem;
	color: #6d3dd4;
`;

const StyledUsersContainer = styled.div`
	display: flex;
	gap: 2rem;
`;

const StyledUserCard = styled.div`
	width: 330px;
	display: flex;
	flex-direction: column;
	border: 1px solid #c5c5c5;
	border-radius: 10px;
	padding: 0.5rem 1.5rem;
`;

const StyledUserCardText = styled.p`
	font-size: 1.25rem;
`;

const StyledUserCardImg = styled.img`
	width: 50%;
	border-radius: 50%;
`;

export {
	StyledContent,
	StyledTitle,
	StyledUserCard,
	StyledUserCardText,
	StyledUsersContainer,
	StyledUserCardImg
};
