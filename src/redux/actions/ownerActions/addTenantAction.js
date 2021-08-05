import axios from 'axios';
import { API_URL } from '@env';

import { navigate } from '../../../navigation/rootNavigation';
import {
	ADD_TENANT_FAILURE,
	ADD_TENANT_REQUEST,
	ADD_TENANT_SUCCESS,
} from './addEntitiesTypes';
import { getOwnerDashboard } from './dashboardAction';

const addTenantRequest = () => {
	return {
		type: ADD_TENANT_REQUEST,
	};
};

const addTenantSuccess = (payload) => {
	return {
		type: ADD_TENANT_SUCCESS,
		payload,
	};
};

const addTenantFailure = (error) => {
	return {
		type: ADD_TENANT_FAILURE,
		payload: error,
	};
};

export const addTenant = (tenantData) => {
	return (dispatch, getState) => {
		dispatch(addTenantRequest());
		const { auth } = getState();
		const ownerId = auth.userInfo.userDetails.ownerId;
		const tenantToRegister = { ...tenantData, ownerId };

		axios
			.post(`${API_URL}/owner/register-tenant`, tenantToRegister, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${auth.userInfo.accessToken}`,
				},
			})
			.then((response) => {
				console.log('Tenant Added: ', response.data);
				dispatch(addTenantSuccess(response.data));

				// to update the dashboard in the redux store
				dispatch(getOwnerDashboard());

				setTimeout(() => navigate('Properties'), 1000);
			})
			.catch((error) => {
				console.log('Error while adding tenant: ', error.response.data);
				dispatch(addTenantFailure(error.response.data));
			});
	};
};
