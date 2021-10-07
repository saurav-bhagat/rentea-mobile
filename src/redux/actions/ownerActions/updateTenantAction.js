import {
	UPDATE_TENANT_REQUEST,
	UPDATE_TENANT_SUCCESS,
	UPDATE_TENANT_FAIL,
} from './updateTenantActionTypes';

import axios from 'axios';
import { API_URL } from '@env';
import { navigate } from '../../../navigation/rootNavigation';

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

export const updateTenantDetails = (tenantDetails) => {
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
			.then((response) => {
				dispatch(updateTenantSuccess());
				navigate('Properties');
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
