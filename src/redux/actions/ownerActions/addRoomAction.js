import {
	SET_ROOM_DATA,
	SET_ROOM_DETAILS,
	UPDATE_ROOM_DATA,
	REMOVE_ROOM_DATA,
} from './addRoomActionTypes';

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

export const updateRoomData = (updatedRoomObj, _id) => {
	return {
		type: UPDATE_ROOM_DATA,
		payload: {
			updatedRoomObj,
			_id,
		},
	};
};

export const removeRoomData = (_id) => {
	return {
		type: REMOVE_ROOM_DATA,
		payload: {
			_id,
		},
	};
};
