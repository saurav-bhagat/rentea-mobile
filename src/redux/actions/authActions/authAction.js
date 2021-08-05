import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { API_URL } from '@env';
import { navigate } from '../../../navigation/rootNavigation';

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
		msg: 'otp verified successfully',
		payload,
	};
};

export const verifyOtpFail = () => {
	return {
		type: 'VERIFY_OTP_FAIL',
		msg: 'Error while verifying otp',
	};
};

export const setUserInfo = (payload) => {
	return {
		type: 'SET_USER_INFO',
		payload,
	};
};

export const verifyOtp = (phoneNumber, code) => {
	return (dispatch) => {
		console.log(API_URL);
		axios
			.post(`${API_URL}/auth/authenticate`, { phoneNumber, code })
			.then(async (response) => {
				try {
					await AsyncStorage.setItem(
						'userInfo',
						JSON.stringify(response.data.userDocument)
					);
					console.log(response.data.userDocument);
					dispatch(verifyOtpSuccess(response.data.userDocument));
				} catch (error) {
					alert('Error in Login');
				}
			})
			.catch((err) => {
				dispatch(verifyOtpFail());
				console.log(err);
				alert('Error while verifying otp');
			});
	};
};

export const sendOtp = (phoneNumber) => {
	return (dispatch) => {
		console.log(API_URL);
		axios
			.post(`${API_URL}/auth/send-otp`, { phoneNumber })
			.then((response) => {
				return response;
			})
			.then(() => {
				dispatch(sendOtpSuccess());
				navigate('OTP', { phoneNumber });
			})
			.catch((err) => {
				dispatch(sendOtpFail());
				console.log(err);
				alert('Error while sending otp');
			});
	};
};
