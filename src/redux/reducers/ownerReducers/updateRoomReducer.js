import {
	UPDATE_ROOM_DATA_REQUEST,
	UPDATE_ROOM_DATA_SUCCESS,
	UPDATE_ROOM_DATA_FAIL,
} from '../../actions/ownerActions/updateRoomActionTypes';

const initialState = {
	msg: '',
	loading: false,
};

const updateRoomReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_ROOM_DATA_REQUEST:
			return {
				...state,
				loading: true,
			};
		case UPDATE_ROOM_DATA_SUCCESS:
			return {
				...state,
				msg: action.msg,
				loading: false,
			};
		case UPDATE_ROOM_DATA_FAIL:
			return {
				...state,
				msg: action.msg,
				loading: false,
			};

		default:
			return {
				...state,
				msg: 'default state',
			};
	}
};
export default updateRoomReducer;
