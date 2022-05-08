import axios from 'axios';
import { API_URL } from '@env';

import { navigate } from '../../../navigation/rootNavigation';
import {
	ADD_TENANT_FAILURE,
	ADD_TENANT_REQUEST,
	ADD_TENANT_SUCCESS,
	CLEAR_ADD_TENANT_MSG_ERROR,
} from './addEntitiesTypes';
import { getOwnerDashboard } from './dashboardAction';
import { getToken } from '../../../helpers/checkTokenExpiry';

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

export const clearAddTenantMsgErrorOnDialogClose = () => {
	return {
		type: CLEAR_ADD_TENANT_MSG_ERROR,
	};
};

export const addTenant = (tenantData) => {
	return async (dispatch, getState) => {
		dispatch(addTenantRequest());
		const { auth } = getState();
		const ownerId = auth.userInfo.userDetails.ownerId;
		const tenantToRegister = { ...tenantData, ownerId };
		const token = await getToken();
		axios
			.post(`${API_URL}/owner/register-tenant`, tenantToRegister, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			})
			.then(async (response) => {
				console.log('Tenant Added: ', response.data);
				dispatch(addTenantSuccess(response.data));

				// to update the dashboard in the redux store
				await dispatch(getOwnerDashboard());

				await navigate('RoomInfo', {
					buildingId: tenantData.buildId,
					roomId: tenantData.roomId,
				});
			})
			.catch((error) => {
				console.log('Error while adding tenant: ', error.response.data);
				dispatch(addTenantFailure(error.response.data));
			});
	};
};
