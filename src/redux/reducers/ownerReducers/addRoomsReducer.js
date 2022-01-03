import { find } from 'lodash';
import {
	SET_ROOM_DATA,
	SET_ROOM_DETAILS,
	UPDATE_ROOM_DATA,
	REMOVE_ROOM_DATA,
} from '../../actions/ownerActions/addRoomActionTypes';

const initialState = {
	roomDetails: [],
};

export const addRoomsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ROOM_DATA:
			if (find(state.roomDetails, action.payload)) {
				return state;
			}
			// update the state only if unique room number comes
			return {
				...state,
				roomDetails: [...state.roomDetails, action.payload],
			};
		case SET_ROOM_DETAILS:
			return {
				...state,
				roomDetails: [],
			};
		case UPDATE_ROOM_DATA:
			return {
				...state,
				roomDetails: state.roomDetails.map((roomDetail) =>
					roomDetail._id === action.payload._id
						? action.payload.updatedRoomObj
						: roomDetail
				),
			};
		case REMOVE_ROOM_DATA:
			return {
				...state,
				roomDetails: state.roomDetails.filter(
					(roomDetail) => roomDetail._id !== action.payload._id
				),
			};
		default:
			return state;
	}
};
