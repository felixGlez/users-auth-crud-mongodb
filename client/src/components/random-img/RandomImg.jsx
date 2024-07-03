const RandomImg = () => {
	return {
		/* <div>
					<label htmlFor='men'>
						<input
							type='radio'
							name='gender'
							id='men'
							value='men'
							required
							onChange={event => saveValues(event, formValues, setFormValues)}
						/>
						Man
					</label>
					<label htmlFor='women'>
						<input
							type='radio'
							name='gender'
							id='women'
							value='women'
							required
							onChange={event => saveValues(event, formValues, setFormValues)}
						/>
						Woman
					</label>
				</div>
				<button
					type='button'
					name='img'
					onClick={() => generateImg(formValues, setFormValues)}
					disabled={!formValues.gender}
				>
					GENERATE IMAGE
				</button>
				{formValues.img ? (
					<img src={formValues.img} />
				) : (
					<img src='https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg' />
				)} */
	};
};

const generateRandomNumber = () => {
	const number = Math.floor(Math.random() * 99);
	return number;
};

const generateImg = (formValues, setFormValues) => {
	const { gender } = formValues;
	const randomNumber = generateRandomNumber();
	const userImg = `https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`;
	setFormValues({ ...formValues, img: userImg });
};

export default RandomImg;
