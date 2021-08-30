export const setRoomDetails = () => {
	return {
		type: 'SET_ROOM_DETAILS',
	};
};

export const saveRoomData = (roomObj) => {
	return {
		type: 'SET_ROOM_DATA',
		payload: roomObj,
	};
};
