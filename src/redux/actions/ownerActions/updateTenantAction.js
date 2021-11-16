import {
	UPDATE_TENANT_REQUEST,
	UPDATE_TENANT_SUCCESS,
	UPDATE_TENANT_FAIL,
} from './updateTenantActionTypes';

import axios from 'axios';
import { API_URL } from '@env';
import { navigate } from '../../../navigation/rootNavigation';
import { getOwnerDashboard } from './dashboardAction';

export const updateTenantRequest = () => {
	return {
		type: UPDATE_TENANT_REQUEST,
	};
};

export const updateTenantSuccess = () => {
	return {
		type: UPDATE_TENANT_SUCCESS,
		msg: 'tenant details updated successfully',
	};
};

export const updateTenantFail = () => {
	return {
		type: UPDATE_TENANT_FAIL,
		msg: 'failed to update tenant details',
	};
};

export const updateTenantDetails = (tenantDetails, roomId, buildingId) => {
	return (dispatch, getState) => {
		dispatch(updateTenantRequest());
		const state = getState();

		const body = { ...tenantDetails };

		axios
			.put(`${API_URL}/owner/update-tenant-info`, body, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${state.auth.userInfo.accessToken}`,
				},
			})
			.then(async (response) => {
				dispatch(updateTenantSuccess());
				await dispatch(getOwnerDashboard());
				await navigate('RoomInfo', {
					buildingId,
					roomId,
				});
				console.log('Tenant details updated successfully.');
			})
			.catch((error) => {
				console.log(
					'Error updating tenant details',
					error.response.data.err
				);
				dispatch(updateTenantFail());
			});
	};
};
