import axios from 'axios';
import { API_URL } from '@env';
import { navigate } from '../../../navigation/rootNavigation';
import {
	ADD_EXPO_PUSH_TOKEN_REQUEST,
	ADD_EXPO_PUSH_TOKEN_FAIL,
	ADD_EXPO_PUSH_TOKEN_SUCCESS,
} from '../authActions/authTypes';
import { getToken } from '../../../helpers/checkTokenExpiry';

export const addUserDetailRequest = () => {
	return {
		type: 'ADD_USER_DETAIL_REQUEST',
	};
};

export const addUserDetailSuccess = (payload) => {
	return {
		type: 'ADD_USER_DETAIL_SUCCESS',
		payload,
	};
};

export const addUserDetailFail = (error) => {
	return {
		type: 'ADD_USER_DETAIL_FAIL',
		error,
	};
};

export const addExpoPushTokenRequest = () => {
	return { type: ADD_EXPO_PUSH_TOKEN_REQUEST };
};

export const addExpoPushTokenSuccess = (payload) => {
	return {
		type: ADD_EXPO_PUSH_TOKEN_SUCCESS,
		payload,
	};
};

export const addExpoPushTokenFail = () => {
	return {
		type: ADD_EXPO_PUSH_TOKEN_FAIL,
	};
};

export const addUserDetail = (userData) => {
	return async (dispatch, getState) => {
		dispatch(addUserDetailRequest());
		const { auth } = getState();
		const body = {
			_id: auth.userInfo.userDetails.ownerId,
			name: `${userData.fName} ${userData.lName}`,
			email: userData.email,
			expoPushToken: userData.expoPushToken,
		};
		const token = await getToken();
		axios
			.put(`${API_URL}/auth/update-basic-info`, body, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			})
			.then(async (response) => {
				console.log('response after updating user details', response);
				dispatch(addUserDetailSuccess(response.data.updatedUserInfo));
				navigate('OwnerBankDetailForm');
			})
			.catch((err) => {
				dispatch(addUserDetailFail(err.message));
				console.log(err.message);
				console.log(err.response.data);
				alert('Error while add user info');
			});
	};
};

export const addExpoPushToken = (token) => {
	return async (dispatch, getState) => {
		dispatch(addExpoPushTokenRequest());
		const { auth } = getState();

		const body = {
			_id: auth.userInfo.userDetails.ownerId,
			expoPushToken: token,
		};
		const accessToken = await getToken();
		axios
			.put(`${API_URL}/auth/update-basic-info`, body, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
			})
			.then(async (response) => {
				console.log('Expo token addded successfully');
				dispatch(
					addExpoPushTokenSuccess(
						response.data.updatedUserInfo.expoPushToken
					)
				);
			})
			.catch((err) => {
				console.log('Notifications will not be sent');
				console.log(err);
				dispatch(addExpoPushTokenFail());
			});
	};
};
