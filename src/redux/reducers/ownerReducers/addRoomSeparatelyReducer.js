import {
	ADD_ROOM_REQUEST,
	ADD_ROOM_SUCCESS,
	ADD_ROOM_FAIL,
} from '../../actions/ownerActions/addRoomSeparatelyTypes';

const initialState = {
	msg: '',
	loading: false,
};

const addRoomSeparatelyReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ROOM_REQUEST:
			return {
				...state,
				loading: true,
			};

		case ADD_ROOM_SUCCESS:
			return {
				...state,
				msg: action.msg,
				loading: false,
			};
		case ADD_ROOM_FAIL:
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

export default addRoomSeparatelyReducer;
