import axios from 'axios';
import { API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { refreshAccessToken } from '../../../helpers/refreshToken';
import { verifyOtpSuccess } from '../authActions/authAction';

const getDashboardRequest = () => {
	return {
		type: 'GET_OWNER_DASHBOARD_REQUEST',
	};
};

const getDashboardSuccess = (payload) => {
	return {
		type: 'GET_OWNER_DASHBOARD_SUCCESS',
		payload,
	};
};

const getDashboardFailure = (error) => {
	return {
		type: 'GET_OWNER_DASHBOARD_FAILURE',
		payload: error,
	};
};

export const getOwnerDashboard = () => {
	return async (dispatch, getState) => {
		dispatch(getDashboardRequest());
		const { auth } = getState();
		const body = {
			ownerId: auth.userInfo.userDetails.ownerId,
		};
		axios
			.post(`${API_URL}/owner/dashboard`, body, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${auth.userInfo.accessToken}`,
				},
			})
			.then((response) => {
				console.log('Owner dashboard: ', response.data);
				dispatch(getDashboardSuccess(response.data));
			})
			.catch(async (error) => {
				console.log(
					'Error while getting dashboard: ',
					error.response.data
				);
				if (error.response.data.err === 'jwt expired') {
					try {
						const updateduserInfo = await refreshAccessToken(
							auth.userInfo.refreshToken
						);
						console.log(updateduserInfo);
						// await AsyncStorage.clear();
						// await AsyncStorage.setItem(
						// 	'userInfo',
						// 	JSON.stringify(updateduserInfo)
						// );
						// dispatch(verifyOtpSuccess(updateduserInfo));
						// dispatch(getOwnerDashboard());
					} catch (err) {
						console.log('Error while refreshing token: ', err);
					}
				}
				dispatch(getDashboardFailure(error.response.data));
			});
	};
};
