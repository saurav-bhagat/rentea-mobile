import {
	ADD_ROOM_REQUEST,
	ADD_ROOM_SUCCESS,
	ADD_ROOM_FAIL,
} from './addRoomSeparatelyTypes';

import { navigate } from '../../../navigation/rootNavigation';

import axios from 'axios';
import { API_URL } from '@env';
import { getOwnerDashboard } from './dashboardAction';

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
	return (dispatch, getState) => {
		dispatch(addRoomRequest());
		const state = getState();

		const body = { ...roomDetails };

		axios
			.put(`${API_URL}/owner/add-rooms`, body, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${state.auth.userInfo.accessToken}`,
				},
			})
			.then(async (response) => {
				dispatch(addRoomSuccess());
				await dispatch(getOwnerDashboard());
				navigate('Properties');
				console.log('Rooms added successfully.');
			})
			.catch((error) => {
				console.log('Failed to save rooms', error.response.data.err);
				dispatch(addRoomFail());
			});
	};
};
