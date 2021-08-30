import { find } from 'lodash';

const initialState = {
	roomDetails: [],
};

export const addRoomsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_ROOM_DATA':
			if (find(state.roomDetails, action.payload)) {
				return state;
			}
			// update the state only if unique room number comes
			return {
				...state,
				roomDetails: [...state.roomDetails, action.payload],
			};
		case 'SET_ROOM_DETAILS':
			return {
				...state,
				roomDetails: [],
			};
		default:
			return state;
	}
};
