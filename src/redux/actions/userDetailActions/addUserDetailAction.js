import axios from 'axios';
import { API_URL } from '@env';
import { navigate } from '../../../navigation/rootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
			_id: auth.userInfo.userDetails._id,
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
				// update asyncstorage 'userInfo' with firstLogin: false
				try {
					let userInfo = await AsyncStorage.getItem('userInfo');
					userInfo = JSON.parse(userInfo);
					userInfo.firstLogin = false;
					await AsyncStorage.setItem(
						'userInfo',
						JSON.stringify(userInfo)
					);
				} catch (err) {
					console.log('Error in setting firstLogin False', err);
				}
				dispatch(addUserDetailSuccess(response.data.updatedUserInfo));
				navigate('AddBuildingForm');
			})
			.catch((err) => {
				dispatch(addUserDetailFail(err.message));
				console.log(err.message);
				console.log(err.response.data);
				alert('Error while add user info');
			});
	};
};
