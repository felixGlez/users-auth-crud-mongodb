import { useState } from 'react';
import { ModalContext } from '../contexts/ModalContext';

const ModalProvider = ({ children }) => {
	const [content, setContent] = useState();

	return (
		<ModalContext.Provider value={{ content, setContent }}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
