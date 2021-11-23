import axios from 'axios';
import { API_URL } from '@env';
import {
	GET_OWNER_DASHBOARD_FAILURE,
	GET_OWNER_DASHBOARD_REQUEST,
	GET_OWNER_DASHBOARD_SUCCESS,
} from './dashboardTypes';
import { getToken } from '../../../helpers/checkTokenExpiry';

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
		const token = await getToken();
		axios
			.post(`${API_URL}/owner/dashboard`, body, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			})
			.then(async (response) => {
				dispatch(getDashboardSuccess(response.data));
			})
			.catch(async (error) => {
				console.log('error while getting dashbaord');
				dispatch(getDashboardFailure(error.response.data));
			});
	};
};
