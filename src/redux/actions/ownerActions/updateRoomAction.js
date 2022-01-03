import axios from 'axios';
import { API_URL } from '@env';
import { navigate } from '../../../navigation/rootNavigation';
import {
	UPDATE_ROOM_DATA_REQUEST,
	UPDATE_ROOM_DATA_SUCCESS,
	UPDATE_ROOM_DATA_FAIL,
} from './updateRoomActionTypes';
import { getOwnerDashboard } from './dashboardAction';
import { getToken } from '../../../helpers/checkTokenExpiry';

export const updateRoomDataRequest = () => {
	return {
		type: UPDATE_ROOM_DATA_REQUEST,
	};
};

export const updateRoomDataSuccess = () => {
	return {
		type: UPDATE_ROOM_DATA_SUCCESS,
		msg: 'room updated successfully',
	};
};

export const updateRoomDataFail = () => {
	return {
		type: UPDATE_ROOM_DATA_FAIL,
		msg: 'failed to update room',
	};
};

export const updateRoomDetail = (roomData, buildingId) => {
	console.log(API_URL);
	return async (dispatch) => {
		dispatch(updateRoomDataRequest());

		const body = { ...roomData };
		const token = await getToken();
		axios
			.put(`${API_URL}/owner/update-room-details`, body, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			})
			.then(async (response) => {
				dispatch(updateRoomDataSuccess());
				await dispatch(getOwnerDashboard());
				await navigate('RoomInfo', {
					buildingId,
					roomId: roomData.roomId,
				});
				console.log('Room details updated successfully.');
			})
			.catch((error) => {
				console.log(
					'error while updating room details',
					error.response.data.err
				);
				dispatch(updateRoomDataFail());
			});
	};
};
