import axios from 'axios';
import { API_URL } from '@env';
import { navigate } from '../../../navigation/rootNavigation';

export const addUserDetailRequest = () => {
	return {
		type: 'ADD_USER_DETAIL_REQUEST',
	};
};

export const addUserDetailSuccess = (payload) => {
	return {
		type: 'ADD_USER_DETAIL_SUCCESS',
		payload,
	};
};

export const addUserDetailFail = (error) => {
	return {
		type: 'ADD_USER_DETAIL_FAIL',
		error,
	};
};

export const addUserDetail = (userData) => {
	return (dispatch, getState) => {
		dispatch(addUserDetailRequest());
		const { auth } = getState();
		const body = {
			_id: auth.userInfo.userDetails.ownerId,
			name: `${userData.fName} ${userData.lName}`,
			email: userData.email,
		};

		axios
			.put(`${API_URL}/auth/update-basic-info`, body, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${auth.userInfo.accessToken}`,
				},
			})
			.then(async (response) => {
				console.log('response after updating user details', response);
				dispatch(addUserDetailSuccess(response.data.updatedUserInfo));
				navigate('OwnerBankDetail');
			})
			.catch((err) => {
				dispatch(addUserDetailFail(err.message));
				console.log(err.message);
				console.log(err.response.data);
				alert('Error while add user info');
			});
	};
};
