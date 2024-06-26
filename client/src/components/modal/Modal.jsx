import { createPortal } from 'react-dom';
import { StyledModal } from './styles';

const Modal = ({ children, closeModal }) => {
	if (!children) return;
	return createPortal(
		<StyledModal>
			{children}
			<button onClick={closeModal}>X</button>
		</StyledModal>,
		document.getElementById('modal')
	);
};

export default Modal;
