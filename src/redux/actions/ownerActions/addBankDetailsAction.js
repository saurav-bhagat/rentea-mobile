import axios from 'axios';
import { API_URL } from '@env';
import { navigate } from '../../../navigation/rootNavigation';
import {
	ADD_BANK_DETAILS_FAIL,
	ADD_BANK_DETAILS_REQUEST,
	ADD_BANK_DETAILS_SUCCESS,
} from './addBankDetailsType';
import { getToken } from '../../../helpers/checkTokenExpiry';
import { getOwnerDashboard } from './dashboardAction';

export const addBankDetailsRequest = () => {
	return {
		type: ADD_BANK_DETAILS_REQUEST,
	};
};

export const addBankDetailsSuccess = (bankDetails) => {
	return {
		type: ADD_BANK_DETAILS_SUCCESS,
		payload: bankDetails,
	};
};

export const addBankDetailsFail = () => {
	return {
		type: ADD_BANK_DETAILS_FAIL,
	};
};

export const addBankDetailsData = (bankDetails) => {
	return async (dispatch, getState) => {
		dispatch(addBankDetailsRequest());
		const state = getState();

		const body = {
			ownerId: state.auth.userInfo.userDetails.ownerId,
			...bankDetails,
		};
		const { firstLogin } = state.auth.userInfo;
		const token = await getToken();
		axios
			.post(`${API_URL}/owner/add-bank-info`, body, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			})
			.then(async (response) => {
				dispatch(addBankDetailsSuccess(bankDetails));
				await dispatch(getOwnerDashboard());
				firstLogin
					? navigate('AddBuildingForm')
					: navigate('ownerDashboard');
				console.log('owner bank details added successfully!');
			})
			.catch((error) => {
				console.log(
					'error while sending owner bank details data is : ',
					error.response.data.err
				);
				dispatch(addBankDetailsFail());
				alert('Error while adding owner bank details ');
			});
	};
};
