import axios from 'axios';
import { format } from 'date-fns';
import { API_URL } from '@env';

const createReceipt = (transactionResponseData, authState) => {
	const { TXNAMOUNT: amount, PAYMENTMODE: mode } = transactionResponseData;

	const month = format(
		new Date(authState.userInfo.userDetails.rentDueDate),
		'MMMM'
	);

	const body = {
		amount,
		month,
		mode,
		userId: authState.userInfo.userDetails._id,
		rentDueDate: authState.userInfo.userDetails.rentDueDate,
	};

	axios
		.post(`${API_URL}/receipt/create-receipt`, body, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${authState.userInfo.accessToken}`,
			},
		})
		.then((response) => {
			console.log('create receipt response is ', response.data.msg);
		})
		.catch((error) => {
			console.log('error while creating receipt', error.response.data);
		});
};

export default createReceipt;
