import axios from 'axios';
import { API_URL } from '@env';

const createReceipt = (transactionResponseData, authState) => {
	const { TXNAMOUNT: amount, PAYMENTMODE: mode } = transactionResponseData;
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const rentDueDate = new Date(authState.userInfo.userDetails.rentDueDate);

	const body = {
		amount,
		month: monthNames[rentDueDate.getMonth()],
		mode,
		userId: authState.userInfo.userDetails._id,
	};

	axios
		.post(`${API_URL}/receipt/create-receipt`, body, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${authState.userInfo.accessToken}`,
			},
		})
		.then(async (response) => {
			console.log('create receipt response is ', response.data.msg);
		})
		.catch(async (error) => {
			console.log('error while creating receipt', error);
		});
};

export default createReceipt;
