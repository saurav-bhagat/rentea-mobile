import axios from 'axios';
import { API_URL } from '@env';

export const sendOtp = () => async (dispatch) => {
	const data = await axios.post(`${API_URL}`);
	dispatch({
		type: 'SEND_OTP',
		payload: data,
	});
};
