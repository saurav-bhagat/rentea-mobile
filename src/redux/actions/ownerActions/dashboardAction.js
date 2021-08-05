import axios from 'axios';
import { API_URL } from '@env';

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
			.catch((error) => {
				console.log(
					'Error while getting dashboard: ',
					error.response.data
				);
				dispatch(getDashboardFailure(error.response.data));
			});
	};
};
