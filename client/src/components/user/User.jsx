import { useNavigate } from 'react-router-dom';
import {
	StyledUserCard,
	StyledUserCardImg,
	StyledUserCardText
} from './styles';

const User = ({ user }) => {
	const navigate = useNavigate();

	return (
		<StyledUserCard onClick={() => navigate(`/user-details/${user._id}`)}>
			<StyledUserCardText>@{user.username}</StyledUserCardText>
			<StyledUserCardImg src={user.img}></StyledUserCardImg>
			<StyledUserCardText>{user.name}</StyledUserCardText>
			<StyledUserCardText>{user.email}</StyledUserCardText>
		</StyledUserCard>
	);
};

export default User;
