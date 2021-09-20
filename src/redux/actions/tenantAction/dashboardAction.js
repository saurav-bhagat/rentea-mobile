import axios from 'axios';
import { API_URL } from '@env';
import {
	GET_TENANT_DASHBOARD_FAILURE,
	GET_TENANT_DASHBOARD_REQUEST,
	GET_TENANT_DASHBOARD_SUCCESS,
} from './dashboardType';

const getDashboardRequest = () => {
	return {
		type: GET_TENANT_DASHBOARD_REQUEST,
	};
};

const getDashboardSuccess = (payload) => {
	return {
		type: GET_TENANT_DASHBOARD_SUCCESS,
		payload,
	};
};

const getDashboardFailure = (error) => {
	return {
		type: GET_TENANT_DASHBOARD_FAILURE,
		payload: error,
	};
};

export const getTenantDashboard = () => {
	return async (dispatch, getState) => {
		dispatch(getDashboardRequest());
		const { auth } = getState();
		const body = {
			userId: auth.userInfo.userDetails._id,
		};
		axios
			.post(`${API_URL}/tenant/dashboard`, body, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${auth.userInfo.accessToken}`,
				},
			})
			.then(async (response) => {
				console.log('data fetch successfully in tenant dashboard');
				dispatch(getDashboardSuccess(response.data.tenantDetails));
			})
			.catch(async (error) => {
				console.log('error in tenant dash action', error);
				alert('error while getting tenant dashboard');
				dispatch(getDashboardFailure(error));
			});
	};
};
