import axios from 'axios';
import { API_URL } from '@env';

export const verifyOtp = () => async (dispatch) => {
	const data = await axios.post(`${API_URL}`);
	dispatch({
		type: 'VERIFY_OTP',
		payload: data,
	});
};
