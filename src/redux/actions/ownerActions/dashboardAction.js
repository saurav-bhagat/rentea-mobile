import axios from 'axios';
import { refreshToken } from '../authActions/authAction';
import { API_URL } from '@env';
import {
	GET_OWNER_DASHBOARD_FAILURE,
	GET_OWNER_DASHBOARD_REQUEST,
	GET_OWNER_DASHBOARD_SUCCESS,
} from './dashboardTypes';

const getDashboardRequest = () => {
	return {
		type: GET_OWNER_DASHBOARD_REQUEST,
	};
};

const getDashboardSuccess = (payload) => {
	return {
		type: GET_OWNER_DASHBOARD_SUCCESS,
		payload,
	};
};

const getDashboardFailure = (error) => {
	return {
		type: GET_OWNER_DASHBOARD_FAILURE,
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
			.then(async (response) => {
				dispatch(getDashboardSuccess(response.data));
			})
			.catch(async (error) => {
				if (
					error.response.status === 403 &&
					error.response.data.err === 'jwt expired'
				) {
					console.log('callilng refreshToken');
					// Wipes the cash if not given a way to call the failed request again.
					await dispatch(refreshToken());
					await dispatch(getOwnerDashboard());
				} else {
					console.log(
						'Error while getting dashboard: ',
						error.response.data
					);
					dispatch(getDashboardFailure(error.response.data));
				}
			});
	};
};
