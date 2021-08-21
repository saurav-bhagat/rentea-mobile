import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { API_URL } from '@env';
import { navigate } from '../../../navigation/rootNavigation';
import {
	SEND_OTP_FAIL,
	SEND_OTP_REQUEST,
	SEND_OTP_SUCCESS,
	SET_USER_INFO,
	VERIFY_OTP_FAIL,
	VERIFY_OTP_REQUEST,
	VERIFY_OTP_SUCCESS,
	USER_LOGOUT,
	SET_FIRST_LOGIN_FALSE,
} from './authTypes';

export const sentOtpRequest = () => {
	return {
		type: SEND_OTP_REQUEST,
	};
};

export const sendOtpSuccess = () => {
	return {
		type: SEND_OTP_SUCCESS,
		msg: 'Otp send successfully',
	};
};

export const sendOtpFail = () => {
	return {
		type: SEND_OTP_FAIL,
		msg: 'Error while sending otp',
	};
};

export const verifyOtpRequest = () => {
	return {
		type: VERIFY_OTP_REQUEST,
	};
};

export const verifyOtpSuccess = (payload) => {
	return {
		type: VERIFY_OTP_SUCCESS,
		msg: 'otp verified successfully',
		payload,
	};
};

export const verifyOtpFail = () => {
	return {
		type: VERIFY_OTP_FAIL,
		msg: 'Error while verifying otp',
	};
};

export const setUserInfo = (payload) => {
	return {
		type: SET_USER_INFO,
		payload,
	};
};

export const setUserLogout = () => {
	return {
		type: USER_LOGOUT,
	};
};

export const setFirstLoginFalse = () => {
	return {
		type: SET_FIRST_LOGIN_FALSE,
	};
};

export const userLogout = () => {
	return (dispatch) => {
		try {
			AsyncStorage.removeItem('userInfo');
			dispatch(setUserLogout());
		} catch (err) {
			console.log('Error while logout');
		}
	};
};

export const verifyOtp = (phoneNumber, code) => {
	return (dispatch) => {
		console.log(API_URL);
		dispatch(verifyOtpRequest());
		axios
			.post(`${API_URL}/auth/authenticate`, { phoneNumber, code })
			.then(async (response) => {
				try {
					await AsyncStorage.setItem(
						'userInfo',
						JSON.stringify(response.data.userDocument)
					);
					console.log(
						'response data doc is ',
						response.data.userDocument
					);
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
		dispatch(sentOtpRequest());
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
