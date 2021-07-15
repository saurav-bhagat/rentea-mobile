import axios from 'axios';
import { API_URL } from '@env';

export const sendOtpSuccess = () => {
	return {
		type: 'SEND_OTP_SUCCESS',
		msg: 'Otp send successfully',
	};
};

export const sendOtpFail = () => {
	return {
		type: 'SEND_OTP_FAIL',
		msg: 'Error while sending otp',
	};
};

export const verifyOtpSuccess = (data) => {
	return {
		type: 'VERIFY_OTP_SUCCESS',
		payload: data,
		msg: 'otp verify successfully',
	};
};

export const verifyOtpFail = () => {
	return {
		type: 'VERIFY_OTP_FAIL',
		msg: 'Error while verifying otp',
	};
};

export const verifyOtp = () => {
	return (dispatch) => {
		axios
			.post(`${API_URL}`)
			.then((response) => {
				dispatch(verifyOtpSuccess(response.data));
			})
			.catch(() => {
				dispatch(verifyOtpFail());
			});
	};
};

export const sendOtp = () => {
	return (dispatch) => {
		axios
			.post(`${API_URL}`)
			.then((response) => {
				dispatch(sendOtpSuccess());
			})
			.catch(() => {
				dispatch(sendOtpFail());
			});
	};
};
