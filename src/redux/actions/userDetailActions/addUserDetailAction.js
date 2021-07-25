import axios from 'axios';
import { API_URL } from '@env';
import { navigate } from '../../../navigation/rootNavigation';

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
		const { auth } = getState();
		const body = {
			_id: auth.userInfo.ownerBasicDetails._id,
			name: `${userData.fName} ${userData.lName}`,
			email: userData.email,
		};

		axios
			.put(`${API_URL}/auth/update-basic-info`, body, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${auth.userToken}`,
				},
			})
			.then((response) => {
				dispatch(addUserDetailSuccess(response.data.updatedUserInfo));
				navigate('AddBuildingForm');
			})
			.catch((err) => {
				dispatch(addUserDetailFail(err.message));
				alert('Error while add user info');
			});
	};
};
