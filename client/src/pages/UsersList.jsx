import { useEffect, useState } from 'react';
import { getData } from '../utils/api';
import { StyledContent } from './styles';

const UsersList = () => {
	const [users, setUsers] = useState([])

	useEffect(()=> {
		getAllUsers(setUsers)
	},[])
	return (
		<StyledContent>
			<p>ALL USERS</p>
		</StyledContent>
	);
};

const getAllUsers = async(setUsers) => {
	try {
		const users = await getData('')
		setUsers(users)
	}catch (error) {
		console.log(error)
	}
}

export default UsersList;
