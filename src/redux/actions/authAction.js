import axios from 'axios';
import { API_URL } from '@env';
import { navigate } from '../../navigation/rootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
			.then(async (response) => {
				dispatch(verifyOtpSuccess(response.data.userDocument));
				navigate('OwnerUserDetails');

				await AsyncStorage.setItem(
					'accessToken',
					response.data.userDocument.accessToken
				);
				await AsyncStorage.setItem(
					'refreshToken',
					response.data.userDocument.refreshToken
				);
			})
			.catch(() => {
				dispatch(verifyOtpFail());
				alert('Error while verifying otp');
			});
	};
};

export const sendOtp = (phoneNumber) => {
	return (dispatch) => {
		axios
			.post(`${API_URL}/auth/send-otp`, { phoneNumber })
			.then((response) => {
				return response;
			})
			.then(() => {
				dispatch(sendOtpSuccess());
				navigate('OTP', phoneNumber);
			})
			.catch(() => {
				dispatch(sendOtpFail());
				alert('Error while sending otp');
			});
	};
};
