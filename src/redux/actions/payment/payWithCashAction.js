import axios from 'axios';
import { API_URL } from '@env';
import { navigate } from '../../../navigation/rootNavigation';
import {
	PAY_WITH_CASH_FAIL,
	PAY_WITH_CASH_REQUEST,
	PAY_WITH_CASH_SUCCESS,
} from './payWithActionTypes';

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

export const payWithCash = (paymentDetail) => {
	return (dispatch, getState) => {
		dispatch(payWithCashRequest());
		const { auth } = getState();
		const { amount, tenantUserId, rentDueDate } = paymentDetail;
		const body = { amount, tenantUserId, rentDueDate };

		axios
			.post(`${API_URL}/owner/pay-with-cash`, body, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${auth.userInfo.accessToken}`,
				},
			})
			.then((response) => {
				dispatch(payWithCashSuccess(response.data.msg));
				navigate('Properties');
			})
			.catch((err) => {
				dispatch(payWithCashFail(err.response.data.err));
				alert('Error while paying with cash ');
			});
	};
};
