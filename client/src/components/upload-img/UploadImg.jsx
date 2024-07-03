import { useRef, useState } from 'react';
import { StyledBox, StyledInputFile } from './styles';
import { URLS } from '../../constants/urls';
import { uploadData } from '../../utils/api/users.api';

const UploadImg = ({ formValues, setFormValues }) => {
	const [preview, setPreview] = useState();

	const inputRef = useRef(null);

	return (
		<>
			<StyledBox src={preview} onClick={() => inputRef.current.click()} />
			<StyledInputFile
				ref={inputRef}
				type='file'
				id='file-input'
				name='photo'
				accept='image/*'
				onChange={event =>
					uploadFile(event, setPreview, formValues, setFormValues)
				}
			/>
		</>
	);
};

const fileToDataURL = async file => {
	return new Promise((resolve, reject) => {
		const fileReader = new FileReader();

		fileReader.addEventListener('loadend', () => resolve(fileReader.result));

		fileReader.addEventListener('abort', () => reject(new Error('Aborted')));

		fileReader.addEventListener('error', () =>
			reject(new Error('Error reading file'))
		);

		fileReader.readAsDataURL(file);
	});
};

const uploadFile = async (event, setPreview, formValues, setFormValues) => {
	const file = event.target.files[0];
	console.log(file);

	if (!file) {
		console.log('NOT FILE');
		return;
	}

	const formData = new FormData();
	formData.append('photo', file);

	const dataUrl = await fileToDataURL(file);
	//console.log(dataUrl);

	setPreview(dataUrl);

	try {
		const response = await uploadData(URLS.API_UPLOAD_IMG, formData);

		const url = response.url;
		setFormValues({ ...formValues, img: url });
	} catch (error) {
		console.log('Error uploading image');
	}
};

export default UploadImg;
