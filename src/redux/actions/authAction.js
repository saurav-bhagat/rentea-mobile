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

export const verifyOtpSuccess = (payload) => {
	return {
		type: 'VERIFY_OTP_SUCCESS',
		msg: 'otp verify successfully',
		payload,
	};
};

export const verifyOtpFail = () => {
	return {
		type: 'VERIFY_OTP_FAIL',
		msg: 'Error while verifying otp',
	};
};

export const verifyOtp = (phoneNumber, code) => {
	return (dispatch) => {
		axios
			.post(`${API_URL}/auth/authenticate`, { phoneNumber, code })
			.then((response) =>
				dispatch(verifyOtpSuccess(response.data.userDocument))
			)
			.catch(() => dispatch(verifyOtpFail()));
	};
};

export const sendOtp = (phoneNumber) => {
	return (dispatch) => {
		axios
			.post(`${API_URL}/auth/send-otp`, { phoneNumber })
			.then((response) => response)
			.then(() => dispatch(sendOtpSuccess()))
			.catch(() => dispatch(sendOtpFail()));
	};
};
