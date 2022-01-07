import axios from 'axios';
import { API_URL } from '@env';
import { navigate } from '../../../navigation/rootNavigation';
import {
	PAY_WITH_CASH_FAIL,
	PAY_WITH_CASH_REQUEST,
	PAY_WITH_CASH_SUCCESS,
	SET_PAY_WITH_CASH_RESPONSE_FOR_SNACK,
} from './payWithActionTypes';
import { getOwnerDashboard } from '../ownerActions/dashboardAction';
import { getToken } from '../../../helpers/checkTokenExpiry';

export const payWithCashRequest = () => {
	return {
		type: PAY_WITH_CASH_REQUEST,
	};
};

export const payWithCashSuccess = (respMsg) => {
	return {
		type: PAY_WITH_CASH_SUCCESS,
		payload: respMsg,
	};
};

export const payWithCashFail = (respMsg) => {
	return {
		type: PAY_WITH_CASH_FAIL,
		payload: respMsg,
	};
};

export const setPayWithCashResponseForSnack = () => {
	return {
		type: 'SET_PAY_WITH_CASH_RESPONSE_FOR_SNACK',
		payload: '',
	};
};

export const payWithCash = (paymentDetail) => {
	return async (dispatch) => {
		dispatch(payWithCashRequest());
		const { tenant, singleRoomData, propertyInfo } = paymentDetail;
		const { _id: tenantUserId, rentDueDate } = tenant;
		let { rent: amount } = tenant;
		if (!singleRoomData.isMultipleTenant) {
			amount = singleRoomData.rent;
		}

		const body = { amount, tenantUserId, rentDueDate };
		const token = await getToken();
		axios
			.post(`${API_URL}/owner/pay-with-cash`, body, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			})
			.then(async (response) => {
				dispatch(payWithCashSuccess(response.data.msg));
				await dispatch(getOwnerDashboard());
				await navigate('TenantInfo', {
					roomId: singleRoomData._id,
					buildingId: propertyInfo._id,
					tenantUserId,
				});
			})
			.catch((err) => {
				dispatch(payWithCashFail(err.response.data.err));
				alert('Error while paying with cash ');
				navigate('RoomInfo', {
					roomId,
					buildingId,
				});
			});
	};
};
