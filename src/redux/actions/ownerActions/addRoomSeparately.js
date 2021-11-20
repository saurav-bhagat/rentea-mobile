import axios from 'axios';
import {
	ADD_ROOM_REQUEST,
	ADD_ROOM_SUCCESS,
	ADD_ROOM_FAIL,
} from './addRoomSeparatelyTypes';

import { navigate } from '../../../navigation/rootNavigation';

import { API_URL } from '@env';
import { getOwnerDashboard } from './dashboardAction';
import { getToken } from '../../../helpers/checkTokenExpiry';

export const addRoomRequest = () => {
	return {
		type: ADD_ROOM_REQUEST,
	};
};

export const addRoomSuccess = () => {
	return {
		type: ADD_ROOM_SUCCESS,
		msg: 'room added successfully',
	};
};

export const addRoomFail = () => {
	return {
		type: ADD_ROOM_FAIL,
		msg: 'failed to save room',
	};
};

export const addRoomSeparately = (roomDetails) => {
	return async (dispatch) => {
		dispatch(addRoomRequest());

		const body = { ...roomDetails };
		const token = await getToken();
		axios
			.put(`${API_URL}/owner/add-rooms`, body, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			})
			.then(async (response) => {
				dispatch(addRoomSuccess());
				await dispatch(getOwnerDashboard());
				await navigate('PropertyInfo', {
					buildingId: roomDetails.buildingId,
				});
				console.log('Rooms added successfully.');
			})
			.catch((error) => {
				console.log('Failed to save rooms', error.response.data.err);
				dispatch(addRoomFail());
			});
	};
};
