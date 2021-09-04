import { SET_ROOM_DATA, SET_ROOM_DETAILS } from './addRoomActionTypes';

export const setRoomDetails = () => {
	return {
		type: SET_ROOM_DETAILS,
	};
};

export const saveRoomData = (roomObj) => {
	return {
		type: SET_ROOM_DATA,
		payload: roomObj,
	};
};
