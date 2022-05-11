import axios from 'axios';
import { API_URL } from '@env';
import {
	TENANT_REMOVE_FAIL,
	TENANT_REMOVE_REQUEST,
	TENANT_REMOVE_SUCCESS,
} from './removeTenantType';
import { getToken } from '../../../helpers/checkTokenExpiry';
import { getOwnerDashboard } from './dashboardAction';

export const removeTenantRequest = () => {
	return {
		type: TENANT_REMOVE_REQUEST,
	};
};
export const removeTenantSuccess = (message) => {
	return {
		type: TENANT_REMOVE_SUCCESS,
		payload: {
			message,
		},
	};
};
export const removeTenantFail = (error) => {
	return {
		type: TENANT_REMOVE_FAIL,
		payload: {
			error,
		},
	};
};

export const removeTenant = (tenantId) => {
	return async (dispatch) => {
		dispatch(removeTenantRequest());
		const token = await getToken();
		const body = {
			tenantId,
		};
		axios
			.delete(`${API_URL}/owner/remove-tenant`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				data: body,
			})
			.then((response) => {
				dispatch(removeTenantSuccess(response.data.msg));
				dispatch(getOwnerDashboard());
			})
			.catch((err) => {
				console.log('error while deleting tenant', err.response.err);
				dispatch(removeTenantFail(err.response.err));
			});
	};
};
